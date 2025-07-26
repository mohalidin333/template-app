"use client";

import ReusableTable from "@/components/reusable-table";
import { useFilter } from "@/hooks/use-filter";
import { UsersColumns } from "@/constants/admin/users/columns";
import { UsersFields } from "@/constants/admin/users/fields";
import React, { useState } from "react";
import z from "zod";
import { UsersSchema, UsersDefaultValues } from "@/validations/admin/users";
import { UsersData as UsersDataType } from "@/types/admin/users";
import FormModal from "@/components/form-modal";
import UsersHeader from "@/components/admin/users/header";
import DeleteModal from "@/components/delete-modal";
import { UsersData } from "@/constants/admin/users/data";
import { Role } from "@/constants/role";
import { useRouter } from "next/navigation";

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

  const handleSubmit = (data: z.infer<typeof UsersSchema>) => {
    setIsSubmitting(true);
    console.log(data);
  };

  const handleEdit = (data: UsersDataType) => {
    setEditModal(true);
    setUser(data);
  };

  const handleSave = (data: z.infer<typeof UsersSchema>) => {
    setIsSubmitting(true);
    console.log(data);
  };

  const handleDelete = (id: string) => {
    setDeleteModal(true);
    setUser({ ...user, id });
  };

  const handleDeleteData = () => {
    setIsSubmitting(true);
    user.id && console.log(user.id);
  };

  const handleChat = (id: string) => {
    router.push(`/chats/${id}`);
  };

  const columns = UsersColumns({ handleChat, handleEdit, handleDelete });

  return (
    <main className="flex-1 overflow-y-auto p-6 space-y-6">
      <UsersHeader handleFilter={handleFilter} setAddModal={setAddModal} />

      {/* table */}
      <ReusableTable
        columns={columns}
        data={UsersData}
        setColumnFilters={setColumnFilters}
        columnFilters={columnFilters}
        pageSize={15}
      />

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
        schema={UsersSchema}
        defaultValues={user}
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
