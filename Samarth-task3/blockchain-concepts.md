difference between local and real blockchain:
1. local blockchain is made to simulate real blockchain but has dummy values and accounts, and thus is a single and local process, so it can be mined immediately with almost zero latency.
In real blockchain, the mining is slow and would take upto 12-15 seconds per block to be validated by global users.
2. local blockchain uses fake ETH currency and is basically free, but in real blockchain, actual currency is used...
3. the memory of local blockchain is temporary and this was the reason why the ETH which was 10k gets reset when node terminal is restarted

the smart contract is first developed locally for fast testing and to ensure tests are correct, deploying the contract in global network however has a cost and is not reversible.

if the same contract would be deployed to real Ethereum, then we would require actual currency (in ETH) to cover the gas fee, the wait time would be more, and once deployed anyone in the world can see the contract.

Smart Contract basics:
A smart contract is the code that lives in the blockchain (in a decentralised network), and thus it doesnt need a centralised authority. A smart contract is kind of like a ledger which records all transactions and every transaction has a proof of work (which is like a 256 bit number) that represents the transaction.

No, the contract cannot be edited once it is deployed, so we need to make sure it is working fine and no mistakes in it... once the smart contract is deployed, it is permanently recorded on the public blockchain network and this forms the core of the technology's security - once the logic is written, it is immutable.

during testing, as we use dummy ETH, it has no monetary value, and thus when we restart the npx hardhat node, all the 10k ETH are restored, thus the deployed contract is deleted and we must re-deploy the contract.

Blockchain and VPN project:
As the blockchain technology mainly relies on the decentralised network, it is not possible for a central authority to intervene or see/sell the data... this makes sure for the trustless operation any VPN user would want.

Advantages over central database:
Immutability: once the data is stored, it is immutable.
Transparency: All data stored is public and can be verified by anyone. Data in the sense, it is encrypted and stored.
Single point of failure: in a centralised system, if the server fails, everything is gone, but in blockchain, if one node fails, remaining continue to work, providing all time support.

Challenges:
Scalability: since the data is encrypted and stored throughout the blockchain all over the world, it might take lot of time to retrieve the data and might cause for high latency...
Cost: as the deployment of contracts requires actual fee, the frequent deployments might be expensive.
Immutability: as the data is immutable, it is difficult to change the data and thus would be difficult if there is a bug in the process.

Data stored in blockchain:
VPN node registry: the list of active VPN service providers, their public keys, network addresses so that the list of available services is known.

Payment records: records of funds staked by node operators and account balances so that the blockchain might act as a trustless system automatically executing payments after the service.

Key Terms:

Blockchain: a shared digital ledger distributed to various nodes accross the globe to form a decentralised version of a centralised system or database.

Smart Contract: code written like an agreement which is automatically run when certain conditions are met eliminating the need for central intermediary.

Gas: The unit of cost stored on blockchain, usually like a currency, which is paid to miners to execute a transaction. and also we need gas to deploy contracts.

Wallet address: public identifier on the blockchain, like a website link visible to everyone showing the accound number to recieve funds.

Private Key: A secret key associated with wallet address, its like a key to the door and anyone with key can access anything inside it, anyone with this key can access the wallet.

Transaction: a signed message sent to the blockchain network to trigger a state change like moving funds from one wallet to another.

Deployment: the act of publishing the smart contract's code onto the blockchain.