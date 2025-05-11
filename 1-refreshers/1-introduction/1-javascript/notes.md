# Refreshers Introduction - JavaScript

## 1. Strict Mode & Property Control
- **ES6 Modules**: Automatically enforce strict mode, eliminating legacy quirks.
- **Property Immutability**:
  - `writable: false` in `Object.defineProperty` blocks property overwrites.
  - Non-strict mode: Silent failure (assignments ignored).
  - Strict mode: Throws `TypeError` for illegal assignments.

Example:
```javascript
Object.defineProperty(obj, 'prop', { value: 42, writable: false });
obj.prop = 100; // Fails silently (non-strict) / Throws error (strict)
```

## 2. Variable Declarations
- **Avoid `var`**: Hoisting and global scope risks.
- **Prefer `let`/`const`**:
  - Block-scoped with Temporal Dead Zone (TDZ) protection.
  - `const` requires initialization and blocks reference reassignment.
- **`const` Nuance**: Allows object property mutations (only the reference is fixed).

Example:
```javascript
const arr = [];
arr.push('safe'); // Allowed (mutates content)
// arr = [1,2];   // TypeError (reference reassignment)
```

## 3. Function Types & Risks
- **Function Variations**:
  - Declarations vs. expressions vs. arrow functions.
  - Arrow functions: Implicit return (single-line) vs. explicit return (block body).
- **Critical Risk**: `new Function()` parses strings as executable code → High injection risk.

Example:
```javascript
const sum = new Function('a', 'b', 'return a + b;'); // Avoid with untrusted inputs
```

## 4. Type Detection Quirks
- **`typeof` Pitfalls**:
  - `typeof null` returns `"object"` (historical bug).
  - `typeof undefined` correctly identifies uninitialized values.
- **Undefined Scenarios**:
  - Uninitialized variables, missing function returns, or non-existent properties.

Example:
```javascript
typeof null;        // "object" (misleading)
let uninitialized;
typeof uninitialized; // "undefined"
```

## 5. Equality & Truthiness
- **Equality Checks**:
  - `==` performs type coercion (avoid for security checks).
  - `===` enforces strict type matching (always prefer).
- **Falsy Values**:
  - `false`, `0`, empty string (`""`), `null`, `undefined`, `NaN`.

Example:
```javascript
0 == "";    // true (dangerous coercion)
0 === "";   // false (secure check)
```

## Security Highlights
1. **Strict Mode**: Non-negotiable for error detection and preventing silent failures.
2. **Immutability**:
   - Use `const` + `Object.freeze()` for critical configuration objects.
3. **Code Injection**:
   - Treat `new Function()` and `eval()` as red flags with user inputs.
4. **Type Safety**:
   - Always check `typeof undefined` and `value === null` explicitly.
5. **Truthy/Falsy Checks**:
   - Audit all `if(condition)` statements for implicit falsy evaluations.

<div style="page-break-after: always"></div>