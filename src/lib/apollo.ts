import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4np8o8c0nvx01xmbjtx5jvy/master",
    cache: new InMemoryCache(),
});
