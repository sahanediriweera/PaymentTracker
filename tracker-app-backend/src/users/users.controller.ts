import { Controller, Get, Post, Body, Patch, Param, Delete,ParseIntPipe,UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags,ApiOkResponse,ApiCreatedResponse,ApiBearerAuth } from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { HasRoles } from 'src/auth/roles.decorator';
import { Role } from 'src/auth/models/roles.models';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({type:UserEntity})
  async create(@Body() createUserDto: CreateUserDto) {
    return new UserEntity(await this.usersService.create(createUserDto));
  }

  @Get()
  @HasRoles(Role.SuperAdmin)
  @UseGuards(JwtAuthGuard,RolesGuard)
  @ApiBearerAuth()
  @ApiOkResponse({type:UserEntity, isArray:true})
  async findAll() {
    const users = await this.usersService.findAll();
    return users.map(user=>new UserEntity(user));
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({type:UserEntity})
  async findOne(@Param('id',ParseIntPipe) id: number) {
    return new UserEntity(await this.usersService.findOne(id));
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({type:UserEntity})
  async update(@Param('id',ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
    return new UserEntity(await this.usersService.update(id, updateUserDto));
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({type:UserEntity})
  async remove(@Param('id',ParseIntPipe) id: number) {
    return new UserEntity(await this.usersService.remove(id));
  }

  @Get('bySite/:id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({type:[UserEntity]})
  async findBySite(@Param('id',ParseIntPipe) id: number) {
    const users = await this.usersService.findBySite(id);
    return users.map(user=>new UserEntity(user));
  }
}
