# Local Model Resources

## Knowledge

- [Hugging Face: Quantization concepts](https://huggingface.co/docs/transformers/quantization/concept_guide)
  Primary framework documentation on representing weights with fewer bits, quantization error, and per-group overhead. First lesson's recommended reading; start with the introduction.
- [Unsloth: Dynamic 3.0 GGUFs](https://unsloth.ai/docs/basics/dynamic-3.0-ggufs)
  Quantizer-author documentation on mixed-precision dynamic quantization. Reports a 9.83 GB Qwen3.8-27B UD-Q2_K_XL artifact. Performance claims are the provider's own evaluations, not universal quality guarantees.
- [PS5LM: Model list](https://github.com/cobanov/PS5LM/blob/main/docs/MODELS.md)
  Project's own model and memory notes. Lists Qwen3.8-27B UD-Q2_K_XL at 9.15 GiB, with fit conditional on the memory probe. Checked October 24, 2026; runtime and project details may change.
- [Hugging Face: Cache strategies](https://huggingface.co/docs/transformers/kv_cache)
  Primary framework documentation on extra memory for attention caches, context-dependent growth, and offloading. Use for the next lesson on runtime fit.

## Wisdom (Communities)

- [llama.cpp discussions](https://github.com/ggml-org/llama.cpp/discussions)
  Runtime's practitioner community for reproducible hardware and quantization questions. Useful once exact model files, hardware, and context settings are known.

## Gaps

- The learner's exact uncensored model URL and hardware are unknown. Do not assume the two downloads share a checkpoint or guarantee PS5 fit from file size.
- The supplied 2.9 bits/weight is an approximate effective average; an exact value requires exact stored parameter count and artifact accounting.
