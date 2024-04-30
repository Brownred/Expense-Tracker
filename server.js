import { graphql, buildSchema } from "graphql";

// Construct a schema usnig graphql schema language
var schema = buildSchema(`
  type Query {
    hello: String
    age: Int
  }
`);

// The root provides a resolver function for each API endpoint. How we are going to get the data
var rootValue = {
  hello: () => {
    // This is the data that we are going to return
    // fetched from database or any other source and processed
    return "Hello world!";
  },
};

var source = "{ hello }"; // The value that we want to query

// Run the GraphQL query '{ hello }' and print out the response
graphql({
  schema,
  source,
  rootValue,
}).then((response) => {
  console.log(response);
});
