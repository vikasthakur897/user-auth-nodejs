import {config as conf} from "dotenv";

conf();

const _conf = {
    port: process.env.PORT,
    databaseURI: process.env.MONGODB_CONNECTION,
    env : process.env.NODE_ENV,
    jwtSecret: process.env.JWT_SECRET
}

export const config = Object.freeze(_conf);