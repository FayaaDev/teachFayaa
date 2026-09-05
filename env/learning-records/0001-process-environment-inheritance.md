# Export controls child-process inheritance

The learner correctly explained that an unexported shell variable is absent from Bun, a command-scoped assignment reaches only that invocation, and `export` makes the shell's value available to subsequently started child processes. This establishes the process boundary as the foundation for learning dotenv loaders and precedence.

## Evidence

They predicted the command-scoped value and identified `export` as the change required for a later Bun process to inherit the shell's value.
