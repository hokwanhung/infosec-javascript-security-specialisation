# Node.js Runtime Environment Notes

## Core Architecture
- Server-side JavaScript runtime (vs browser client-side)
- Provides system-level APIs:
  - File system access (`fs`)
  - Network operations (`http`)
  - Cryptography (`crypto`)

## Asynchronous Execution
- Non-blocking I/O operations
  - Example: 
  fs.readFile(__filename, (err, data) => {...}) 
  fs.readdir(__dirname, callback)
- Event loop handles async operations
  - Example: Synchronous loop (for 10000 iterations) blocks async queuing

## Key Modules
- **File System**:
  - Example: Read current file + directory listing
- **HTTP Server**:
  - Example: http.createServer().listen(8080) → responds with "ok"
- **Cryptography**:
  - Example: crypto.randomInt(100) (secure) vs Math.random() (insecure)

## Event Loop Behavior
- Single-threaded with async queuing
  - Example: process.nextTick() prioritizes callback before I/O events
- Concurrent request handling via event loop
  - Example: HTTP server handles multiple requests through async callbacks

## Security Considerations
- Direct system access increases attack surface
- Crypto-safe APIs vs native JS math functions
  - Example: Always prefer crypto.random*() for security-sensitive operations

## Execution Model
- Binds low-level system capabilities to V8 engine
- Enables server applications via JavaScript