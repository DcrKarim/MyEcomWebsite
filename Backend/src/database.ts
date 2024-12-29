import { Pool } from 'pg';

const pool = new Pool({
    user: 'ecommerce_user',       // Replace with your PostgreSQL user
    host: 'localhost',            // Database host
    database: 'ecommerce_db',     // Database name
    password: '1234',             // Replace with your PostgreSQL password
    port: 5432,                   // Default PostgreSQL port
});

pool.on('connect', () => {
    console.log('Connected to the database');
});

export default pool;