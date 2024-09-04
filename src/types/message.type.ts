type Message = {
    id: string,
    userId: string,
    conversationId: string,
    content: string,
    createdAt: Date,
    updatedAt: Date | null,
    deletedAt: Date | null,
}
export default Message;