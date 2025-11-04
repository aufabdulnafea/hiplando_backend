import express from 'express';
import cookieParser from 'cookie-parser';

import routes from './routes'
import { env } from './config'
// import { yoga } from './graphql'
import { yoga } from './graphql-server'
// import { schema } from './graphql-server'


async function main() {
    const app = express();
    app.use(express.json())
    app.use(cookieParser())


    // console.log(schema)

    app.use('/graphql', yoga)
    app.use(routes)

    const PORT = env.PORT;
    app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`))
}

main().catch(err => console.log(err))