dev server: pnpm dev
db migrate: pnpm run migrate:new "setup all database models"
database viewer: npx prisma studio
export database: npx wrangler d1 export rwsdk-books-selected-aardwolf --remote --output=./database.sql

[] need to be able to change status on books (mark read date)
[] add favicon

[] make fields required
[] use toasts instead of alerts https://docs.rwsdk.com/tutorial/full-stack-app/jobs-details/#updating-the-application
[] figure out better solution for refreshing books after adding one
[] setup image uploads
[] improve css
[] books don't update after new one added
[] add custom font
[] turn off signup
[] fix type errors
