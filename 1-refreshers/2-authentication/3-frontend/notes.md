# Refreshers Authentication - Frontend

## Router Security
- Navigation guards enforce auth checks:
  - `ifAuthenticated`: Blocks unauthorized `/account` access
  - `ifNotAuthenticated`: Redirects authenticated users from `/login`
- Prevents API spam from malicious scanners through route protection

## Auth Store (auth.js)
### Token Management
- Stores token in `localStorage` (risky for XSS)
- **Ideal Solution**: HTTP-only cookies for token storage
- Logout routine removes token + suggests backend invalidation

### Critical Operations
- Login: Sets token + updates headers
  - Example: `axios.defaults.headers.common['Authorization'] = resp.token`
- Token exposure risk: Frontend should never access auth token directly

## User Store (user.js)
### Profile Management
- Fetches profile using token from `localStorage`
- Automatic logout on unauthorized responses
- Stores user profile in Vue reactive system

### Security Gaps
- Token should be cookie-based rather than localStorage
- Profile endpoint exposes sensitive data without validation

## Security Practices
1. **Cookie Configuration**:
   - HTTP-only + SameSite (Strict/Lax)
   - Domain-scoped + Secure flag for HTTPS
2. **JWT Handling**:
   - Use signed payloads (JWS)
   - Tokens for auth should never be JS-accessible
   - Tokens for data should contain non-sensitive claims
3. **Session Management**:
   - Backend token invalidation on logout
   - Short expiration for sensitive operations