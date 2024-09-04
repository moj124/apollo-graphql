type User = {
    id: string,
    email: string,
    name: string,
    password: string,
    created_at: Date,
    updated_at: Date | null,
    deleted_at: Date | null,
}
export default User;