# Environment Management Resources

## Knowledge

- [Bun: Environment variables](https://bun.com/docs/runtime/environment-variables)
  Primary source for Bun's automatic `.env` loading, file precedence, `--env-file`, `--no-env-file`, expansion, and runtime APIs. Use for every Bun-specific rule.
- [GNU Bash Manual: Environment](https://www.gnu.org/software/bash/manual/html_node/Environment.html)
  Primary source for process environments, exported parameters, inheritance, and command-scoped assignments. Use for the core mental model shared by Bash and Zsh.
- [GNU Bash Manual: The Set Builtin](https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html)
  Defines `set -a`/`allexport` and `set +a`. Use when loading shell-compatible files into a process environment.
- [Zsh Manual: Parameters](https://zsh.sourceforge.io/Doc/Release/Parameters.html)
  Primary source for Zsh parameter scope and export behavior. Use to verify where Zsh differs from Bash.
- [Node.js: Environment variables](https://nodejs.org/api/environment_variables.html)
  A documented dotenv grammar and Node's environment APIs. Use when portability or Bun-versus-Node behavior matters.
- [npm: Scripts](https://docs.npmjs.com/cli/v11/using-npm/scripts/)
  Documents the environment npm creates for package scripts and the shell used to run them. Use for Bun-versus-npm comparisons; npm documents script inheritance but no automatic `.env` loading.
- [Docker: Build variables](https://docs.docker.com/build/building/variables/)
  Primary source for `ARG` versus `ENV`, scope, persistence, and why neither should carry secrets. Use for image-build decisions.
- [Docker: Build secrets](https://docs.docker.com/build/building/secrets/)
  Primary source for BuildKit secret and SSH mounts. Use whenever a build step needs credentials.
- [Cloudflare Workers: Environment variables and secrets](https://developers.cloudflare.com/workers/local-development/environment-variables/)
  Primary source for `.dev.vars`, `.env`, local precedence, and the rule to use deployed secrets rather than plain `vars` for sensitive values.
- [Cloudflare Workers: Secrets](https://developers.cloudflare.com/workers/configuration/secrets/)
  Covers secret creation and deployed Worker access. Use for production Cloudflare configuration.
- [GitHub Actions: Using secrets](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets)
  A concrete CI/CD primary source for injecting secrets into step environments and avoiding command-line exposure.

## Wisdom (Communities)

- [Bun Discord](https://bun.com/discord)
  Maintainer-linked community. Use for runtime-specific edge cases after reproducing them in a minimal project.
- [Cloudflare Developer Discord](https://discord.cloudflare.com/)
  Official developer community. Use for Wrangler and Worker deployment behavior that is not resolved by current documentation.
- [Docker Community Forums](https://forums.docker.com/)
  Moderated product community. Use for BuildKit, Compose, and image-layer troubleshooting with a minimal reproduction.

## Gaps

- CI/CD examples currently use GitHub Actions as the concrete platform. Add another provider's primary documentation if the user's actual pipeline uses a different service.
