import { expressjwt } from "express-jwt"
import JwksRsa from "jwks-rsa"
import { Request } from "express"
import { JwtPayload } from "jsonwebtoken"


const checkJwt = expressjwt({

  secret: JwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://tohora-2025-joel.au.auth0.com/.well-known/jwks.json`
  }),
  audience: 'https://mm/api',
  issuer: `https://tohora-2025-joel.au.auth0.com`,
  algorithms: ['RS256']
})

export { checkJwt }

export interface RequestToken extends Request {
  user: JwtPayload
}
