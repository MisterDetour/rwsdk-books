dev server: pnpm dev
db migrate: pnpm run migrate:new "setup all database models", pnpm migrate:dev, pnpm migrate:prd
database viewer: npx prisma studio
export database: npx wrangler d1 export rwsdk-books-selected-aardwolf --remote --output=./database.sql
generate types: pnpm prisma generate ("Property 'applicationStatus' does not exist on type 'PrismaClient<PrismaClientOptions, never, DefaultArgs>'")

[] add favicon

[] setup image uploads

[] order read books by readDate
[] make fields required
[] use toasts instead of alerts https://docs.rwsdk.com/tutorial/full-stack-app/jobs-details/#updating-the-application
[] figure out better solution for refreshing books after adding one
[] improve css
[] books don't update after new one added
[] add custom font
[] turn off signup
[] fix type errors (bookshelf.tsx)
