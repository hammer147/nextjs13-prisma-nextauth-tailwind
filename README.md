# Nextjs 13 test

## install tailwindcss

## install prisma

```bash
npm i prisma -D
npx prisma init
```

in prisma/schema.prisma change the provider to mongodb and add a model

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

model User {
  id       String  @id @default(auto()) @map("_id") @db.ObjectId
  email    String  @unique
  name     String?
  imageUrl String?
}
```

in .env change the DATABASE_URL to your mongodb url

```env
DATABASE_URL="mongodb+srv://<username>:<password>@cluster0.ul1xj.mongodb.net/<dbname>?retryWrites=true&w=majority"
```

install prisma client

```bash
npm i @prisma/client
```

each time you change the schema.prisma file you need to run

```bash
npx prisma db push
```

[video 1](https://www.youtube.com/watch?v=L5JU1oR29TM&t=31s)

[video 2](https://www.youtube.com/watch?v=Y2e1m585hCk)

todos:

- add auth (video 3)

[video 3](https://www.youtube.com/watch?v=wnrGmNDNVvM)

[github](https://github.com/HamedBahram/nextjs-13)
