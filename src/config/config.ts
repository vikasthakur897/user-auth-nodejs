import {config as conf} from "dotenv";

conf();

const _conf = {
    port: process.env.PORT,
    databaseURI: process.env.MONGODB_CONNECTION
}

export const config = Object.freeze(_conf);