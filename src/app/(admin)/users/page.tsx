"use client";

import ReusableTable from "@/components/reusable-table";
import { useFilter } from "@/hooks/use-filter";
import { UsersColumns } from "@/constants/admin/users/columns";
import { UsersFields } from "@/constants/admin/users/fields";
import React, { useState } from "react";
import z from "zod";
import {
  UsersSchema,
  UsersDefaultValues,
  EditUserSchema,
} from "@/validations/admin/users";
import { UsersData as UsersDataType } from "@/types/admin/users";
import FormModal from "@/components/form-modal";
import UsersHeader from "@/components/admin/users/header";
import DeleteModal from "@/components/delete-modal";
import { Role } from "@/constants/role";
import { useRouter } from "next/navigation";
import { addUser } from "@/app/actions/users/add-user";
import { toast } from "sonner";
import { Check, X } from "lucide-react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { UserList } from "@/services/user-list";
import { editUser } from "@/app/actions/users/edit-user";
import { DeleteUser } from "@/services/delete-user";

export default function Users() {
  const { handleFilter, setColumnFilters, columnFilters } = useFilter();
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [user, setUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    role: "User" as Role,
    email: "",
  });
  const router = useRouter();
  const queryClient = useQueryClient();

  const { data: userList, isLoading } = useQuery({
    queryKey: ["user-list"],
    queryFn: async () => {
      const data = await UserList();
      return data;
    },
  });

  const handleSubmit = async (data: z.infer<typeof EditUserSchema>) => {
    if (data.password !== data.confirmPassword) {
      return toast.error("Passwords do not match", {
        icon: <X className="icon-base text-red-500 mt-1" />,
      });
    }

    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("role", data.role);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("confirmPassword", data.confirmPassword);
    const response = await addUser(formData);

    if (!response.success) {
      setIsSubmitting(false);
      return toast.error(response.error as string, {
        icon: <X className="icon-base text-red-500 mt-1" />,
      });
    }

    await queryClient.invalidateQueries({ queryKey: ["user-list"] });

    setIsSubmitting(false);
    setAddModal(false);
    return toast.success("User added successfully", {
      icon: <Check className="icon-base text-green-500 mt-1" />,
    });
  };

  const handleEdit = (data: UsersDataType) => {
    setEditModal(true);
    setUser(data);
  };

  const handleSave = async (data: z.infer<typeof EditUserSchema>) => {
    if (data.password !== data.confirmPassword) {
      return toast.error("Passwords do not match", {
        icon: <X className="icon-base text-red-500 mt-1" />,
      });
    }

    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("id", user.id);
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("role", data.role);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("confirmPassword", data.confirmPassword);
    const response = await editUser(formData);

    if (!response.success) {
      setIsSubmitting(false);
      return toast.error(response.error as string, {
        icon: <X className="icon-base text-red-500 mt-1" />,
      });
    }

    await queryClient.invalidateQueries({ queryKey: ["user-list"] });

    setIsSubmitting(false);
    setEditModal(false);
    return toast.success("User added successfully", {
      icon: <Check className="icon-base text-green-500 mt-1" />,
    });
  };

  const handleDelete = (id: string) => {
    setDeleteModal(true);
    setUser({ ...user, id });
  };

  const handleDeleteData = async () => {
    setIsSubmitting(true);
    const response = await DeleteUser(user.id);

    if (!response) {
      setIsSubmitting(false);
      return toast.error("Failed to delete user", {
        icon: <X className="icon-base text-red-500 mt-1" />,
      });
    }

    await queryClient.invalidateQueries({ queryKey: ["user-list"] });

    setIsSubmitting(false);
    setDeleteModal(false);
    return toast.success("User deleted successfully", {
      icon: <Check className="icon-base text-green-500 mt-1" />,
    });
  };

  const handleChat = (id: string) => {
    router.push(`/chats/${id}`);
  };

  const columns = UsersColumns({ handleChat, handleEdit, handleDelete });

  return (
    <main className="flex-1 overflow-y-auto p-6 space-y-6">
      <UsersHeader handleFilter={handleFilter} setAddModal={setAddModal} />

      {/* table */}
      {isLoading ? (
        <div className="text-center text-muted-foreground py-10">
          Loading users...
        </div>
      ) : userList ? (
        <ReusableTable
          columns={columns}
          data={userList as UsersDataType[]}
          setColumnFilters={setColumnFilters}
          columnFilters={columnFilters}
          pageSize={15}
        />
      ) : (
        <div className="text-center text-muted-foreground py-10">
          No users found.
        </div>
      )}

      {/* add modal */}
      <FormModal
        title="Add User"
        subTitle="Enter user details here."
        fields={UsersFields}
        schema={UsersSchema}
        defaultValues={UsersDefaultValues}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        setIsSubmitting={setIsSubmitting}
        addModal={addModal}
        setAddModal={setAddModal}
      />

      {/* edit modal */}
      <FormModal
        title="Edit User"
        subTitle="Edit user details here."
        fields={UsersFields}
        schema={EditUserSchema}
        defaultValues={{
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
          email: user.email,
          password: "",
          confirmPassword: "",
        }}
        handleSubmit={handleSave}
        isSubmitting={isSubmitting}
        setIsSubmitting={setIsSubmitting}
        editModal={editModal}
        setEditModal={setEditModal}
      />

      {/* delete modal */}
      <DeleteModal
        handleDeleteData={handleDeleteData}
        isSubmitting={isSubmitting}
        setIsSubmitting={setIsSubmitting}
        deleteModal={deleteModal}
        setDeleteModal={setDeleteModal}
      />
    </main>
  );
}
