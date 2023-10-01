export const TYPE_DEFINITIONS = `

    type User {
            id: ID!,
            name: String!,
            username: String!,
            email: String!,
            phone: String,
            website: String
    }
    
    type Todo {
        id : ID!,
        title: String!,
        user: User,
        completed: Boolean
    }
    
    type Query {
        getTodos : [Todo],
        getUsers : [User],
        getUser(id : ID!) : User
    }
    
`;
