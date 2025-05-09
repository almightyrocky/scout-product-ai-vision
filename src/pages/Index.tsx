
import { useState } from 'react';
import SearchBar from '@/components/SearchBar';
import ProductCard, { Product } from '@/components/ProductCard';
import LoadingState from '@/components/LoadingState';
import { searchProducts } from '@/services/api';
import { toast } from "@/components/ui/use-toast";
import { Image, Search } from 'lucide-react';

const Index = () => {
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setSearchQuery(query);
    setHasSearched(true);
    
    try {
      const products = await searchProducts(query);
      setSearchResults(products);
    } catch (error) {
      console.error('Search failed:', error);
      toast({
        title: "Error",
        description: "Failed to fetch product results. Please try again.",
        variant: "destructive",
      });
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container py-6">
          <h1 className="font-bold text-2xl text-gradient">ProductScout AI</h1>
        </div>
      </header>

      <main className="container px-4 py-12">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            Discover the Perfect Products
            <span className="block text-gradient">Powered by AI</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Simply tell us what you're looking for, and our AI will scout the best options for you.
          </p>
          <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        </section>

        {/* Results Section */}
        <section className="max-w-4xl mx-auto mt-8">
          {isLoading ? (
            <LoadingState />
          ) : hasSearched ? (
            searchResults.length > 0 ? (
              <>
                <h3 className="text-xl font-medium mb-6">
                  Top Products for "{searchQuery}"
                </h3>
                <div className="space-y-8">
                  {searchResults.map((product, index) => (
                    <ProductCard key={index} product={product} rank={index + 1} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <Image className="mx-auto h-16 w-16 text-gray-400 mb-4" />
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-gray-500">Try a different search query</p>
              </div>
            )
          ) : (
            <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-lg">
              <div className="bg-scout-light-purple p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-scout-purple" />
              </div>
              <h3 className="text-xl font-medium mb-2">Ready to discover products</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                Enter a product category, specific need, or any search term to get AI-powered recommendations
              </p>
            </div>
          )}
        </section>
      </main>

      <footer className="bg-white border-t py-8">
        <div className="container text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} ProductScout AI. All recommendations are AI-generated.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
