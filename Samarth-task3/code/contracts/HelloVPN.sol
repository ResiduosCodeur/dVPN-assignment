// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VPNRegistry {
    string private greeting;
    uint256 private nodeCount;
    address private deployer;

    // Set deployer address at deployment time
    constructor() {
        deployer = msg.sender;
    }

    // Store a greeting message
    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }

    // Returns the current greeting
    function getGreeting() public view returns (string memory) {
        return greeting;
    }

    // Store a number representing VPN nodes
    function setNodeCount(uint256 _count) public {
        nodeCount = _count;
    }

    // Returns the node count
    function getNodeCount() public view returns (uint256) {
        return nodeCount;
    }

    // Returns who deployed the contract
    function getDeployerAddress() public view returns (address) {
        return deployer;
    }
}
