import App from '@/app';
import { AuthController } from '@controllers/auth.controller';
import { IndexController } from '@controllers/index.controller';
import { UsersController } from '@controllers/users.controller';
import validateEnv from '@utils/validateEnv';
import { ComputersController } from './controllers/computers.controller';
import { MobilesController } from './controllers/mobiles.controller';
import { AudioSystemsController } from './controllers/audioSystems.controller';
import { TelevisionsController } from './controllers/televisions.controller';

validateEnv();

const app = new App([
  AuthController,
  IndexController,
  UsersController,
  ComputersController,
  MobilesController,
  AudioSystemsController,
  TelevisionsController,
]);
app.listen();
