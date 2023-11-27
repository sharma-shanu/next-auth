 Create an new application on google cloud and then fill in every domain as localhost:3000 except for Redirect URI

 The Redirect URI should be :- <http://localhost:3000/api/auth/callback/google>

 This would be an OAuth 2.0 provider.


 Steps to integrate PostgresSQL, using Docker

 `npx prisma`
 `npx prisma init`
 `docker pull postgres`
`docker run -d --name next-auth-postgres -e POSTGRES_PASSWORD=shanu -p 5432:5432 postgres`
`DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"`
Add the schema into schema.prisma 
`npx prisma migrate dev --name init`

To apply the migration from a new project
`npx prisma migrate dev`


# install prisma client
npm install @prisma/client

Prisma by default looks for enviroment variables in the .env file
