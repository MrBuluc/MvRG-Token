const { parseUnits, FormatTypes } = require("ethers/lib/utils");

async function main() {
  const MvRG = await ethers.getContractFactory("MvRGToken");
  console.log("Deploying MvRG...");
  const mvrg = await MvRG.deploy(parseUnits("1000000000000000000000"));
  await mvrg.deployed();
  console.log("MvRG deployed to: ", mvrg.address);
  console.log(
    "MvRG abi: ",
    JSON.stringify(JSON.parse(mvrg.interface.format(FormatTypes.json), null, 2))
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
