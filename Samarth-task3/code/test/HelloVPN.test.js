const { expect } = require("chai");

describe("VPNRegistry Contract", function () {
  let VPNRegistry, vpnRegistry, owner;

  beforeEach(async function () {
  VPNRegistry = await ethers.getContractFactory("VPNRegistry");
  [owner] = await ethers.getSigners();
  vpnRegistry = await VPNRegistry.deploy(); // Deploys the contract

});

  // Test 1: Deploy contract and check initial values
  it("should deploy correctly and set initial values", async function () {
    const deployerAddress = await vpnRegistry.getDeployerAddress();
    const initialGreeting = await vpnRegistry.getGreeting();
    const initialNodeCount = await vpnRegistry.getNodeCount();

    expect(deployerAddress).to.equal(owner.address);
    expect(initialGreeting).to.equal("");
    expect(initialNodeCount).to.equal(0);
  });

  // Test 2: Update greeting and verify it changed
  it("should update the greeting correctly", async function () {
    await vpnRegistry.setGreeting("Hello VPN!");
    const greeting = await vpnRegistry.getGreeting();
    expect(greeting).to.equal("Hello VPN!");
  });

  // Test 3: Set node count and retrieve it
  it("should set and return the node count correctly", async function () {
    await vpnRegistry.setNodeCount(42);
    const count = await vpnRegistry.getNodeCount();
    expect(count).to.equal(42);
  });
});
