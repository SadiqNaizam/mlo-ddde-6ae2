import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart, ChefHat } from 'lucide-react';

const Header: React.FC = () => {
  console.log('Header loaded');
  const cartItemCount = 3; // Placeholder for cart item count

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors hover:text-primary ${
      isActive ? 'text-primary' : 'text-foreground/80'
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <ChefHat className="h-6 w-6 text-primary" />
          <span className="font-heading text-xl font-bold">Nourish</span>
        </Link>
        
        <nav className="flex items-center gap-6">
          <NavLink to="/menupage" className={navLinkClasses}>
            Menu
          </NavLink>
        </nav>

        <div className="flex items-center">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/cartpage" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {cartItemCount}
                </span>
              )}
              <span className="sr-only">Open Cart</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;