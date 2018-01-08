import { Router } from 'express';
import Controllers from '../../../controllers';
import Routes from '../../../configs/routes';

let api = Router();

// mount the facets resource
api.use(Routes.menu.validate, Controllers.api.menu.validate);

export default api;
