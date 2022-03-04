# dynamic-group-tech-test

# To run your App with Docker follow the steps below
## Setting up Docker

- Install Docker [https://docs.docker.com/engine/install/]

- Create a `.env` file in the root directory then check sample.env to set Environment Variables values

# To builds image and start containers

- RUN in Development mode `docker-compose up --build` [only use the --build whenever you make changes to Dockerfile or Package.json] else

- RUN `docker-compose up -d` [only use the -d flag to run docker container underground]

- To kill running container(s) `docker-compose down`
- To remove image `docker rmi [IMAGE_ID] -f`
- To remove multiple images `docker rmi -f $(docker images -aq)`
- To access running container `docker exec -it [container_id or container_name] bash`


# To run with node follow the steps below

## Technologies Used
* `Backend: Node/Express`
*  `Database: MongoDb`
* `Libraries: Express`

## To Install
* `Download or clone`
* `Open the terminal and cd into the cloned or downloaded folder from the terminal`
* `Type npm install to install all dependencies`
* `Create a .env file in the root directory then check sample.env to set Environment Variables values`

## To Run the app
* `npm start` to run in production
* `npm run dev` to run in development


# Features

- Gets a single item when the item's id is passed
- Gets all items.

## API Endpoints  

| Endpoint                                           | Functionality                        |
| -------------------------------------------------  | -----------------------------------  |
| GET /v1/getItem/:id                                | Get individual item with item id     |
| GET /v1/getAllItem                                 | Get all items                        |
| GET /v1/getAllItem?page=2&limit=10                 | Get all items with paginantion passed|
| GET /                                              | Base route

localhost
* Base Route [`http://localhost:3004/`]
* Get All items [`http://localhost:3004/v1/getAllItem`]
* Get individual item  [`http://localhost:3004/v1/getItem/60ce839fb2e84d0117b1cea`]

Remote
* Base Route [https://itemlist-app.herokuapp.com]
* Get All items [https://itemlist-app.herokuapp.com/v1/getAllItem]
* Get individual item [https://itemlist-app.herokuapp.com/v1/getItem/60ce839fb2e84d0117b1cea8]

# Documentation
To access api endpoint
* Install Postman [https://www.postman.com/downloads/]
* click the link to import the endpoints to Postman
[Postman Documentation](https://documenter.getpostman.com/view/7087675/TzeZDkuc)

## Author
Anjola Adebayo