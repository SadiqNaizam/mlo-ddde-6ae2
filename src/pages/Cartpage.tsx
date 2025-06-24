import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Trash2, Plus, Minus, ShoppingCart } from 'lucide-react';

// Define the structure of a cart item
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

// Placeholder data for cart items
const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: "Spicy Tuna Roll",
    price: 18.50,
    quantity: 1,
    imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Gourmet Angus Burger",
    price: 24.00,
    quantity: 2,
    imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1998&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Truffle Pasta",
    price: 28.75,
    quantity: 1,
    imageUrl: "https://images.unsplash.com/photo-1621996346565-e326e20f0e28?q=80&w=2080&auto=format&fit=crop"
  },
];

const CartPage = () => {
  console.log('CartPage loaded');
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  useEffect(() => {
    // In a real app, you would fetch cart data here.
    // For now, we just use the initial placeholder data.
  }, []);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return; // Prevent quantity from going below 1
    setCartItems(currentItems =>
      currentItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(currentItems => currentItems.filter(item => item.id !== id));
  };

  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cartItems]);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-16">
        {cartItems.length > 0 ? (
          <Card className="bg-secondary border-border shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl font-heading text-primary">Your Cart</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-b-border/50">
                      <TableHead className="w-[100px] md:w-[150px]">Product</TableHead>
                      <TableHead className="hidden md:table-cell"></TableHead>
                      <TableHead className="text-center">Quantity</TableHead>
                      <TableHead className="text-right">Unit Price</TableHead>
                      <TableHead className="text-right">Total</TableHead>
                      <TableHead><span className="sr-only">Remove</span></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cartItems.map(item => (
                      <TableRow key={item.id} className="border-b-border/20">
                        <TableCell>
                          <img src={item.imageUrl} alt={item.name} className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-md" />
                        </TableCell>
                        <TableCell className="font-medium text-foreground">{item.name}</TableCell>
                        <TableCell>
                          <div className="flex items-center justify-center gap-2">
                            <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>
                              <Minus className="h-4 w-4" />
                            </Button>
                            <Input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10) || 1)}
                              className="w-16 h-8 text-center bg-background border-border"
                            />
                            <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell className="text-right text-muted-foreground">${item.price.toFixed(2)}</TableCell>
                        <TableCell className="text-right font-semibold">${(item.price * item.quantity).toFixed(2)}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon" onClick={() => handleRemoveItem(item.id)}>
                            <Trash2 className="h-5 w-5 text-muted-foreground hover:text-destructive transition-colors" />
                            <span className="sr-only">Remove item</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-end gap-4 pt-6">
              <div className="text-xl font-semibold flex justify-between w-full max-w-sm">
                <span className="text-muted-foreground">Subtotal:</span>
                <span className="font-heading">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-sm text-muted-foreground">Shipping & taxes calculated at checkout.</p>
              <Button asChild size="lg" className="w-full max-w-sm text-lg font-bold">
                <Link to="/checkoutpage">Proceed to Checkout</Link>
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <div className="text-center py-20">
            <ShoppingCart className="mx-auto h-24 w-24 text-muted-foreground" />
            <h2 className="mt-6 text-3xl font-heading font-bold">Your Cart is Empty</h2>
            <p className="mt-2 text-lg text-muted-foreground">Looks like you have not added anything to your cart.</p>
            <Button asChild size="lg" className="mt-8">
              <Link to="/menupage">Explore Menu</Link>
            </Button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;