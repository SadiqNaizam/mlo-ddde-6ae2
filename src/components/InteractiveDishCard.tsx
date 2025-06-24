import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

interface InteractiveDishCardProps {
  id: string | number;
  name: string;
  price: number;
  imageUrl: string;
}

const InteractiveDishCard: React.FC<InteractiveDishCardProps> = ({ id, name, price, imageUrl }) => {
  console.log('InteractiveDishCard loaded for:', name);

  const handleAddToCart = () => {
    toast.success(`${name} added to cart!`, {
        description: `Price: $${price.toFixed(2)}`,
        action: {
            label: "Undo",
            onClick: () => console.log("Undo add to cart for", id),
        },
    });
    console.log(`Added dish ${id} to cart.`);
  };

  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg bg-secondary border border-border shadow-lg transition-all duration-300 ease-in-out hover:shadow-primary/20 hover:-translate-y-2 hover:shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-50 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
      
      <div className="overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>

      <div className="absolute bottom-0 left-0 p-4 w-full z-20">
        <h3 className="text-xl font-heading font-bold text-foreground truncate">{name}</h3>
        <p className="text-lg font-sans font-semibold text-primary">${price.toFixed(2)}</p>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Button 
          variant="primary" 
          size="lg" 
          onClick={handleAddToCart}
          className="shadow-lg transform transition-transform duration-300 group-hover:scale-100 scale-90"
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          Add to Cart
        </Button>
      </div>
    </motion.div>
  );
};

export default InteractiveDishCard;