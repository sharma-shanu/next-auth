/* This should be in a node file , this might not work */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const ans = await prisma.user.findMany();
  console.log(ans);

  await prisma.user.create({ data: { email: "shanu@gmail.com" } });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
