import { CreateComputerDto } from '@dtos/computers.dto';
import { HttpException } from '@exceptions/HttpException';
import { Computer } from '@interfaces/computers.interface';
import { getAll, getById, postProduct, updateProduct, deleteProduct } from '@models/computers.model';
import { isEmpty } from '@utils/util';

class ComputerService {
  // public computers = computerModel;

  public async findAllComputer() {
    const computers: Computer[] = await getAll();
    return computers;
  }

  public async findComputerById(computerId: number): Promise<Computer> {
    const findComputer: Computer = await getById(computerId);
    if (!findComputer) throw new HttpException(409, "Computer doesn't exist");

    return findComputer;
  }

  public async createComputer(computerData: CreateComputerDto): Promise<Computer> {
    if (isEmpty(computerData)) throw new HttpException(400, 'computerData is empty');
    console.log('computerData in service', computerData);
    const createComputerData: Computer = await postProduct(computerData);

    return createComputerData;
  }

  public async updateComputer(computerId: number, computerData: CreateComputerDto): Promise<Computer> {
    if (isEmpty(computerData)) throw new HttpException(400, 'computerData is empty');

    const updateComputerData: Computer = await updateProduct(computerId, computerData);

    return updateComputerData;
  }

  public async deleteComputer(computerId: number): Promise<Computer> {
    const deleteComputerData: Computer = await deleteProduct(computerId);
    return deleteComputerData;
  }
}

export default ComputerService;
