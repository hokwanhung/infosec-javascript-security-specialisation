# Refreshers Introduction - Browsers

## 1. Browser Architecture
- Contains separate engines for HTML parsing and JavaScript execution
- Developer Tools features:
  - **Console**: Executes plain JavaScript code
    - *Example: `console.log(document.title)` interacts with HTML engine*  
  - **Memory**: Captures heap snapshots for analysis
  - **Application**: Inspects storage mechanisms:
    - Local/Session Storage
      - *Example: `localStorage.setItem('token', 'abc123')`* 
    - Cookies
    - Cache
    - Background Services
  - **Extensions**: Manages browser add-ons

## 2. DOM Interaction
- JavaScript manipulates HTML through interfaces:
  - `HTMLParagraphElement`
  - `HTMLElement`
    - *Example: `document.getElementById('id1').innerHTML = '<p>New content</p>'`* 
  - `HTMLCollection`

## 3. Browser Capabilities
- Hardware access (e.g., webcam/microphone via APIs)
  -   *Example: `navigator.mediaDevices.getUserMedia({ video: true })`*  
- Parallel execution via `Worker()` threads
  -   *Example: `const worker = new Worker('background-task.js')`*  
- Tab isolation: Independent processes per tab

## 4. Security Mechanisms
- **CORS (Cross-Origin Resource Sharing)**:
  - Restricts cross-origin requests via `fetch()` and XHR
  - Prevents unauthorized cross-domain data access

## Execution Context
- Runs untrusted internet code automatically
  -   *Example: `<script src="https://untrusted-cdn.com/lib.js"></script>`*  
- No native supervision mechanism for executed code

<div style="page-break-after: always"></div>