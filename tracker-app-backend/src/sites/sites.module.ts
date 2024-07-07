import { Module } from '@nestjs/common';
import { SitesService } from './sites.service';
import { SitesController } from './sites.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [SitesController],
  providers: [SitesService],
  imports: [PrismaModule],
})
export class SitesModule {}
