import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const client = new ApolloClient({
    link: new createHttpLink({
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            "X-Shopify-Storefront-Access-Token": `${process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN}`
        },
        uri: "https://applitools-demo.myshopify.com/api/2022-04/graphql.json",
    }),
    
    cache: new InMemoryCache(),
  });

export default client;