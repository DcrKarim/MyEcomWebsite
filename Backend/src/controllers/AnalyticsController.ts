import { Request, Response } from 'express';
import db from '../database';

export const getProductSales = async (req: Request, res: Response) => {
    try {
        const salesData = await db.query(
            `
                SELECT p.title AS product, SUM(oi.quantity) AS sales
                FROM order_items oi
                         INNER JOIN products p ON oi.product_id = p.id
                GROUP BY p.title
                ORDER BY sales DESC;
      `
        );
        res.json(salesData.rows); // Adjust based on your query method
    } catch (error) {
        console.error('Error fetching product sales:', error);
        res.status(500).json({ error: 'Failed to fetch product sales data' });
    }
};