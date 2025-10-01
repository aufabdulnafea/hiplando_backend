import express from 'express';
import cookieParser from 'cookie-parser';

import routes from './routes/index.js'
import { env } from './config/index.js'

async function main() {
    const app = express();
    app.use(express.json())
    app.use(cookieParser())

    app.use(routes)

    const PORT = env.PORT;
    app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`))
}

main().catch(err => console.log(err))