
import type { DecodedIdToken } from 'firebase-admin/auth'
import type { User } from '../../graphql'

declare global {
    namespace Express {
        export interface Request {
            user?: DecodedIdToken;
            localUser?: User
        }
    }
}