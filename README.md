# Lunii API test
Lunii API test

## Features

### TypeORM
https://orkhan.gitbook.io/typeorm/docs

### Joi schema validator 
https://joi.dev/api/

### Swagger
https://swagger.io/

## Build from source

1. Clone the repo

   ```sh
   git clone https://github.com/laurentdevmomji/lunii-api-test.git
   cd lunii-api-test
   ```

2. Install dependencies.

   ```sh
   npm ci
   ```

3. Build the production server.

   ```sh
   npm build
   ```

4. Run the server.
   ```sh
   npm start
   ```

## Run NodeJS server + db (dev)

1. Run Docker Db
```sh
   docker-compose up
   ```

1. Run NodeJS server
```sh
   npm run dev
   ```
3. Test server response
```sh 
http://localhost:8000/api/ping
```

## ShortUrl create / read

1. Create shortUrl entry
```sh
curl --location --request POST 'http://localhost:8000/api/shorturls/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "originalUrl": "https://wanago.io"
}'
```

2. Get API response
```sh
{
    "originalUrl": "https://wanago.io",
    "shortUrl": "CBrwOMwVlLG",
    "id": 30,
    "nbClicks": 0,
    "createdAt": "2022-05-23T06:22:09.416Z",
    "updatedAt": "2022-05-23T06:22:09.416Z"
}
```

3. Access to originalURL by GET request
```sh
/api/shorturl/{shortUrl}
```

4. Access to shorturls analytics
```sh
/api/analytics/shorturls
```
## Run Jest unit tests

```sh
npm test
```

## Swagger doc
```sh
/docs
```
## Build Docker image locally

```sh
docker build -t lunii-api-test .
```

