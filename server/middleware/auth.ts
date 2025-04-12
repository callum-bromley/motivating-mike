import { expressjwt } from "express-jwt";
import JwksRsa from "jwks-rsa";


const checkJwt = expressjwt({

  secret: JwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    // TODO: replace line 10 with auth0 domain address
    jwksUri: `https://YOUR_AUTH0_DOMAIN/`
  }),
  // TODO: replace with auth0 api identifier
  audience: 'YOUR_API_IDENTIFIER',
  issuer: `https://YOUR_AUTH0_DOMAIN/`,
  algorithms: ['RS256']
})

export { checkJwt }
