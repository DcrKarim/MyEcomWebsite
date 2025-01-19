# E-Commerce Application

### Homepage
![Homepage Screenshot](ScreenshotOfProject.PNG)

##Video 
[Watch the demo video on YouTube](https://www.youtube.com/watch?v=kseFmCaaPL4)

## Overview
This project is a full-stack e-commerce web application. It includes features such as product listing, adding products to a cart, placing orders, and order management. The application is built using Angular for the frontend and Node.js with PostgreSQL for the backend.

---

## Features
- Browse a product catalog
- Add products to a cart
- View cart details
- Place orders
- Admin panel for managing products and orders

---

## Technologies Used

## Database Setup

### Prerequisites
Ensure you have PostgreSQL installed and pgAdmin configured.

### Steps

1. Open **pgAdmin 4** or any PostgreSQL client.
2. Run the following SQL commands to create the database and necessary tables:

```sql
CREATE USER ecommerce_user WITH PASSWORD '1234';

CREATE DATABASE ecommerce_db;

GRANT ALL PRIVILEGES ON DATABASE ecommerce_db TO ecommerce_user;

-- Products Table
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL
);

-- Cart Table
CREATE TABLE cart (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL,
  FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Orders Table  
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  total_amount DECIMAL(10, 2)
);

-- Order_items Table
CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,
  order_id INTEGER NOT NULL,
  product_id INTEGER NOT NULL,
  quantity INTEGER NOT NULL
);

---- This is the query to insert products in the "products" Table
INSERT INTO products (title, description, price)
VALUES
  ('Wireless Mouse', 'Ergonomic wireless mouse with adjustable DPI', 15.99),
  ('Gaming Keyboard', 'Mechanical gaming keyboard with RGB backlighting', 49.99),
  ('Laptop Stand', 'Adjustable aluminum laptop stand for better posture', 25.99),
  ('USB-C Hub', '7-in-1 USB-C hub with HDMI, USB 3.0, and SD card reader', 29.99),
  ('Noise Cancelling Headphones', 'Over-ear headphones with active noise cancellation', 99.99),
  ('Portable Bluetooth Speaker', 'Compact Bluetooth speaker with 12-hour battery life and water resistance', 39.99),
  ('Smart LED Light Bulb', 'Wi-Fi-enabled light bulb with customizable colors and voice control compatibility', 19.99),
  ('Wireless Charger', 'Fast-charging wireless pad compatible with Qi-enabled devices', 18.99),
  ('External SSD Drive', '1TB portable SSD with high-speed data transfer and durable build', 89.99),
  ('Fitness Tracker Watch', 'Wearable fitness tracker with heart rate monitor and sleep tracking', 59.99),
  ('Desk Organizer', 'Multi-compartment desk organizer with pen holder and drawer', 12.99),
  ('Smart Home Camera', 'Indoor smart security camera with motion detection and two-way audio', 49.99);



This step introduces a structured "Database Setup" section.

### Frontend
- **Angular**: A powerful framework for building responsive and dynamic web interfaces.
- **TypeScript**: Enhances JavaScript by adding types.
- **CSS**: For styling and responsiveness.

### Backend
- **Node.js**: JavaScript runtime for building scalable server-side applications.
- **Express**: Minimalist web framework for Node.js.
- **PostgreSQL**: Robust relational database for storing application data.

---

## Installation

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Angular CLI](https://angular.io/cli)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/DcrKairm/MyEcomWebsite.git
   cd MyEcomWebsite
   ```

2. Set up the backend:
   ```bash
   cd backend
   npm install
   ```

3. Configure the database:
   - Update `backend/database.js` with your PostgreSQL credentials.
   - Run the provided SQL script to set up the database tables.

4. Start the backend server:
   ```bash
   npm start
   ```

5. Set up the frontend:
   ```bash
   cd ../frontend
   npm install
   ```

6. Start the frontend server:
   ```bash
   ng serve
   ```

---

## Usage
- Navigate to the frontend in your browser at `http://localhost:4200/`.
- Explore the product catalog and add items to your cart.
- Proceed to checkout to place an order.

---

## Project Structure

### Backend
- **`/routes`**: API routes
- **`/controllers`**: Request handlers
- **`/database`**: Database connection

### Frontend
- **`/components`**: Angular components
- **`/services`**: Services for API calls

---

## API Endpoints

### Product Endpoints
- **GET** `/api/products`: Fetch all products
- **POST** `/api/products`: Add a new product
- **PUT** `/api/products/:id`: Update a product
- **DELETE** `/api/products/:id`: Delete a product

### Cart Endpoints
- **GET** `/api/cart`: Fetch cart items
- **POST** `/api/cart`: Add item to cart
- **DELETE** `/api/cart/:id`: Remove item from cart

### Order Endpoints
- **POST** `/api/orders`: Place an order

---

## Contributing
Feel free to fork this repository and submit pull requests. Make sure to adhere to the coding standards and include proper documentation for new features.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## Contact
For inquiries or support:
- **Email**: karim.bouchaane@edu.devinci.fr
- **GitHub**: [DcrKarim](https://github.com/DcrKarim)
- WAS DONE BY:
- Karim BOUCHAANE
