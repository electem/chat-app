
# install dependencies
npm install
```

Copy .env.example and rename to .env

Edit the .env file to match your database settings add database name, user name and password

```bash
# run your migrations
adonis migration:run

# Start the dev server
adonis serve --dev
```