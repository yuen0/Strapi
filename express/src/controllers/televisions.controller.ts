import { Controller, Param, Body, Get, Post, Put, Delete, HttpCode, UseBefore } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import { CreateTelevisionDto } from '@dtos/televisions.dto';
import { Television } from '@/interfaces/televisions.interface';
import televisionService from '@services/televisions.service';
import { validationMiddleware } from '@middlewares/validation.middleware';

@Controller()
export class TelevisionsController {
  public televisionService = new televisionService();

  @Get('/televisions')
  @OpenAPI({ summary: 'Return a list of televisions' })
  async getTelevisions() {
    const findAllTelevisionsData: Television[] = await this.televisionService.findAllTelevision();
    return { ...findAllTelevisionsData, message: 'findAll' };
  }

  @Get('/televisions/:id')
  @OpenAPI({ summary: 'Return find a Television' })
  async getTelevisionById(@Param('id') televisionId: number) {
    const findOneTelevisionData: Television = await this.televisionService.findTelevisionById(televisionId);
    return { ...findOneTelevisionData, message: 'findOne' };
  }

  @Post('/televisions')
  @HttpCode(201)
  @UseBefore(validationMiddleware(CreateTelevisionDto, 'body'))
  @OpenAPI({ summary: 'Create a new Television' })
  async createTelevision(@Body() televisionData: CreateTelevisionDto) {
    const createTelevisionData: Television = await this.televisionService.createTelevision(televisionData);
    return { ...createTelevisionData, message: 'created' };
  }

  @Put('/televisions/:id')
  @UseBefore(validationMiddleware(CreateTelevisionDto, 'body', true))
  @OpenAPI({ summary: 'Update a Television' })
  async updateTelevision(@Param('id') televisionId: number, @Body() televisionData: CreateTelevisionDto) {
    const updateTelevisionData: Television[] = await this.televisionService.updateTelevision(televisionId, televisionData);
    return { ...updateTelevisionData, message: 'updated' };
  }

  @Delete('/televisions/:id')
  @OpenAPI({ summary: 'Delete a Television' })
  async deleteTelevision(@Param('id') televisionId: number) {
    const deleteTelevisionData: Television[] = await this.televisionService.deleteTelevision(televisionId);
    return { ...deleteTelevisionData, message: 'deleted' };
  }
}
