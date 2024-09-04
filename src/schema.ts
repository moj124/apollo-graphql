export const typeDefs = `#graphql
    scalar Date

    type User {
        id: ID!,
        email: String!,
        name: String!,
        password: String!,
        createdAt: Date!,
        updatedAt: Date,
        deletedAt: Date,
    }

    type Message {
        id: ID!,
        userId: ID!,
        conversationId: ID!,
        content: String!,
        createdAt: Date!,
        updatedAt: Date,
        deletedAt: Date,
    }

    type Conversation {
        id: ID!,
        name: String!,
        createdAt: Date!,
        updatedAt: Date,
        deletedAt: Date,
    }

    type Participant {
        id: ID!,
        userId: ID!,
        conversationId: ID!,
        createdAt: Date!,
        updatedAt: Date,
        deletedAt: Date,
    }

    type Query {
        users: [User],
        messages: [Message],
        conversations: [Conversation],
        participants: [Participant],
        findUser(id: ID!): User,
        findUserByEmail(email: String!): User,
        findUsersByName(name: String!): [User],
        findMessage(id: ID!): Message,
        findMessagesByUser(id: ID!): [Message],      
        findConversation(id: ID!): Conversation,
        findParticipants(id: ID!): Participant,
    }

    type Mutation {
        createMessage(content: String!, userId: ID!, conversationId: ID!): Message!,
        createUser(emaill: String!, name: String!, password: String!): User!,
        createConversation(name: String!): Conversation!,
    }
`