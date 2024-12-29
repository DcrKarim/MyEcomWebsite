import { Router } from 'express';
import { getProductSales } from '../controllers/AnalyticsController';

const router = Router();

/**
 * @swagger
 * /api/analytics/product-sales:
 *   get:
 *     summary: Retrieve product sales data
 *     description: Get sales data for all products, grouped by product name.
 *     responses:
 *       200:
 *         description: A list of products and their sales.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   product:
 *                     type: string
 *                   sales:
 *                     type: integer
 */
router.get('/product-sales', getProductSales);

export default router;