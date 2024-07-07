import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { SitesModule } from './sites/sites.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { RecordsModule } from './records/records.module';

@Module({
  imports: [PrismaModule, SitesModule, UsersModule, AuthModule, RecordsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
