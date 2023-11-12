# Supply chain attacks

## Type Suqatting

`express` module
* expres
* expresss
* epxress
  
All the above similar modules could have the same signature as the express module,
the wrong module would be downloaded and be maliciously executed.

Solution: Just copy-and-paste the module name from npm.

## Rogue Module Wwner

Maintainer moving from faithful to unfaithful intentions.

Solution: Make sure to use the module with multiple maintainers.

## Compromised owner model

An interesting story of `eslint`: If any one of the maintainers' account is hacked, the hacker can manipulate the account and publish something with malicious scripts.

Check this link for more information: https://eslint.org/blog/2018/07/postmortem-for-malicious-package-publishes/#main

Solution: Do not update immediately and check if there are any weird errors.

## npm proxy

### Initial state
module A version 1.0.0 on npmjs.com
module A version 1.0.0 on our own Verdaccio

### Event
A gets unpublished from npmjs.com
module A version 1.0.0 on our own Verdaccio

### malicious event
A gets re-published by someone on npmjs.com version 1.1.0
module A version 1.0.0 on our own Verdaccio

`npm install A@1.1.0` -> Verdaccion no
Verdaccio will get it from npm and cache it in 1.1.0

Solution: npm disallow republish of versions after 24 hours as it has been reproved, unless you contact them and have their agreement to republish on it.