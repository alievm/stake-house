# Steak House Project Team-5

A web application for managing steakhouse operations, including a customer-facing interface, admin panel, and statistical insights.

---

## Features

### User Interface Pages
1. **Main Page**:
   - Welcome section with a menu of steaks.

2. **Cart Page**:
   - View selected steaks with details (image, price, and quantity).
   - Region selection for delivery.
   - Order date selection.
   - Order summary:
      - Order amount.
      - Quantity.
      - Tax by region.
      - Discount.
      - Total amount.

3. **Info Page**:
   - User details:
      - First name, last name, email, street, city, state, zip code, country, phone.
   - Displays cart totals (order amount, quantity, discount, region, tax, order date, total).
   - Cash payment option.
   - Submit button.

4. **Track Order Page**:
   - Track order status:
      - Food processing.
      - Out for delivery.
      - Delivered.

5. **Sign Up and Login Popups**:
   - **Sign Up**: Username, email, password, and confirm password.
   - **Login**: Username and password.

6. **Admin Panel**:
   - **Add Items**: Add new steaks to the menu.
   - **List Items**: View and manage steaks in the menu.
   - **Orders**: View user orders and update their statuses.

### Statistics Page
- **Weekly, Monthly, and Yearly Steaks Sold**:
   - Visualized with diagrams.
   - Downloadable as PDFs.

- **Steaks Sold by Region in a Month**:
   - Visualized with diagrams.

---

## Technologies Used
- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**: MongoDB Cloud

---

## Prerequisites
- **Node.js**: [Download Node.js](https://nodejs.org/en/download/)
- **MongoDB Cloud**: [Sign Up for MongoDB](https://www.mongodb.com/)

---

## Setup Instructions

### Backend Setup

#### Set Up MongoDB
Follow these steps to configure MongoDB:

1. Visit [MongoDB Cloud](https://www.mongodb.com/) and sign up.
2. Create a new project.
3. Go to the **Database** section and build a database:
   - Select **M0 (free tier)**.
   - Choose your region and create the database.
4. Set up a username and password (do not use `@` in the password).
5. Whitelist IP: Use `0.0.0.0/0` for access.
6. Click **Connect** and select the **Compass** option.
7. Copy the connection string and update the `db.js` file:
   ```javascript
   const dbConnection = "<your_connection_string>";
   ```
   Replace `<password>` with the password you created.

#### Set Up Stripe
1. Open the `.env` file in the backend folder.
2. Add your Stripe secret key:
   ```plaintext
   STRIPE_SECRET_KEY=your-stripe-secret-key
   ```

#### Run the Backend
Use the following command to start the backend server:
```bash
npm run server
```

### Frontend and Admin Panel Setup

#### Open Project Folder
1. Open the project folder in **VS Code**.

#### Open Integrated Terminal
1. Right-click on the sidebar and select **Open in Integrated Terminal**.

#### Install Dependencies
Run the following command:
```bash
npm install
```

#### Run the Frontend and Admin Panel
Use the following command to start the development server:
```bash
npm run dev
```

### View the Project
The project will open in your default web browser.

---

## Notes

- Ensure you have a stable internet connection during setup.
- Follow all steps in order to avoid configuration issues.
- For troubleshooting, refer to the official documentation of **Node.js**, **MongoDB**, and **Stripe**.

---



### Completion
The project was completed with all components implemented, tested, and finalized.
