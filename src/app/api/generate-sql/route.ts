import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json();

    if (!query || typeof query !== "string") {
      return NextResponse.json(
        { error: "Query is required and must be a string" },
        { status: 400 }
      );
    }

    // Get API key from environment variable
    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!apiKey) {
      console.error("OpenRouter API key not found in environment variables");
      return NextResponse.json(
        { error: "OpenRouter API key not configured" },
        { status: 500 }
      );
    }

    console.log("Making request to OpenRouter API...");

    // Call OpenRouter API
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer":
            process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
          "X-Title": "QueryLens SQL Generator",
        },
        body: JSON.stringify({
          model: "anthropic/claude-3.5-sonnet",
          messages: [
            {
              role: "system",
              content: `You are an expert SQL developer. Your task is to convert natural language questions into SQL queries.

Rules:
1. Always return ONLY the SQL query, no explanations or additional text
2. Use standard SQL syntax
3. Assume common table names like 'users', 'orders', 'products', 'customers' if not specified
4. Use appropriate WHERE clauses, JOINs, and aggregations as needed
5. Make the query practical and executable
6. If the question is ambiguous, make reasonable assumptions about table structure

Examples:
- "Show me all users from India" → SELECT * FROM users WHERE country = 'India';
- "Find customers who spent more than $100" → SELECT * FROM customers WHERE total_spent > 100;
- "Count orders by month" → SELECT DATE_FORMAT(order_date, '%Y-%m') as month, COUNT(*) as order_count FROM orders GROUP BY DATE_FORMAT(order_date, '%Y-%m') ORDER BY month;`,
            },
            {
              role: "user",
              content: query,
            },
          ],
          temperature: 0.1,
          max_tokens: 500,
        }),
      }
    );

    console.log("OpenRouter API response status:", response.status);

    if (!response.ok) {
      const errorData = await response.text();
      console.error("OpenRouter API error response:", errorData);
      return NextResponse.json(
        {
          error: `Failed to generate SQL query: ${response.status} ${response.statusText}`,
        },
        { status: 500 }
      );
    }

    const data = await response.json();
    const generatedSQL = data.choices?.[0]?.message?.content?.trim();

    if (!generatedSQL) {
      console.error("No SQL query generated from API response");
      return NextResponse.json(
        { error: "No SQL query generated" },
        { status: 500 }
      );
    }

    console.log("Generated SQL:", generatedSQL);
    return NextResponse.json({ sql: generatedSQL });
  } catch (error) {
    console.error("Error generating SQL:", error);
    return NextResponse.json(
      {
        error: `Internal server error: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
      },
      { status: 500 }
    );
  }
}
