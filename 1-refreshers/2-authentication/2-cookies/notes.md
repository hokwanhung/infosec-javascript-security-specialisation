# Refreshers Authentication - Cookies

## Cookie Attributes
- **HttpOnly**: Blocks JavaScript access (e.g., `http=only; HttpOnly`)
- **Secure**: HTTPS-only transmission (not shown in code)
- **SameSite**:
  - `Strict`: Same-domain only
  - `Lax`: Allows subdomains
  - `None`: No restrictions (requires Secure)
- **Max-Age**: Client-side expiration (e.g., `other=me; Max-Age=86400`)

## Default Behaviors
- Domain-bound: Automatically scoped to current domain
- Header injection: `Set-Cookie` headers sent with responses

## Security Notes
- **Zombie Cookies**: Persist via storage resurrection (localStorage/database)
- Header implementation:  
  `res.setHeader('Set-Cookie', [...]);` defines multiple cookies
- Client inspection: `document.cookie` shows non-HttpOnly cookies