export const typeDefs = `#graphql
    type User {
        id: ID!,
        email: String!,
        name: String!,
        password: String!,
        created_at: Date!,
        updated_at: Date,
        deleted_at: Date,
    }

    type Message {
        id: ID!,
        user_id: ID!,
        conversation_id: ID!,
        content: String!,
        created_at: Date!,
        updated_at: Date,
        deleted_at: Date,
    }

    type Conversation {
        id: ID!,
        name: String!,
        created_at: Date!,
        updated_at: Date,
        deleted_at: Date,
    }

    type Participant {
        id: ID!,
        user_id: ID!,
        conversation_id: ID!,
        created_at: Date!,
        updated_at: Date,
        deleted_at: Date,
    }

    type Query {
        users: [User],
        messages: [Message],
        conversations: [Conversation],
        participants: [Participant],
    }
`