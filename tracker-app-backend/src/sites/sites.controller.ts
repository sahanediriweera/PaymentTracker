import { Controller, Get, Post, Body, Patch, Param, Delete,ParseIntPipe,NotFoundException } from '@nestjs/common';
import { SitesService } from './sites.service';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
import { ApiTags,ApiOkResponse,ApiCreatedResponse } from '@nestjs/swagger';
import { SiteEntity } from './entities/site.entity';

@Controller('sites')
@ApiTags('sites')
export class SitesController {
  constructor(private readonly sitesService: SitesService) {}

  @Post()
  @ApiCreatedResponse({type:SiteEntity})
  create(@Body() createSiteDto: CreateSiteDto) {
    return this.sitesService.create(createSiteDto);
  }

  @Get()
  @ApiOkResponse({type:SiteEntity, isArray:true})
  findAll() {
    return this.sitesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({type:SiteEntity})
  async findOne(@Param('id',ParseIntPipe) id: number) {
    const site = await this.sitesService.findOne(id);
    if(!site){
      throw new NotFoundException(`Site #${id} not found`);
    }

    return site;
  }

  @Patch(':id')
  @ApiOkResponse({type:SiteEntity})
  async update(@Param('id',ParseIntPipe) id: number, @Body() updateSiteDto: UpdateSiteDto) {
    const site = await this.sitesService.update(id, updateSiteDto);
    if(!site){
      throw new NotFoundException(`Site #${id} not found`);
    }

    return site;
  }

  @Delete(':id')
  @ApiOkResponse({type:SiteEntity})
  async remove(@Param('id',ParseIntPipe) id: number) {
    const site = await this.sitesService.remove(id);
    if(!site){
      throw new NotFoundException(`Site #${id} not found`);
    }

    return site;
  }
}
