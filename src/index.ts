import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';


import routes from './routes';
import { env } from './config';
import { yoga } from './graphql-server';
import { errorsHandler } from './middlewares/errors-middleware'
import { loggingMiddleware } from "./middlewares/logging-middleware";
import { logger } from './logger';



async function main() {
  const app = express();

  app.use(cors({
    origin: ["http://localhost:3000", "http://192.168.0.39:3000"],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    preflightContinue: false,
    optionsSuccessStatus: 204
  }));

  app.use(express.static("uploads"))

  app.use(express.json());

  app.use(loggingMiddleware);
  // app.use(pinoHttp({ logger }));

  app.use(cookieParser());

  app.use('/graphql', yoga);
  app.use(routes);

  app.use(errorsHandler)

  const PORT = env.PORT;
  app.listen(PORT, "0.0.0.0", () => logger.info(`Server running on port ${PORT}`));
}

main().catch(err => console.log(err));