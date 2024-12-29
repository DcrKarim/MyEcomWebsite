import { Router } from 'express';
import { createOrder } from '../controllers/OrderController';

const router = Router();

/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: Place an order
 *     description: Create a new order with customer information and total amount.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *                 description: The first name of the customer
 *                 example: "John"
 *               phone_number:
 *                 type: string
 *                 description: The phone number of the customer
 *                 example: "1234567890"
 *               total_amount:
 *                 type: number
 *                 description: The total amount for the order
 *                 example: 100.50
 *     responses:
 *       201:
 *         description: Order successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The order ID
 *                   example: 1
 *                 firstname:
 *                   type: string
 *                   description: The customer's first name
 *                   example: "John"
 *                 phone_number:
 *                   type: string
 *                   description: The customer's phone number
 *                   example: "1234567890"
 *                 total_amount:
 *                   type: number
 *                   description: The total amount for the order
 *                   example: 100.50
 */
router.post('/', createOrder); // Place an order

export default router;