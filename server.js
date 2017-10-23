'use strict';

const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const http = require('http');
const example = require('./routes/getExample');

const port = process.env.PORT || 5000;

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello world!';
  },
};


const app = express();

app.get('/example', example);

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));


const server = http.createServer(app);

server.listen(port, function () {
    console.log('Example app listening on port ' + server.address().port);
});
