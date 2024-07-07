import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import * as bcrypt from 'bcrypt';

async function main() {

    const superadminPassword = await bcrypt.hash('iamsuperadmin', 10);

    const superadmin = await prisma.user.upsert({
        where : { email : 'superadmin@admin.com'},
        update: {},
        create: {
            email : 'superadmin@admin.com',
            name: 'superadmin',
            password: superadminPassword,
            role: 'superadmin',
        }
    })

    console.log(superadmin);
}

main().catch(err => console.error(err)).finally(async() => { await prisma.$disconnect()})
