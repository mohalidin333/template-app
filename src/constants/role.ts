export const Roles = {
  Admin: "Admin",
  User: "User",
} as const;

export type Role = keyof typeof Roles;
