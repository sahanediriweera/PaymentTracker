### Payment Tracker Application

#### Frontend (Next.js)

This is a frontend application developed using Next.js for a payment tracker system.

**Overview:**
The frontend allows users to interact with the payment tracker system, view transactions, manage accounts, and perform various actions related to payment tracking.

**Getting Started:**
To use the frontend application, follow these steps:

1. Ensure Node.js is installed on your computer.
2. Clone the project repository to your local machine:
   ```bash
   git clone https://github.com/sahanediriweera/PaymentTracker
   ```
3. Navigate to the project directory:
   ```bash
   cd tracker-app-frontend
   ```
4. Install the necessary dependencies:
   ```bash
   npm install
   ```
5. Start the application:
   ```bash
   npm start
   ```

**Contributing:**
Contributions to the frontend application are welcome. Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make the necessary changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request describing your changes.

Project Lead: Sahan Ediriweera

#### Backend (NestJS)

This is the backend application (API) developed using NestJS for the payment tracker system.

**Overview:**
The backend provides APIs to manage payments, transactions, user accounts, and authentication for the payment tracker system.

**Getting Started:**
To use the backend application, follow these steps:

1. Clone the project repository to your local machine:
   ```bash
   git clone <backend_repository_url>
   ```
2. Navigate to the project directory:
   ```bash
   cd tracker-app
   ```
3. Install the necessary dependencies:
   ```bash
   npm install
   ```
4. Start the application:
   ```bash
   npm run start:dev
   ```

**Database:**
The database for this application is managed using PostgreSQL with Prisma for ORM.

**Database Migration (Prisma):**
To run database migrations with Prisma:

1. Ensure Docker is installed on your machine.
2. Navigate to the project directory:
   ```bash
   cd tracker-app
   ```
3. Start the PostgreSQL database using Docker Compose:
   ```bash
   docker-compose up
   ```
4. Apply migrations using Prisma:
   ```bash
   npx prisma migrate dev
   ```

**Contributing:**
Contributions to the backend application are welcome. Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make the necessary changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request describing your changes.

Project Lead: Sahan Ediriweera

Thank you for your interest in this project!