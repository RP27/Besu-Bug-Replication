# Besu-Bug-Replication

Steps To Reproduce Error

1. Download HDWalletProvider while in the directory of this repo (_npm install @truffle/hdwallet-provider_)
2. Run Besu in Docker with metrics enabled and the network ID set to 1337
3. Run _truffle migrate --network besu --reset_ in the directory of this repo (This should work)
4. Check Besu is still working, and monitor CPU usage/Memory/GC on Grafana
5. Run _truffle migrate --network besu --reset_ again and monitor CPU/Mem/GC on Grafana (This causes a hanging issue on my device where it will timeout and Besu will throw exceptions afterwards)
