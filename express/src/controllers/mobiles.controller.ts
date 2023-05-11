import { Controller, Param, Body, Get, Post, Put, Delete, HttpCode, UseBefore } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import { CreateMobileDto } from '@dtos/mobiles.dto';
import { Mobile } from '@/interfaces/mobiles.interface';
import mobileService from '@services/mobiles.service';
import { validationMiddleware } from '@middlewares/validation.middleware';

@Controller()
export class MobilesController {
  public mobileService = new mobileService();

  @Get('/mobiles')
  @OpenAPI({ summary: 'Return a list of mobiles' })
  async getMobiles() {
    const findAllMobilesData: Mobile[] = await this.mobileService.findAllMobile();
    return { ...findAllMobilesData, message: 'findAll' };
  }

  @Get('/mobiles/:id')
  @OpenAPI({ summary: 'Return find a mobile' })
  async getMobileById(@Param('id') mobileId: number) {
    const findOneMobileData: Mobile = await this.mobileService.findMobileById(mobileId);
    return { ...findOneMobileData, message: 'findOne' };
  }

  @Post('/mobiles')
  @HttpCode(201)
  @UseBefore(validationMiddleware(CreateMobileDto, 'body'))
  @OpenAPI({ summary: 'Create a new mobile' })
  async createMobile(@Body() mobileData: CreateMobileDto) {
    const createMobileData: Mobile = await this.mobileService.createMobile(mobileData);
    return { ...createMobileData, message: 'created' };
  }

  @Put('/mobiles/:id')
  @UseBefore(validationMiddleware(CreateMobileDto, 'body', true))
  @OpenAPI({ summary: 'Update a mobile' })
  async updateMobile(@Param('id') mobileId: number, @Body() mobileData: CreateMobileDto) {
    const updateMobileData: Mobile[] = await this.mobileService.updateMobile(mobileId, mobileData);
    return { ...updateMobileData, message: 'updated' };
  }

  @Delete('/mobiles/:id')
  @OpenAPI({ summary: 'Delete a mobile' })
  async deleteMobile(@Param('id') mobileId: number) {
    const deleteMobileData: Mobile[] = await this.mobileService.deleteMobile(mobileId);
    return { ...deleteMobileData, message: 'deleted' };
  }
}
