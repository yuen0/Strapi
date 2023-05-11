import { Controller, Param, Body, Get, Post, Put, Delete, HttpCode, UseBefore } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import { CreateComputerDto } from '@dtos/computers.dto';
import { Computer } from '@/interfaces/computers.interface';
import computerService from '@services/computers.service';
import { validationMiddleware } from '@middlewares/validation.middleware';

@Controller()
export class ComputersController {
  public computerService = new computerService();

  @Get('/computers')
  @OpenAPI({ summary: 'Return a list of computers' })
  async getComputers() {
    const findAllComputersData: Computer[] = await this.computerService.findAllComputer();
    return { ...findAllComputersData, message: 'findAll' };
  }

  @Get('/computers/:id')
  @OpenAPI({ summary: 'Return find a computer' })
  async getComputerById(@Param('id') computerId: number) {
    const findOneComputerData: Computer = await this.computerService.findComputerById(computerId);
    return { ...findOneComputerData, message: 'findOne' };
  }

  @Post('/computers')
  @HttpCode(201)
  @UseBefore(validationMiddleware(CreateComputerDto, 'body'))
  @OpenAPI({ summary: 'Create a new computer' })
  async createComputer(@Body() computerData: CreateComputerDto) {
    const createComputerData: Computer = await this.computerService.createComputer(computerData);
    return { ...createComputerData, message: 'created' };
  }

  @Put('/computers/:id')
  @UseBefore(validationMiddleware(CreateComputerDto, 'body', true))
  @OpenAPI({ summary: 'Update a computer' })
  async updateComputer(@Param('id') computerId: number, @Body() computerData: CreateComputerDto) {
    const updateComputerData: Computer = await this.computerService.updateComputer(computerId, computerData);
    return { ...updateComputerData, message: 'updated' };
  }

  @Delete('/computers/:id')
  @OpenAPI({ summary: 'Delete a computer' })
  async deleteComputer(@Param('id') computerId: number) {
    const deleteComputerData: Computer[] = await this.computerService.deleteComputer(computerId);
    return { ...deleteComputerData, message: 'deleted' };
  }
}
