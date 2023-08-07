import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

for (let i = 0; i < 10; i++) {
  await prisma.user.create({
    data: {
      name: `User ${i}`,
      email: `user${i}@example.com`,
    },
  });
}
