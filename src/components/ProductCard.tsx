
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

export interface Product {
  name: string;
  description: string;
  rating: number;
  price: string;
  features: string[];
  pros: string[];
  cons: string[];
}

interface ProductCardProps {
  product: Product;
  rank: number;
}

const ProductCard = ({ product, rank }: ProductCardProps) => {
  return (
    <Card className="product-card overflow-hidden">
      <div className="relative">
        <div className="absolute -left-6 -top-1 bg-scout-purple text-white py-6 px-8 rotate-[-45deg] text-sm">
          #{rank}
        </div>
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold">{product.name}</CardTitle>
          <div className="flex items-center gap-1 bg-scout-light-purple rounded-full px-3 py-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">{product.rating}</span>
          </div>
        </div>
        <CardDescription className="text-gray-500">{product.price}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>{product.description}</p>

        <div>
          <h4 className="font-medium mb-2">Key Features</h4>
          <div className="flex flex-wrap gap-2">
            {product.features.map((feature, index) => (
              <Badge key={index} variant="outline" className="bg-scout-light-purple border-0">
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2 text-green-600">Pros</h4>
            <ul className="list-disc pl-5 space-y-1">
              {product.pros.map((pro, index) => (
                <li key={index}>{pro}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2 text-red-500">Cons</h4>
            <ul className="list-disc pl-5 space-y-1">
              {product.cons.map((con, index) => (
                <li key={index}>{con}</li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Badge className="bg-gradient-purple">Product Scout AI</Badge>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
