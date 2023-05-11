import { CreateAudioSystemDto } from '@dtos/audioSystems.dto';
import { HttpException } from '@exceptions/HttpException';
import { AudioSystem } from '@interfaces/audioSystems.interface';
import { getAll, getById, postProduct, updateProduct, deleteProduct } from '@models/audioSystems.model';
import { isEmpty } from '@utils/util';

class AudioSystemService {
  // public audioSystems = audioSystem;

  public async findAllAudioSystem(): Promise<AudioSystem[]> {
    const audioSystems: AudioSystem[] = await getAll();
    return audioSystems;
  }

  public async findAudioSystemById(audioSystemId: number): Promise<AudioSystem> {
    const findAudioSystem: AudioSystem = await getById(audioSystemId);
    if (!findAudioSystem) throw new HttpException(409, "AudioSystem doesn't exist");

    return findAudioSystem;
  }

  public async createAudioSystem(audioSystemData: CreateAudioSystemDto): Promise<AudioSystem> {
    if (isEmpty(audioSystemData)) throw new HttpException(400, 'audioSystemData is empty');

    const createAudioSystemData: AudioSystem = await postProduct(audioSystemData);

    return createAudioSystemData;
  }

  public async updateAudioSystem(audioSystemId: number, audioSystemData: CreateAudioSystemDto): Promise<AudioSystem> {
    if (isEmpty(audioSystemData)) throw new HttpException(400, 'audioSystemData is empty');

    const updateAudioSystemData: AudioSystem = await updateProduct(audioSystemId, audioSystemData);

    return updateAudioSystemData;
  }

  public async deleteAudioSystem(audioSystemId: number): Promise<AudioSystem> {
    const deleteAudioSystemData: AudioSystem = await deleteProduct(audioSystemId);
    return deleteAudioSystemData;
  }
}

export default AudioSystemService;
