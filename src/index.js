const app = require("./app");
require("dotenv").config();

// eslint-disable-next-line no-undef
const PORT = 5000;

async function main() {
  await app.listen(PORT);
  console.log("Server on port:", PORT);
}

main();
