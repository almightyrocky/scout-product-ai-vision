
import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
}

const SearchBar = ({ onSearch, isLoading }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-2xl gap-2 relative">
      <Input
        className="flex-1 px-4 py-6 bg-white border-2 focus-visible:ring-scout-purple"
        placeholder="What product are you looking for?"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        disabled={isLoading}
      />
      <Button 
        type="submit" 
        disabled={isLoading} 
        className="bg-scout-purple hover:bg-scout-dark-purple text-white px-6 py-6"
      >
        {isLoading ? 'Searching...' : (
          <>
            <Search className="mr-2 h-5 w-5" />
            Search
          </>
        )}
      </Button>
    </form>
  );
};

export default SearchBar;
