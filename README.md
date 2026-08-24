# rwsdk books

A reading list app built with Redwood sdk

- dev server: pnpm dev
- db migrate: pnpm run migrate:new "setup all database models", pnpm run - migrate:dev, pnpm run migrate:prd
- database viewer: npx prisma studio
- export database: npx wrangler d1 export rwsdk-books-selected-aardwolf --remote - - - --output=./database.sql
- generate types: pnpm prisma generate
