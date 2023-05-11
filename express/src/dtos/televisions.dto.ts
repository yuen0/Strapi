import { IsString, IsNumber } from 'class-validator';

export class CreateTelevisionDto {
  @IsString()
  public name: string;

  @IsString()
  public description: string;

  @IsString()
  public manufacturer: string;

  @IsNumber()
  public price: number;

  @IsNumber()
  public screen_size: number;
}
