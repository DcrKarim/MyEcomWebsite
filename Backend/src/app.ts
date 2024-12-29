import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import productRoutes from './routes/Products';
import cartRoutes from './routes/Cart';
import orderRoutes from './routes/Orders';

import { setupSwagger } from './swagger';
import {removeFromCart} from "./controllers/CartController";

import analyticsRoutes from './routes/Analytics';

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);

app.delete('/api/cart/:id', removeFromCart);


app.use('/api/cart', cartRoutes);

app.use('/api/analytics', analyticsRoutes);

// Swagger setup
setupSwagger(app);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});