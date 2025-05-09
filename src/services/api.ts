
import { Product } from '@/components/ProductCard';

const OPENAI_API_KEY = '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';

export async function searchProducts(query: string): Promise<Product[]> {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini', // Use a recent model that's cost-effective
        messages: [
          {
            role: 'system',
            content: `You are ProductScout AI, an expert product finder and reviewer. Your task is to provide a ranked list of the top 3-5 products matching the user's query.
            
            For each product, include:
            - Product name
            - Brief description (2-3 sentences)
            - Rating out of 5 (be specific, like 4.2/5)
            - Approximate price range
            - 3-5 key features (as short phrases)
            - 2-3 pros
            - 2-3 cons
            
            Format your response as a JSON array with the following structure:
            [
              {
                "name": "Product Name",
                "description": "Brief description",
                "rating": 4.5,
                "price": "$XX - $XX",
                "features": ["Feature 1", "Feature 2", "Feature 3"],
                "pros": ["Pro 1", "Pro 2"],
                "cons": ["Con 1", "Con 2"]
              },
              // more products...
            ]`
          },
          {
            role: 'user',
            content: `Find me the best products for: ${query}`
          }
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }

    const data = await response.json();
    
    // Extract and parse the JSON content from the response
    const content = data.choices[0].message.content;
    const products = JSON.parse(content);
    
    return products;
  } catch (error) {
    console.error('Error searching products:', error);
    throw error;
  }
}
