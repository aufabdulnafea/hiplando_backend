import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';

import routes from './routes'
import { env } from './config'
import { yoga } from './graphql-server'


async function main() {
    const app = express();

    app.use(cors({
        origin: "http://localhost:3000", // your frontend URL
        credentials: true,
    }));

    app.use(express.json())
    app.use(cookieParser())

    app.use('/graphql', yoga)
    app.use(routes)

    const PORT = env.PORT;
    app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`))
}

main().catch(err => console.log(err))