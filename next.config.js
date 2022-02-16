/** @type {import('next').NextConfig} */

const nextEnv = require("next-env");
const dotEnvLoad = require("dotenv-load");

// it's going to look for .env files in your folder and grab every environment variable present there and
// inject into the enviroment
dotEnvLoad();

const withNextEnv = nextEnv();
module.exports = withNextEnv();
