type Participant = {
    id: string,
    user_id: string,
    conversation_id: string,
    created_at: Date,
    updated_at: Date | null,
    deleted_at: Date | null,
};
export default Participant;