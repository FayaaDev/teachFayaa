# Leakage detection target introduced

The learner has received the core leakage rule: a feature is valid only if it is available at the exact production prediction moment. The next retrieval check should distinguish future-outcome leakage from safe historical features and verify the train-only fitting rule for encoders, scalers, imputers, and feature selectors. Revisit their known confusions too: k-means is clustering with a chosen k, and continuous targets require regression.
