"use client";

import DeleteModal from "@/components/delete-modal";
import FormModal from "@/components/form-modal";
import ReusableTable from "@/components/reusable-table";
import { Button } from "@/components/ui/button";
import { UserRolesColumns } from "@/constants/admin/settings/options/user-roles-columns";
import { UserRolesFields } from "@/constants/admin/settings/options/user-roles-fields";
import { UserRolesData } from "@/constants/admin/settings/options/users-roles-data";
import { useFilter } from "@/hooks/use-filter";
import { UserRolesData as UserRolesDataType } from "@/types/admin/user-roles";
import {
  UserRolesDefaultValues,
  UserRolesSchema,
} from "@/validations/admin/user-roles";
import { Plus } from "lucide-react";
import { useState } from "react";
import z from "zod";

export default function UserRoles() {
  const { setColumnFilters, columnFilters } = useFilter();
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [role, setRole] = useState({
    id: "",
    role: "",
  });

  const handleSubmit = (data: z.infer<typeof UserRolesSchema>) => {
    setIsSubmitting(true);
    console.log(data);
  };

  const handleEdit = (data: UserRolesDataType) => {
    setEditModal(true);
    setRole(data);
  };

  const handleSave = (data: z.infer<typeof UserRolesSchema>) => {
    setIsSubmitting(true);
    console.log(data);
  };

  const handleDelete = (id: string) => {
    setDeleteModal(true);
    setRole({ ...role, id });
  };

  const handleDeleteData = () => {
    setIsSubmitting(true);
    console.log(role);
  };

  const columns = UserRolesColumns({ handleEdit, handleDelete });

  return (
    <main className="flex-1 overflow-y-auto px-6 space-y-6">
      <div className="flex-wrap flex items-end gap-6 justify-between w-full">
        <div>
          <h1 className="title-semi-md">User Roles</h1>
          <p className="sub-title-sm">Manage user roles here.</p>
        </div>
        <div className="flex items-center gap-4">
          <Button onClick={() => setAddModal(true)} className="cursor-pointer">
            <Plus className="icon-base" />
            Add Role
          </Button>
        </div>
      </div>

      <ReusableTable
        columns={columns}
        data={UserRolesData}
        setColumnFilters={setColumnFilters}
        columnFilters={columnFilters}
        pageSize={15}
      />

      {/* add modal */}
      <FormModal
        title="Add Role"
        subTitle="Enter role details here."
        fields={UserRolesFields}
        schema={UserRolesSchema}
        defaultValues={UserRolesDefaultValues}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        setIsSubmitting={setIsSubmitting}
        addModal={addModal}
        setAddModal={setAddModal}
      />

      {/* edit modal */}
      <FormModal
        title="Edit Role"
        subTitle="Edit role details here."
        fields={UserRolesFields}
        schema={UserRolesSchema}
        defaultValues={role}
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
