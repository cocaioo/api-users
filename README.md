# Users API

A simple REST API for user management using Node.js, Express, and MongoDB. It allows users to create, retrieve, update, and delete user records efficiently.

## Requirements

- Node.js (latest recommended version)
- MongoDB (local or a service like MongoDB Atlas)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/users-api.git
   ```
2. Navigate to the project directory:
   ```sh
   cd users-api
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file in the project root and define your environment variables:
   ```sh
   MONGO_URI=your_mongodb_connection_string
   PORT=3000
   ```

## Usage

To start the server in development mode:
```sh
npm run dev
```

To start the server in production mode:
```sh
npm start
```

The API will run at `http://localhost:3000` (or the port defined in `.env`).

## Endpoints

### Create a User
**POST** `/users`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@email.com"
}
```

**Response:**
```json
{
  "_id": "6512a7f1b2c67d001c4a1e23",
  "name": "John Doe",
  "email": "john@email.com",
  "__v": 0
}
```

### List Users
**GET** `/users`

**Response:**
```json
[
  {
    "_id": "6512a7f1b2c67d001c4a1e23",
    "name": "John Doe",
    "email": "john@email.com"
  }
]
```

### Get User by ID
**GET** `/users/:id`

**Response:**
```json
{
  "_id": "6512a7f1b2c67d001c4a1e23",
  "name": "John Doe",
  "email": "john@email.com"
}
```

### Update a User
**PUT** `/users/:id`

**Request Body:**
```json
{
  "name": "John Smith"
}
```

**Response:**
```json
{
  "_id": "6512a7f1b2c67d001c4a1e23",
  "name": "John Smith",
  "email": "john@email.com"
}
```

### Delete a User
**DELETE** `/users/:id`

**Response:**
```json
{
  "message": "User successfully deleted"
}
```

## Technologies Used

- Node.js
- Express
- MongoDB (via Mongoose)
- Dotenv
- Cors
- Nodemon (for development)

## License

This project is licensed under the MIT License. Feel free to use and modify it!

