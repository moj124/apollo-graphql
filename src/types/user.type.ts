type User = {
    id: string,
    email: string,
    name: string,
    password: string,
    createdAt: Date,
    updatedAt: Date | null,
    deletedAt: Date | null,
}
export default User;