import * as Joi from 'joi'; // KO : error TS2307: Cannot find module 'joi' or its corresponding type declarations. 

import {ConnectionOptions} from 'typeorm';
import {ShortUrl} from '../models';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
//console.log('.env:', process.env); 

const envVarsSchema = Joi.object()
    .keys({

    // SERVER
    NODE_ENV: Joi.string()
      .required()
      .valid('development', 'staging', 'production')
      .default('development'),
    PORT: Joi.number().default(8000),

    // DB
    DB_TYPE: Joi.string().required().default("postgres"),
    DB_HOST: Joi.string().required().default("localhost"),
    DB_PORT: Joi.number().required().default(5432),
    DB_USER: Joi.string().required(),
    DB_PASSWORD: Joi.string().required(),
    DB_NAME: Joi.string().required(),

  })
  .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

const appConfig = {
    env: envVars.NODE_ENV,
    host: envVars.HOST,
    port: envVars.PORT,

    apiBasePath: 'api',

    cors: {
      allowedHosts: envVars.CORS_ALLOWED_URLS.split(','),
    },
}
// console.log('appConfig:', appConfig); 

const dbConfig : ConnectionOptions = {
  type: envVars.DB_TYPE,
  host: envVars.DB_HOST,
  port: envVars.DB_PORT,
  username: envVars.DB_USER,
  password: envVars.DB_PASSWORD,
  database: envVars.DB_NAME,
  
  entities: [ShortUrl],
  synchronize: true,
}
// console.log('dbConfig:', dbConfig); 

export  {
  appConfig,
  dbConfig
}