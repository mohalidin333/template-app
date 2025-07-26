"use client";

import React, { ReactNode } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { FieldValues, useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReusableFormProps } from "@/types/components/reusable-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";

export default function ReusableForm<T extends FieldValues>({
  fields,
  schema,
  defaultValues,
  handleSubmit,
  className,
  children,
}: ReusableFormProps<T>) {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      ...defaultValues,
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className={`${className} space-y-4`}>
          {fields.map((item, index) => (
            <div key={index} className="space-y-4">
              {item.group && (
                <div className="flex items-center gap-2">
                  <p className="sub-title-sm">{item.group}</p>
                  <span className="h-px flex-1 bg-gray-200"></span>
                </div>
              )}

              <div className="space-y-4">
                {item.fields.map((subItem, subIndex) =>
                  Array.isArray(subItem) ? (
                    <div
                      key={subIndex}
                      className="md:flex-row flex-col flex gap-4"
                    >
                      {subItem.map((subSubItem, subSubIndex) => (
                        <FormField
                          key={subSubIndex}
                          control={form.control}
                          name={subSubItem.name}
                          render={({ field }) => (
                            <FormItem className="w-full">
                              <FormLabel>{subSubItem.label}</FormLabel>
                              <FormControl>
                                {subSubItem.type === "select" ? (
                                  <Select
                                    value={field.value}
                                    onValueChange={field.onChange}
                                  >
                                    <SelectTrigger className="w-full">
                                      <SelectValue placeholder="Select an option" />
                                    </SelectTrigger>

                                    <SelectContent>
                                      {subSubItem.options?.map(
                                        (option, optionIndex) => (
                                          <SelectItem
                                            key={optionIndex}
                                            value={option}
                                          >
                                            {" "}
                                            {option}
                                          </SelectItem>
                                        )
                                      )}
                                    </SelectContent>
                                  </Select>
                                ) : subSubItem.type === "textarea" ? (
                                  <Textarea {...field} />
                                ) : (
                                  <Input
                                    type={subSubItem.type}
                                    {...field}
                                    multiple
                                  />
                                )}
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>
                  ) : (
                    <FormField
                      key={subIndex}
                      control={form.control}
                      name={subItem.name}
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>{subItem.label}</FormLabel>
                          <FormControl>
                            {subItem.type === "select" ? (
                              <Select
                                value={field.value}
                                onValueChange={field.onChange}
                              >
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Select an option" />
                                </SelectTrigger>

                                <SelectContent>
                                  {subItem.options?.map(
                                    (option, optionIndex) => (
                                      <SelectItem
                                        key={optionIndex}
                                        value={option}
                                      >
                                        {" "}
                                        {option}
                                      </SelectItem>
                                    )
                                  )}
                                </SelectContent>
                              </Select>
                            ) : subItem.type === "textarea" ? (
                              <Textarea {...field} />
                            ) : (
                              <Input type={subItem.type} {...field} multiple />
                            )}
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        {children}
      </form>
    </Form>
  );
}
