import { prisma } from '../lib/prisma.js';
import { hashPassword } from '../lib/auth.js';

async function main() {
    const adminEmail = 'admin@bootcamp.com';
    const adminPassword = 'AdminPassword123!';

    // 1. Hash the password
    const hashedPassword = await hashPassword(adminPassword);

    const admin = await prisma.user.create({
        data: {
            email: adminEmail,
            password: hashedPassword,
            firstName: 'Super',
            lastName: 'Admin',
            role: 'ADMIN',
        },
    });
}

main()
    .catch((e) => {
        console.error(' Error seeding admin:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
