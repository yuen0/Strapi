import { CreateTelevisionDto } from '@dtos/televisions.dto';
import { HttpException } from '@exceptions/HttpException';
import { Television } from '@interfaces/televisions.interface';
import { getAll, getById, postProduct, updateProduct, deleteProduct } from '@models/televisions.model';
import { isEmpty } from '@utils/util';

class TelevisionService {
  // public televisions = televisionModel;

  public async findAllTelevision(): Promise<Television[]> {
    const televisions: Television[] = await getAll();
    return televisions;
  }

  public async findTelevisionById(televisionId: number): Promise<Television> {
    const findTelevision: Television = await getById(televisionId);
    if (!findTelevision) throw new HttpException(409, "Television doesn't exist");

    return findTelevision;
  }

  public async createTelevision(televisionData: CreateTelevisionDto): Promise<Television> {
    if (isEmpty(televisionData)) throw new HttpException(400, 'televisionData is empty');

    const createTelevisionData: Television = await postProduct(televisionData);

    return createTelevisionData;
  }

  public async updateTelevision(televisionId: number, televisionData: CreateTelevisionDto): Promise<Television> {
    if (isEmpty(televisionData)) throw new HttpException(400, 'televisionData is empty');

    const updateTelevisionData: Television = await updateProduct(televisionId, televisionData);

    return updateTelevisionData;
  }

  public async deleteTelevision(televisionId: number): Promise<Television> {
    const deleteTelevisionData: Television = await deleteProduct(televisionId);
    return deleteTelevisionData;
  }
}

export default TelevisionService;
