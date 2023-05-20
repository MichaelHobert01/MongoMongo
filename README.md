# Social Network API
This is a Social Network API that allows users to interact with users, thoughts, reactions, and friend lists. The API is built using Node.js, Express.js, and MongoDB with Mongoose as the ODM (Object Data Modeling) library.

# Table of Contents
Installation
Usage
API Routes
Examples
Contributing
License
# Installation
To install and set up the Social Network API, follow these steps:

Ensure that you have Node.js and MongoDB installed on your machine.
Clone this repository to your local machine.
Open a terminal and navigate to the project's root directory.
Install the required dependencies by running the following command:
Copy code
npm install
Configure the MongoDB connection by providing the appropriate connection string in the .env file.
Usage
To start the server and sync the Mongoose models to the MongoDB database, use the following command:

sql
Copy code
npm start
The server will be started, and you can begin making API requests.

# API Routes
The Social Network API provides the following routes:

# Users

GET /api/users: Get all users
GET /api/users/:id: Get a single user by ID
POST /api/users: Create a new user
PUT /api/users/:id: Update a user by ID
DELETE /api/users/:id: Delete a user by ID
POST /api/users/:userId/friends/:friendId: Add a friend to a user's friend list
DELETE /api/users/:userId/friends/:friendId: Remove a friend from a user's friend list
Thoughts

GET /api/thoughts: Get all thoughts
GET /api/thoughts/:id: Get a single thought by ID
POST /api/thoughts: Create a new thought
PUT /api/thoughts/:id: Update a thought by ID
DELETE /api/thoughts/:id: Delete a thought by ID
Reactions

POST /api/thoughts/:thoughtId/reactions: Add a reaction to a thought
DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Remove a reaction from a thought
Examples
Here are some examples of how to use the Social Network API routes:

GET /api/users

Returns an array of all users in a formatted JSON response.
POST /api/users

Creates a new user by providing the required user data in the request body. Returns the created user in a formatted JSON response.
PUT /api/users/:id

Updates an existing user by providing the user ID in the request URL and the updated user data in the request body. Returns the updated user in a formatted JSON response.
DELETE /api/users/:id

Deletes a user by providing the user ID in the request URL. Returns a success message in a formatted JSON response.
For more detailed examples and request/response formats for each route, please refer to the API documentation or test the routes using a tool like Insomnia.

# Contributing
Contributions to the Social Network API are welcome! If you find any issues or have suggestions for improvements, please feel free to submit a pull request.

# License
The Social Network API is open source and available under the MIT License.