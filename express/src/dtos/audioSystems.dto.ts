import { IsString, IsNumber } from 'class-validator';

export class CreateAudioSystemDto {
  @IsString()
  public name: string;

  @IsString()
  public description: string;

  @IsString()
  public manufacturer: string;

  @IsNumber()
  public price: number;

  @IsNumber()
  public effect: number;
}
