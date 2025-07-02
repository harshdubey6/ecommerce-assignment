# 🛒 E-commerce Backend API

A RESTful API for managing products, categories, and user-specific carts in an e-commerce app.

> 🌐 **Live URL**: [https://ecommerce-assignment-production.up.railway.app](https://ecommerce-assignment-production.up.railway.app)

---

## ⚙️ Tech Stack

- **Backend**: Node.js + Express
- **Language**: TypeScript
- **Database**: PostgreSQL (Cloud - Railway)
- **ORM**: Prisma
- **Validation**: Zod
- **Deployment**: Railway

---

## 🚀 Quick Start

```bash
git clone https://github.com/<your-username>/ecommerce-api.git
cd ecommerce-api
npm install

# Add .env with DATABASE_URL
npx prisma generate
npx prisma migrate dev --name init
npm run dev



🔗 API Endpoints
📦 Products
Method	Endpoint	Description
GET	/products	Get all products
GET	/products/:id	Get product by ID
POST	/products	Create new product
PUT	/products/:id	Update product by ID
DELETE	/products/:id	Delete product by ID
GET	/products?category=Shoes&search=nike	Filter + Search

🗂 Categories
Method	Endpoint	Description
GET	/categories	Get all categories
POST	/categories	Create new category

🛒 Cart (user-specific)
Method	Endpoint	Description
GET	/cart?userId=abc123	Get cart items for a user
POST	/cart	Add item to cart
DELETE	/cart/:itemId	Remove item from cart

🧪 Testing the API
Use tools like:

Postman
