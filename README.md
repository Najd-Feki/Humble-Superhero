# Humble Superhero API

A simple API to manage superheroes, focusing on their humility scores. Built with NestJS and React.
No external libraries were used in this project, I wanted to keep it as simple and as fast as I can!

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
  - [Backend](#backend)
  - [Frontend](#frontend-optional)
- [API Endpoints](#api-endpoints)
  - [Adding a Superhero](#adding-a-superhero)
  - [Fetching Superheroes](#fetching-superheroes)
- [Testing](#testing)
- [If I Had More Time](#if-i-had-more-time)
- [Collaboration](#collaboration)
- [License](#license)

## Features

- Add a new superhero with a name, superpower, and humility score.
- Fetch a list of superheroes sorted by their humility score (descending).
- A React frontend for adding and viewing superheroes in real-time.
- Basic validation for humility score (must be between 1 and 10).
- Thoughtful design effort was made to ensure a good user experience, with hero cards dynamically changing based on the humility score of the added hero.
- Validations are added both on the frontend side and the backend, because well, you never know.

## Technologies

### Backend:

- NestJS (or Express.js)
- In-memory database (array)

### Frontend (Optional):

- React
- TypeScript

### Testing:

- Jest (for backend unit tests)

## Setup

### Backend

Clone the repository:

```bash
git clone https://github.com/Najd-Feki/Humble-Superhero-API.git
cd humble-superhero-api
```

Install dependencies:

```bash
yarn install
```

Start the backend server:

```bash
yarn start:dev
```

The API will be available at `http://localhost:3000`.

### Frontend

Navigate to the frontend directory:

```bash
cd humble-superhero-front
```

Add .env file with the following for the endpoint url:

```bash
VITE_API=http://localhost:3000/superheroes
```

Install dependencies:

```bash
yarn install
```

Start the React development server:

```bash
yarn dev
```

## API Endpoints

### **POST /superheroes**: Add a new superhero.

#### Request Body:

```json
{
  "name": "Superman",
  "superpower": "Flight",
  "humilityScore": 8
}
```

### **GET /superheroes**: Fetch all superheroes sorted by humility score (descending).

#### Example Response:

```json
[
  {
    "id": 1,
    "name": "Batman",
    "superpower": "Intelligence",
    "humilityScore": 9
  },
  {
    "id": 2,
    "name": "Superman",
    "superpower": "Flight",
    "humilityScore": 8
  }
]
```

## Usage

### Adding a Superhero

Send a `POST` request to `/superheroes` with the following JSON body:

```json
{
  "name": "Batman",
  "superpower": "Intelligence",
  "humilityScore": 9
}
```

### Fetching Superheroes

Send a `GET` request to `/superheroes`. The response will be:

```json
[
  {
    "id": 1,
    "name": "Batman",
    "superpower": "Intelligence",
    "humilityScore": 9
  },
  {
    "id": 2,
    "name": "Superman",
    "superpower": "Flight",
    "humilityScore": 8
  }
]
```

## Testing

To run the backend tests:

```bash
yarn test
```

## If I Had More Time

Here are some improvements I’d explore:

- **Database Integration:** Replace the in-memory array with a proper database like PostgreSQL or MongoDB.
- **Authentication:** Add user authentication to secure the API.
- **Pagination:** Implement pagination for the `/superheroes` endpoint.
- **Frontend Enhancements:** Add animations, improve the UI, and implement real-time updates using WebSockets.
- **Advanced Validation:** Add more robust validation for input fields (e.g., name length, superpower uniqueness).

## Collaboration

I’d love to collaborate with a teammate to:

- Refactor the code for better performance and scalability.
- Add new features like search and filtering for superheroes.
- Improve the frontend design and user experience.
- Write comprehensive unit and integration tests.
