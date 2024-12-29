import { Router } from 'express';
import {getCart, addToCart, getCartTotal} from '../controllers/CartController';

const router = Router();

/**
 * @swagger
 * /api/cart:
 *   get:
 *     summary: Retrieve items in the cart
 *     description: Retrieve a list of all items currently in the cart.
 *     responses:
 *       200:
 *         description: A list of cart items.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   product_id:
 *                     type: integer
 *                   quantity:
 *                     type: integer
 */
router.get('/', getCart); // Fetch all cart items


/**
 * @swagger
 * /api/cart:
 *   post:
 *     summary: Add an item to the cart
 *     description: Add a new item to the cart with product ID and quantity.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               product_id:
 *                 type: integer
 *               quantity:
 *                 type: integer
 *     responses:
 *       201:
 *         description: The created cart item.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 product_id:
 *                   type: integer
 *                 quantity:
 *                   type: integer
 */
router.post('/', addToCart); // Add an item to the cart

router.get('/total', getCartTotal); // Add this route

export default router;