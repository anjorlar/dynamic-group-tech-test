# dynamic-group-tech-test

A simple node/express API 
* Base Route `http://localhost:3004/`
* Sample Route `http://localhost:3004/v1/getAllItem`

# To run your App with Docker follow the steps below
## Setting up Docker

- Install Docker [https://docs.docker.com/engine/install/]

- Set Environment Variables check sample.env `(.env)`

# To builds image and start containers

- RUN in Development mode `docker-compose up --build` [only use the --build whenever you make changes to Dockerfile or Package.json] else

- RUN `docker-compose up -d`


# To run with node follow the steps below

## Technologies Used
* `Backend: Node/Express`
*  `Database: MongoDb`
* `Libraries: Express`

## To Install
* `Download or clone`
* `Open the terminal and cd into the cloned or downloaded folder from the terminal`
* `Type npm install to install all dependencies`
* `check sample.env and update all environmental variable`

## To Run the app
* `npm start` to run in production
* `npm run dev` to run in development


# Features

- Gets a single item when the item's id is passed
- Gets all items.

## API Endpoints  

| Endpoint                                           | Functionality                        |
| -------------------------------------------------  | -----------------------------------  |
| GET /v1/getItem/:id                                | List all items                       |
| GET /v1/getAllItem?page=2&limit=10                 | search for a user                    |
| GET /                                              | Base route

# Documentation
To access the documentation
* Install Postman [https://www.postman.com/downloads/]
* click the link below to import the endpoints to Postman
[Postman Documentation](https://documenter.getpostman.com/view/7087675/TzeZDkuc)

## Author
Anjola Adebayo