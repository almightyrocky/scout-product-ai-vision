
import { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { InputPriceRange } from '@/components/ui/input-price-range';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { ArrowDown, ArrowUp, Filter, ShoppingCart, Youtube } from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  reviewLink: string;
  buyLink?: string;
}

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products: initialProducts }: ProductListProps) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortBy, setSortBy] = useState<string>('default');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  
  // Calculate min and max prices from all products
  const minPrice = Math.min(...products.map(product => product.price));
  const maxPrice = Math.max(...products.map(product => product.price));
  
  useEffect(() => {
    // Initialize price range based on actual product prices
    setPriceRange([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  // Apply filters and sorting
  useEffect(() => {
    let result = [...products];
    
    // Price filter
    result = result.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Sorting
    if (sortBy === 'price-asc') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name-asc') {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-desc') {
      result = [...result].sort((a, b) => b.name.localeCompare(a.name));
    }
    
    setFilteredProducts(result);
  }, [products, priceRange, sortBy]);

  return (
    <div className="w-full">
      {/* Filters and Sorting */}
      <div className="flex flex-col md:flex-row justify-between gap-4 p-4 bg-white rounded-lg shadow mb-6">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-scout-purple" />
          <h3 className="font-medium">Filters</h3>
        </div>
        
        <div className="flex-1 md:max-w-xs">
          <h4 className="text-sm mb-1">Price Range</h4>
          <InputPriceRange
            min={minPrice}
            max={maxPrice}
            value={priceRange}
            onValueChange={setPriceRange}
            formatValue={(val) => `$${val}`}
          />
        </div>
        
        <div className="flex flex-col justify-center">
          <h4 className="text-sm mb-1">Sort By</h4>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="name-asc">Name: A to Z</SelectItem>
              <SelectItem value="name-desc">Name: Z to A</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="product-card overflow-hidden flex flex-col">
            <div className="relative pt-[100%]">
              <img 
                src={product.image} 
                alt={product.name} 
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://placehold.co/400x400?text=Product+Image";
                }}
              />
            </div>
            
            <CardContent className="flex-1 flex flex-col p-4">
              <h3 className="font-bold text-lg mb-1 line-clamp-2">{product.name}</h3>
              <div className="flex items-center justify-between mt-2">
                <Badge className="bg-scout-purple hover:bg-scout-dark-purple">
                  ${product.price.toFixed(2)}
                </Badge>
              </div>
            </CardContent>
            
            <CardFooter className="flex justify-between gap-2 p-4 pt-0">
              <Button 
                variant="default" 
                size="sm" 
                className="flex-1 bg-scout-purple hover:bg-scout-dark-purple"
                onClick={() => window.open(product.buyLink || "https://amazon.com", "_blank")}
              >
                <ShoppingCart className="mr-1 h-4 w-4" />
                Buy Now
              </Button>
              
              {product.reviewLink && (
                <Button 
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(product.reviewLink, "_blank")}
                  className="border-scout-purple text-scout-purple hover:bg-scout-light-purple"
                >
                  <Youtube className="h-4 w-4" />
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-lg">
          <h3 className="text-xl font-medium mb-2">No products found</h3>
          <p className="text-gray-500">Try adjusting your filters</p>
        </div>
      )}
    </div>
  );
}
