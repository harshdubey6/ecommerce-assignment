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
