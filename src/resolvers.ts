import { users, participants, conversations, messages } from './_db.js';
import Conversation from './types/conversation.type.js';
import Message from './types/message.type.js';
import Participant from './types/participant.type.js';
import User from './types/user.type.js';

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
        findUser(_: any, args: Pick<User, 'id'>) {
            return users.find((user) => user.id === args.id);
        },
        findUserByEmail(_: any, args: Pick<User, 'email'>) {
            return users.find((user) => user.email === args.email);
        },
        findUsersByName(_: any, args: Pick<User, 'name'>) {
            return users.filter((user) => user.name.toLowerCase().includes(args.name.toLowerCase()));
        },
        findMessage(_: any, args: Pick<Message, 'id'>) {
            return messages.find((message) => message.id === args.id);
        },
        findMessagesByUser(_: any, args: Pick<User, 'id'>) {
            return messages.filter((message) => message.userId === args.id);
        },
        findConversation(_: any, args: Pick<Conversation, 'id'>) {
            return conversations.find((conversation) => conversation.id === args.id);
        },
        findParticipants(_: any, args: Pick<Participant, 'id'>) {
            return participants.find((participant) => participant.id === args.id);
        },
    }
};