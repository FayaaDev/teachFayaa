# Multilingual LLM Cost Resources

## Knowledge

- [OpenAI Cookbook: How to count tokens with tiktoken](https://github.com/openai/openai-cookbook/blob/main/examples/How_to_count_tokens_with_tiktoken.ipynb)
  Shows that API usage is priced by token, models use different encodings, and chat message counting has overhead. Use for: measuring a concrete prompt with an OpenAI-compatible tokenizer.
- [OpenAI tiktoken README](https://github.com/openai/tiktoken)
  Primary implementation notes for byte-pair encoding (BPE): it is lossless, works on arbitrary text, and learns common subwords. Use for: explaining why bytes are an input to tokenization, not a billing unit.
- [OpenAI Tokenizer](https://platform.openai.com/tokenizer)
  Interactive model-tokenizer inspection tool. Use for: public demonstrations of the actual token splits for a chosen model.
- [OpenAI API pricing](https://openai.com/api/pricing/)
  Current model input, cached-input, and output token rates. Use for: filling in a budget after measuring usage; do not copy rates into evergreen material.
- [HUMAIN M3 on Node](https://node.humain.com/)
  Official preview page: HUMAIN M3 is based on an unnamed natively multimodal MoE with Arabic post-training and 1T+ Arabic training tokens; weights are not yet public. Use for: distinguishing Arabic post-training claims from published tokenizer evidence.
- [Anthropic: Token counting](https://platform.claude.com/docs/en/build-with-claude/token-counting)
  Counts a complete Claude request before sending it. Use for: Claude-specific Arabic budget measurements; Anthropic does not publish an Arabic token-efficiency ratio.
- [Google Gemini: Count tokens API](https://ai.google.dev/api/tokens)
  Runs the selected Gemini model tokenizer and returns token counts. Use for: measuring paired Arabic and English Gemini requests with identical structure.
- [ElevenLabs billing](https://elevenlabs.io/docs/overview/administration/billing)
  Defines platform credits, formerly called characters, with model- and product-dependent credit use. Use for: contrasting TTS credits with LLM token billing.
- [Fish Audio pricing and rate limits](https://docs.fish.audio/developer-guide/models-pricing/pricing-and-rate-limits)
  Bills TTS input by millions of UTF-8 bytes. Use for: calculating an Arabic TTS budget where the text encoding directly affects price.

## Wisdom (Communities)

- [Hugging Face Forums](https://discuss.huggingface.co/)
  Practitioner community for tokenizer and multilingual-model questions. Use for: comparing tokenizers beyond a single API vendor.

## Gaps

- A vendor-neutral, continuously updated dataset comparing equivalent Arabic and English prompts across production tokenizers.
