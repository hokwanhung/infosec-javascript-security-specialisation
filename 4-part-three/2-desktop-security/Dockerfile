# How to protect yourself in web development:
# 1. Run the installed modules in a docker first.
# 2. run "npm audit" or install synk to inspect the modules.
# 3. Use packages like 'fastify' to listen only to the local instance (though this must be changed when using docker - to test in all instances).
# 4. Know about your Firewall configurations (even install another firewall).
# 5. Be careful of the dependencies installed - when the codes are vulnerable and it runs on your machine,
# your machine is vulnerable.
# 6. Do not develop in a public network - use the private network of the company instead.
# 7. Ensure each dependencies are installed with https - as people could have give you malformed packages through http.
FROM node:14

WORKDIR /app

COPY . .