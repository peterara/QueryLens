# QueryLens - AI-Powered SQL Generator

Transform your natural language questions into SQL queries with our friendly AI assistant.

## 🚀 Features

- **Real SQL Generation**: Uses Claude 3.5 Sonnet via OpenRouter
- **Professional UI**: Clean, modern interface with smooth animations
- **Error Handling**: Helpful error messages and loading states
- **Copy to Clipboard**: Easy copying of generated SQL queries
- **Responsive Design**: Works perfectly on all devices

## 🛠️ Local Development

### Prerequisites
- Node.js 18+ 
- npm or yarn
- OpenRouter API key

### Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd querylens
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env.local` file in the `querylens` directory:
   ```env
   OPENROUTER_API_KEY=your_openrouter_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variable:
     - Name: `OPENROUTER_API_KEY`
     - Value: Your OpenRouter API key
   - Click "Deploy"

3. **Your app will be live at**: `https://your-project-name.vercel.app`

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `out` folder or connect your GitHub repo
   - Add environment variable in Netlify dashboard
   - Deploy

### Deploy to Railway

1. **Connect to Railway**
   - Go to [railway.app](https://railway.app)
   - Connect your GitHub repository
   - Add environment variable in Railway dashboard
   - Deploy

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENROUTER_API_KEY` | Your OpenRouter API key | Yes |

## 📝 Example Queries

- "Show me all users from India"
- "Find customers who spent more than $100"
- "Count orders by month"
- "Get the top 10 products by sales"
- "Show me users who signed up last month"

## 🛡️ Security

- API keys are server-side only
- No sensitive data is stored
- Environment variables are encrypted in production

## 📄 License

MIT License - feel free to use this project for your own applications!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you encounter any issues:
1. Check the browser console for errors
2. Verify your API key is correct
3. Ensure environment variables are set properly
4. Check the terminal logs for debugging information
