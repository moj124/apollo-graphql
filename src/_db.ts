import Conversation from "./types/conversation.type";
import Message from "./types/message.type";
import Participant from "./types/participant.type";
import User from "./types/user.type";

export const users: User[] = [
    {
        id: "1",
        email: "john.doe@example.com",
        name: "John Doe",
        password: "hashed_password_1",
        created_at: new Date("2023-01-01T10:00:00Z"),
        updated_at: new Date("2023-01-05T10:00:00Z"),
        deleted_at: null,
    },
    {
        id: "2",
        email: "jane.smith@example.com",
        name: "Jane Smith",
        password: "hashed_password_2",
        created_at: new Date("2023-02-01T10:00:00Z"),
        updated_at: new Date("2023-02-05T10:00:00Z"),
        deleted_at: null,
    },
];

export const messages: Message[] = [
    {
        id: "1",
        user_id: "1",
        conversation_id: "1",
        content: "Hello, how are you?",
        created_at: new Date("2023-01-01T10:05:00Z"),
        updated_at: new Date("2023-01-01T10:05:00Z"),
        deleted_at: null,
    },
    {
        id: "2",
        user_id: "2",
        conversation_id: "1",
        content: "I'm good, thank you!",
        created_at: new Date("2023-01-01T10:06:00Z"),
        updated_at: new Date("2023-01-01T10:06:00Z"),
        deleted_at: null,
    },
];

export const conversations: Conversation[] = [
    {
        id: "1",
        name: "General Chat",
        created_at: new Date("2023-01-01T09:00:00Z"),
        updated_at: new Date("2023-01-01T09:00:00Z"),
        deleted_at: null,
    },
];

export const participants: Participant[] = [
    {
        id: "1",
        user_id: "1",
        conversation_id: "1",
        created_at: new Date("2023-01-01T09:00:00Z"),
        updated_at: new Date("2023-01-01T09:00:00Z"),
        deleted_at: null,
    },
    {
        id: "2",
        user_id: "2",
        conversation_id: "1",
        created_at: new Date("2023-01-01T09:00:00Z"),
        updated_at: new Date("2023-01-01T09:00:00Z"),
        deleted_at: null,
    },
];