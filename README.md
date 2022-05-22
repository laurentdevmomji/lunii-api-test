# Lunii API test
Lunii API test

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
3. Go to :
```sh http://localhost:8000/ping```

## Build Docker image locally

```sh
docker build -t lunii-api-test .
```

## Run tests

```sh
npm test
```

## Swagger
```sh
/docs
```

## Features

### TypeORM
https://orkhan.gitbook.io/typeorm/docs