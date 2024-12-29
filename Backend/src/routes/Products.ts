import { Router } from 'express';
import {getProductById, getProducts} from '../controllers/ProductsController';

const router = Router();

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Retrieve a list of products
 *     description: Retrieve a list of all products in the database.
 *     responses:
 *       200:
 *         description: A list of products.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 *                   price:
 *                     type: number
 */
router.get('/:id', getProductById); // Fetch all products
router.get('/', getProducts); // Fetch all products

export default router;