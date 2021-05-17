require('dotenv').config();
//const pgp = require('pg-promise')();
const pgp = require('pg-promise')();

//const pg = require('pg');
const user = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD;
const host = process.env.POSTGRES_HOST;
const port = process.env.POSTGRES_PORT;
const database = process.env.POSTGRES_DATABASE;

var config = 'postgres://' + user;
config += ':';
config += password;
config += '@';
config += host;
config += ':';
config += port;
config += '/';
config += database;

console.log(config);

const db = pgp(config);

module.exports = db;
