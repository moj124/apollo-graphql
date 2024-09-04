type Participant = {
    id: string,
    userId: string,
    conversationId: string,
    createdAt: Date,
    updatedAt: Date | null,
    deletedAt: Date | null,
};
export default Participant;