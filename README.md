# 🛍️ XIV STORE

A modern full-stack e-commerce application built with the MERN stack (MongoDB, Express, React, Node.js). This project demonstrates a scalable and responsive shopping experience with user authentication, product management, and cart functionality.

🔗 **Live Demo:** [xiv-store.onrender.com](https://xiv-store.onrender.com)  
💻 **Backend + Frontend Code:** [GitHub Repository](https://github.com/viz-83/XIV-STORE)

---

## 📷 Screenshots

### Home Page
![image](https://github.com/user-attachments/assets/fcb59137-05ca-480f-8634-9922922be4bc)



### New Product Page
![image](https://github.com/user-attachments/assets/8930e749-b0c0-4acd-a710-340df772c6af)


### Product Details
![image](https://github.com/user-attachments/assets/15d2909c-f468-453f-b920-2f6a35e59c80)


---

## 🚀 Features

- 📦 Browse products with detailed view
- 🛒 Add, update, and remove items from cart
- 🔐 JWT-based authentication (Register / Login / Logout)
- 👤 User and admin roles
- 🛠️ Admin panel for product CRUD operations
- 📱 Fully responsive design
- ✅ Form validation & error handling
- ⚡ RESTful API integration

---

## 🛠️ Tech Stack

**Frontend**
- React.js
- React Router
- Tailwind CSS
- Axios
- React Context API + useReducer (for state management)

**Backend**
- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Tokens (JWT) for auth
- CORS, dotenv, express-validator

**Deployment**
- Render (both frontend and backend hosted separately)

---

## 📁 Folder Structure

```
XIV-STORE/
🔺 client/                 # React frontend
🔺   ├── src/
🔺   │   ├── components/
🔺   │   ├── pages/
🔺   │   ├── context/
🔺   │   └── App.js
🔺   ├── public/screenshots/
🔺   └── tailwind.config.js
🔺 server/                 # Node.js + Express backend
🔺   ├── controllers/
🔺   ├── models/
🔺   ├── routes/
🔺   ├── middleware/
🔺   └── server.js
```

---

## ⚙️ Setup Instructions

### Prerequisites

- Node.js and npm
- MongoDB instance (local or cloud)

### 1. Clone the Repository

```bash
git clone https://github.com/viz-83/XIV-STORE.git
cd XIV-STORE
```

### 2. Install Dependencies

**For Backend:**

```bash
cd server
npm install
```

**For Frontend:**

```bash
cd ../client
npm install
```

### 3. Environment Variables

Create a `.env` file in the `server` folder with the following:

```env
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

### 4. Run the App Locally

**Backend:**

```bash
cd server
npm run dev
```

**Frontend:**

```bash
cd client
npm run dev
```

---

## 🤝 Contribution

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).

---

## 🙌 Acknowledgments

Big thanks to the open-source community and all the amazing devs who inspired this build.

---

