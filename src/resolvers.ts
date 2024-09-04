import { users, participants, conversations, messages } from './_db';

export const resolvers = {
    Query: {
        users() {
            return users;
        },
        messages() {
            return messages;
        },
        conversations() {
            return conversations;
        },
        participants() {
            return participants;
        },
    }
};