import { IsString, IsNumber } from 'class-validator';

export class CreateMobileDto {
  @IsString()
  public name: string;

  @IsString()
  public description: string;

  @IsString()
  public manufacturer: string;

  @IsNumber()
  public price: number;

  @IsString()
  public screen_type: string;
}
