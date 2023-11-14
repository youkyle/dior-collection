import gql from "graphql-tag";


export const typeDefs = gql`
    type Product {
        id: String
        title: String
        description: String
        image: String
        price: Int
    }

    type Query {
        products: [Product]!
    }
`;