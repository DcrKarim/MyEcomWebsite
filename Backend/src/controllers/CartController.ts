import { Request, Response } from 'express';
import pool from '../database';

export const getCart = async (req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT * FROM cart');
        res.json(result.rows);
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
};

export const addToCart = async (req: Request, res: Response) => {
    const { product_id, quantity } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO cart (product_id, quantity) VALUES ($1, $2) RETURNING *',
            [product_id, quantity]
        );
        res.json(result.rows[0]);
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
};

// Add DELETE route for removing items from the cart
export const removeFromCart = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params; // Get the product ID from the URL parameter
        // Query the database to delete the item from the cart
        const result = await pool.query('DELETE FROM cart WHERE product_id = $1', [id]);
        if (result.rowCount === 0) {
            res.status(404).json({ error: 'Product not found in cart' });
        } else {
            res.status(200).json({ message: 'Product removed from cart' });
        }
    } catch (err) {
        const error = err as Error;
        res.status(500).json({ error: error.message });
    }
};

export const getCartTotal = async (req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT SUM(price * quantity) AS total FROM cart');
        const totalAmount = result.rows[0]?.total || 0;
        res.json({ totalAmount });
    } catch (err) {
        res.status(500).json({ error: 'Failed to calculate total amount' });
    }
};