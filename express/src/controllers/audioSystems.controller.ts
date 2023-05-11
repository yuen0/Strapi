import { Controller, Param, Body, Get, Post, Put, Delete, HttpCode, UseBefore } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import { CreateAudioSystemDto } from '@dtos/audioSystems.dto';
import { AudioSystem } from '@/interfaces/audioSystems.interface';
import audioSystemService from '@services/audioSystems.service';
import { validationMiddleware } from '@middlewares/validation.middleware';

@Controller()
export class AudioSystemsController {
  public audioSystemService = new audioSystemService();

  @Get('/audio-systems')
  @OpenAPI({ summary: 'Return a list of audioSystems' })
  async getAudioSystems() {
    const findAllAudioSystemsData: AudioSystem[] = await this.audioSystemService.findAllAudioSystem();
    return { ...findAllAudioSystemsData, message: 'findAll' };
  }

  @Get('/audio-systems/:id')
  @OpenAPI({ summary: 'Return find a audioSystem' })
  async getAudioSystemById(@Param('id') audioSystemId: number) {
    const findOneAudioSystemData: AudioSystem = await this.audioSystemService.findAudioSystemById(audioSystemId);
    return { ...findOneAudioSystemData, message: 'findOne' };
  }

  @Post('/audio-systems')
  @HttpCode(201)
  @UseBefore(validationMiddleware(CreateAudioSystemDto, 'body'))
  @OpenAPI({ summary: 'Create a new audioSystem' })
  async createAudioSystem(@Body() audioSystemData: CreateAudioSystemDto) {
    const createAudioSystemData: AudioSystem = await this.audioSystemService.createAudioSystem(audioSystemData);
    return { ...createAudioSystemData, message: 'created' };
  }

  @Put('/audio-systems/:id')
  @UseBefore(validationMiddleware(CreateAudioSystemDto, 'body', true))
  @OpenAPI({ summary: 'Update a audioSystem' })
  async updateAudioSystem(@Param('id') audioSystemId: number, @Body() audioSystemData: CreateAudioSystemDto) {
    const updateAudioSystemData: AudioSystem[] = await this.audioSystemService.updateAudioSystem(audioSystemId, audioSystemData);
    return { ...updateAudioSystemData, message: 'updated' };
  }

  @Delete('/audio-systems/:id')
  @OpenAPI({ summary: 'Delete a audioSystem' })
  async deleteAudioSystem(@Param('id') audioSystemId: number) {
    const deleteAudioSystemData: AudioSystem[] = await this.audioSystemService.deleteAudioSystem(audioSystemId);
    return { ...deleteAudioSystemData, message: 'deleted' };
  }
}
