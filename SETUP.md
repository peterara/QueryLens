# QueryLens Setup Guide

## Setting up your OpenRouter API Key

To use the SQL generation feature, you need to configure your OpenRouter API key:

### 1. Get your OpenRouter API Key

1. Go to [OpenRouter](https://openrouter.ai/keys)
2. Sign up or log in to your account
3. Create a new API key
4. Copy the API key

### 2. Configure the Environment

Create a `.env.local` file in the root of your project (same level as `package.json`) with the following content:

```env
# OpenRouter API Configuration
OPENROUTER_API_KEY=your_actual_api_key_here

# Next.js Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Replace `your_actual_api_key_here` with your actual OpenRouter API key.

### 3. Restart the Development Server

After creating the `.env.local` file, restart your development server:

```bash
npm run dev
```

### 4. Test the Application

1. Go to http://localhost:3000
2. Type a question like "Show me all users from India"
3. Click "Generate SQL"
4. You should see a real SQL query generated!

## Features

- **Real SQL Generation**: Uses Claude 3.5 Sonnet via OpenRouter
- **Error Handling**: Displays helpful error messages if something goes wrong
- **Copy to Clipboard**: Easy copying of generated SQL queries
- **Professional UI**: Clean, modern interface

## Example Queries to Try

- "Show me all users from India"
- "Find customers who spent more than $100"
- "Count orders by month"
- "Get the top 10 products by sales"
- "Show me users who signed up last month"

## Troubleshooting

If you see an error about the API key not being configured:

1. Make sure you created the `.env.local` file
2. Check that the API key is correct
3. Restart the development server
4. Check the browser console for any error messages

## Security Note

- Never commit your `.env.local` file to version control
- The `.env.local` file is already in `.gitignore`
- Your API key will only be used on the server side 