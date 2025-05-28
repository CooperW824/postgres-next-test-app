# Simple NextJS, Postgres, and Prisma Prototype

A simple prototype app to explore how NextJS, Postgres, and Prisma work together. An experiment for the MercerX Beyond GPA Project.

## Getting Started

To get started with this:

1. Install [Docker](https://www.docker.com/get-started/)
1. Install [NodeJS](https://nodejs.org)
1. Clone this repository: `git clone https://github.com/rpi-mercerxlab/beyond-gpa-prototyping-space.git`
1. Start the Postgres Database. 
    1. If this is your first time creating the docker container, then run `docker run --name mydb -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres`
    1. If you have made the container before, then you can run `docker start mydb`
1. Configure the .env file
    1. Create a new file named `.env` in the `nextjs-postgres-prisma-test`
    1. Place the line `DATABASE_URL="postgresql://postgres:password@localhost:5432/mydb"`
1. Install Node Dependencies: `npm i`
1. Apply the Prisma Schema to the DB:
    1. `npx prisma migrate dev --name init`
1. Generate a prisma client
    1. `npx prisma generate`
1. Start the development server: `npm run dev`


## Updating the Database Schema

This prototype uses Prisma ORM to manage data, to change the database schema, first modify the schema in `prisma/schema.prisma`. You may find it helpful to install the [Prisma Extension for VSCode](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma), and read their docs at [prisma.io](https://www.prisma.io/docs).

After modifying the schema run the following command to migrate the DB to the new schema.

    npx prisma migrate dev --name init

Then run the following command to generate a prisma client that will interface with the DB (so that we don't have to write SQL by hand). 

    npx prisma generate


## Important Resources
- [NextJS Docs](https://nextjs.org/docs)
- [Docker](https://www.docker.com/get-started/)
- [NodeJS](https://nodejs.org)
- [Prisma Docs](https://www.prisma.io/docs)
- [TailwindCSS](https://tailwindcss.com/docs/installation/using-vite)
