# Mission: Environment Management for Reliable Deployments

## Why
Build and deploy Bun applications through CI/CD, Docker, and Cloudflare without configuration surprises or leaked secrets. Develop a dependable mental model that works in both Zsh and Bash instead of memorizing disconnected commands.

## Success looks like
- Choose correctly among `.env`, `.env.local`, mode-specific files, and platform-managed secrets
- Explain shell variables, exported environment variables, process inheritance, and precedence
- Safely use `export`, `source`, and `set -a` in Zsh and Bash
- Predict how Bun and npm commands obtain environment variables
- Pass configuration safely through CI/CD, Docker builds and containers, and Cloudflare Workers
- Prevent secrets from entering Git, logs, images, build artifacts, or browser bundles
- Diagnose why a variable is available in one process but missing from another

## Constraints
- Examples should prioritize Bun rather than npm or Node.js
- Shell examples must work in Zsh and Bash unless explicitly labelled otherwise
- Lessons should be short, practical, and grounded in official documentation

## Out of scope
- Full CI/CD platform administration
- General Docker or Cloudflare instruction unrelated to configuration and secrets
- Enterprise secret-manager implementation beyond the interfaces needed for deployment
