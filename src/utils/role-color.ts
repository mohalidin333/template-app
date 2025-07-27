export function getRoleColor(role: string) {
    switch (role) {
        case "Admin":
            return "badge-green";
        case "User":
            return "badge-yellow";
        default:
            return "badge-gray";
    }
}