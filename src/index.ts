import 'reflect-metadata';
import { createConnection } from 'typeorm';
import 'dotenv/config';
import express, { Application } from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';

import Router from './routes';
import {appConfig, dbConfig} from './config/app';
import { getCorsOptions } from './config/cors';

// const PORT = process.env.PORT || 8000;

const app: Application = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(cors(getCorsOptions));
app.use(express.static('public'));

// -- SWAGGER
app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: '/swagger.json',
    },
  }),
);

app.use(Router);

// -- DB
createConnection(dbConfig)
  .then(() => {
    app.listen(appConfig.port, () => {
      console.log('Server is running on port', appConfig.port);
    });
  })
  .catch((err) => {
    console.log('Unable to connect to db', err);
    process.exit(1);
  });
