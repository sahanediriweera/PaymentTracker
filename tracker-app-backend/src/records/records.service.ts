import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RecordsService {
  constructor(private prisma: PrismaService) {}

  async create(createRecordDto: CreateRecordDto) {
    const { userId, siteId,...rest } = createRecordDto;

    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found.`);
    }

    return this.prisma.record.create({
      data: {
        user: {
          connect: {
            id: userId,
          },
        },
        site:{
          connect: {
            id: siteId,
          },
        },
        ...rest,
      },
    });
  }

  async findAll() {
    return this.prisma.record.findMany();
  }

  async findOne(id: number) {
    const record = await this.prisma.record.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Record with ID ${id} not found.`);
    }

    return record;
  }

  async update(id: number, updateRecordDto: UpdateRecordDto) {
    return this.prisma.record.update({
      where: { id },
      data: updateRecordDto,
    });
  }

  async remove(id: number) {
    const record = await this.prisma.record.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Record with ID ${id} not found.`);
    }

    return this.prisma.record.delete({ where: { id } });
  }
}
