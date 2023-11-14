import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { gql } from "graphql-tag";
import { typeDefs } from "../../../graphql/schema";
import { resolvers } from "../../../graphql/resolver";
import Cors from 'micro-cors';

const cors = Cors();

const server = new ApolloServer({ typeDefs, resolvers });

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
    context: async req => ({ req }),
});

export { handler as GET, handler as POST };