import { CreateMobileDto } from '@dtos/mobiles.dto';
import { HttpException } from '@exceptions/HttpException';
import { Mobile } from '@interfaces/mobiles.interface';
import { getAll, getById, postProduct, updateProduct, deleteProduct } from '@models/mobiles.model';
import { isEmpty } from '@utils/util';

class MobileService {
  // public mobiles = mobileModel;

  public async findAllMobile(): Promise<Mobile[]> {
    const mobiles: Mobile[] = await getAll();
    return mobiles;
  }

  public async findMobileById(mobileId: number): Promise<Mobile> {
    const findMobile: Mobile = await getById(mobileId);
    if (!findMobile) throw new HttpException(409, "Mobile doesn't exist");

    return findMobile;
  }

  public async createMobile(mobileData: CreateMobileDto): Promise<Mobile> {
    if (isEmpty(mobileData)) throw new HttpException(400, 'mobileData is empty');

    const createMobileData: Mobile = await postProduct(mobileData);

    return createMobileData;
  }

  public async updateMobile(mobileId: number, mobileData: CreateMobileDto): Promise<Mobile> {
    if (isEmpty(mobileData)) throw new HttpException(400, 'mobileData is empty');

    const updateMobileData: Mobile = await updateProduct(mobileId, mobileData);

    return updateMobileData;
  }

  public async deleteMobile(mobileId: number): Promise<Mobile> {
    const deleteMobileData: Mobile = await deleteProduct(mobileId);
    return deleteMobileData;
  }
}

export default MobileService;
