const hre = require("hardhat");

async function main() {
  const Upload = await hre.ethers.getContractFactory("Upload");
  const upload = await Upload.deploy();

  await upload.waitForDeployment();

  console.log("Library deployed to:", upload.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9