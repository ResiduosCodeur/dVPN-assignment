const { ethers } = require("hardhat");

async function main() {
  // Get the deployer (first account from Hardhat)
  const [deployer] = await ethers.getSigners();

  console.log("🚀 Deploying contract with the account:", deployer.address);

  // Deploy the VPNRegistry contract
  const VPNRegistry = await ethers.getContractFactory("VPNRegistry");
  const vpnRegistry = await VPNRegistry.deploy(); // no .deployed() in ethers v6

  console.log("✅ Contract deployed at:", vpnRegistry.target); // use .target in ethers v6

  // Set an initial greeting
  const tx = await vpnRegistry.setGreeting("Hello from the blockchain!");
  await tx.wait();

  // Retrieve values
  const greeting = await vpnRegistry.getGreeting();
  const deployerAddress = await vpnRegistry.getDeployerAddress();

  console.log("💬 Current greeting:", greeting);
  console.log("👤 Deployer address (from contract):", deployerAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Error deploying contract:", error);
    process.exit(1);
  });
