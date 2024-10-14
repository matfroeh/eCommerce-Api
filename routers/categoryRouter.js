import { Router } from 'express';
import { createCategory, getCategories } from '../controllers/categories.js';

const categoryRouter = Router();

categoryRouter.route('/').get(getCategories).post(createCategory);

export default categoryRouter;