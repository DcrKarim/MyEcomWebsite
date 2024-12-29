import { Request, Response } from 'express';
import pool from '../database';


export const createOrder = async (req: Request, res: Response): Promise<void> => {
    const client = await pool.connect();
    try {
        const { firstname, phone_number, total_amount } = req.body;

        if (!firstname || !phone_number || total_amount === undefined) {
            res.status(400).json({ error: 'Invalid input. Please provide all required fields.' });
            return;
        }

        if (total_amount <= 0) {
            res.status(400).json({ error: 'Total amount must be greater than 0.' });
            return;
        }

        await client.query('BEGIN');
        const result = await client.query(
            'INSERT INTO orders (firstname, phone_number, total_amount) VALUES ($1, $2, $3) RETURNING id',
            [firstname, phone_number, total_amount]
        );

        const orderId = result.rows[0].id;

        await client.query('DELETE FROM cart');
        await client.query('COMMIT');

        res.status(200).json({ message: 'Order placed successfully.', orderId });
    } catch (err) {
        await client.query('ROLLBACK');
        console.error('Transaction error:', err);
        res.status(500).json({ error: 'An error occurred during checkout.' });
    } finally {
        client.release();
    }
};

/*
export const createOrder = async (req: Request, res: Response) => {
    const client = await pool.connect();
    try {
        const { firstname, phone_number, total_amount } = req.body;

        if (total_amount <= 0) {
            return res.status(400).json({ error: 'Total amount must be greater than 0' });
        }

        await client.query('BEGIN');

        const result = await client.query(
            'INSERT INTO orders (firstname, phone_number, total_amount) VALUES ($1, $2, $3) RETURNING id',
            [firstname, phone_number, total_amount]
        );

        const orderId = result.rows[0].id;

        await client.query('DELETE FROM cart');

        await client.query('COMMIT');

        res.status(200).json({ message: 'Order placed successfully', orderId });
    } catch (err) {
        await client.query('ROLLBACK');
        console.error('Transaction error:', err);
        res.status(500).json({ error: 'An error occurred during checkout' });
    } finally {
        client.release();
    }
}; */