import { expressjwt } from "express-jwt"
import Jwks from "jwks-rsa"


const checkJwt = expressjwt({

  secret: Jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://tohora-2025-joel.au.auth0.com/.well-known/jwks.json`
  }),
  audience: 'https://mm/api',
  issuer: `https://tohora-2025-joel.au.auth0.com/`,
  algorithms: ['RS256']
}
)

const logRequest = (req, res, next) => {
  console.log('Request received:', req.method, req.path);
  console.log('Authorization header:', req.headers.authorization);
  next();
};

export { checkJwt, logRequest }
