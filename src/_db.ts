import Conversation from "./types/conversation.type.js";
import Message from "./types/message.type.js";
import Participant from "./types/participant.type.js";
import User from "./types/user.type.js";

export const users: User[] = [
    {
        id: "1",
        email: "john.doe@example.com",
        name: "John Doe",
        password: "hashed_password_1",
        createdAt: new Date("2023-01-01T10:00:00Z"),
        updatedAt: new Date("2023-01-05T10:00:00Z"),
        deletedAt: null,
    },
    {
        id: "2",
        email: "jane.smith@example.com",
        name: "Jane Smith",
        password: "hashed_password_2",
        createdAt: new Date("2023-02-01T10:00:00Z"),
        updatedAt: new Date("2023-02-05T10:00:00Z"),
        deletedAt: null,
    },
];

export const messages: Message[] = [
    {
        id: "1",
        userId: "1",
        conversationId: "1",
        content: "Hello, how are you?",
        createdAt: new Date("2023-01-01T10:05:00Z"),
        updatedAt: new Date("2023-01-01T10:05:00Z"),
        deletedAt: null,
    },
    {
        id: "2",
        userId: "2",
        conversationId: "1",
        content: "I'm good, thank you!",
        createdAt: new Date("2023-01-01T10:06:00Z"),
        updatedAt: new Date("2023-01-01T10:06:00Z"),
        deletedAt: null,
    },
    {
        id: "3",
        userId: "2",
        conversationId: "1",
        content: "How dare you!",
        createdAt: new Date("2023-01-01T10:06:00Z"),
        updatedAt: new Date("2023-01-01T10:06:00Z"),
        deletedAt: null,
    },
];

export const conversations: Conversation[] = [
    {
        id: "1",
        name: "General Chat",
        createdAt: new Date("2023-01-01T09:00:00Z"),
        updatedAt: new Date("2023-01-01T09:00:00Z"),
        deletedAt: null,
    },
];

export const participants: Participant[] = [
    {
        id: "1",
        userId: "1",
        conversationId: "1",
        createdAt: new Date("2023-01-01T09:00:00Z"),
        updatedAt: new Date("2023-01-01T09:00:00Z"),
        deletedAt: null,
    },
    {
        id: "2",
        userId: "2",
        conversationId: "1",
        createdAt: new Date("2023-01-01T09:00:00Z"),
        updatedAt: new Date("2023-01-01T09:00:00Z"),
        deletedAt: null,
    },
];