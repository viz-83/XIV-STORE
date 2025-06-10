# 🛍️ XIV STORE

A modern full-stack e-commerce application built with the PERN stack (Postgre SQL, Express, React, Node.js). This project demonstrates a scalable and responsive shopping experience with user authentication, product management, and cart functionality.

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
- Zustand (for state management)

**Backend**
- Node.js
- Express.js
- Postgre SQL
- CORS, dotenv, express-validator

**Deployment**
- Render (both frontend and backend hosted together).

---

## 📁 Folder Structure

```
XIV-STORE/
🔺 client/                 # React frontend
🔺   ├── src/
🔺   │   ├── components/
🔺   │   ├── pages/
🔺   │   └── App.js
🔺   ├── public/screenshots/
🔺   └── tailwind.config.js
🔺 server/                 # Node.js + Express backend
🔺   ├── controllers/
🔺   ├── models/
🔺   ├── config/
🔺   ├── middleware/
🔺   └── server.js
```

---

## ⚙️ Setup Instructions

### Prerequisites

- Node.js and npm

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
DATABASE_URI=your_mongo_connection_string
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

