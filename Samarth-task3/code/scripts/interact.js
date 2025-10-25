// Hardhat uses the 'ethers' module globally.
const { ethers } = require("hardhat");

// Contract constants
const CONTRACT_NAME = "VPNRegistry"; 
// >>> IMPORTANT: REPLACE THIS with your actual deployed contract address on Hardhat local network <<<
const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; 

async function main() {
    console.log("--- Contract Interaction Script Starting (VPNRegistry) ---");

    // 1. Connect to the deployed contract
    
    // Get the default signer (the account that will pay for transactions)
    const [signer] = await ethers.getSigners();
    
    // Get the ContractFactory for VPNRegistry
    const VPNRegistryFactory = await ethers.getContractFactory(CONTRACT_NAME);

    // Attach the signer to the deployed contract address
    const contract = VPNRegistryFactory.attach(CONTRACT_ADDRESS);

    console.log(`\nConnected to contract at: ${contract.target}`);
    console.log(`Signer address (used for txs): ${signer.address}`);

    // 2. Reads current greeting and node count
    console.log("\n--- Reading Initial Values ---");
    let currentGreeting = await contract.getGreeting();
    console.log(`Initial Greeting: "${currentGreeting}"`);
    let currentNodeCount = await contract.getNodeCount();
    console.log(`Initial Node Count: ${currentNodeCount.toString()}`);
    let deployerAddress = await contract.getDeployerAddress();
    console.log(`Deployer Address: ${deployerAddress}`);

    // 3. Updates greeting to "Welcome to Decentralized VPN!"
    const newGreeting = "Welcome to Decentralized VPN!";
    console.log(`\n--- Sending Transaction: Update Greeting to "${newGreeting}" ---`);
    let tx = await contract.setGreeting(newGreeting);
    // Wait for the transaction to be mined on the Hardhat node
    await tx.wait();
    console.log(`✅ setGreeting Transaction successful! Hash: ${tx.hash}`);

    // 4. Updates node count to 10
    const newNodeCount = 10;
    console.log(`\n--- Sending Transaction: Update Node Count to ${newNodeCount} ---`);
    tx = await contract.setNodeCount(newNodeCount);
    // Wait for the transaction to be mined
    await tx.wait();
    console.log(`✅ setNodeCount Transaction successful! Hash: ${tx.hash}`);

    // 5. Read and display all final values
    console.log("\n--- Reading Final Values ---");
    
    currentGreeting = await contract.getGreeting();
    console.log(`Final Greeting: "${currentGreeting}"`);

    currentNodeCount = await contract.getNodeCount();
    console.log(`Final Node Count: ${currentNodeCount.toString()}`);
    
    deployerAddress = await contract.getDeployerAddress();
    console.log(`Deployer Address: ${deployerAddress}`);

    console.log("\n--- Script Complete ---");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});