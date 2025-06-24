import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import InteractiveDishCard from '@/components/InteractiveDishCard';
import AnimatedOnScrollWrapper from '@/components/AnimatedOnScrollWrapper';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from 'framer-motion';

const mains = [
  {
    id: 'main-1',
    name: 'Truffle Risotto',
    price: 28.50,
    imageUrl: 'https://images.unsplash.com/photo-1595015822986-a5b583427928?q=80&w=2787&auto=format&fit=crop',
  },
  {
    id: 'main-2',
    name: 'Seared Scallops',
    price: 32.00,
    imageUrl: 'https://images.unsplash.com/photo-1625938139580-45735f4a7428?q=80&w=2787&auto=format&fit=crop',
  },
  {
    id: 'main-3',
    name: 'Wagyu Steak Frites',
    price: 45.00,
    imageUrl: 'https://images.unsplash.com/photo-1551017011-2a8935c11e64?q=80&w=2864&auto=format&fit=crop',
  },
  {
    id: 'main-4',
    name: 'Lobster Thermidor',
    price: 55.75,
    imageUrl: 'https://images.unsplash.com/photo-1625631980753-c64995b11de5?q=80&w=2787&auto=format&fit=crop',
  },
];

const sides = [
  {
    id: 'side-1',
    name: 'Parmesan Truffle Fries',
    price: 9.00,
    imageUrl: 'https://images.unsplash.com/photo-1598679253443-4b52b27c3476?q=80&w=2787&auto=format&fit=crop',
  },
  {
    id: 'side-2',
    name: 'Charred Asparagus',
    price: 8.50,
    imageUrl: 'https://images.unsplash.com/photo-1559055891-4c6e43594142?q=80&w=2864&auto=format&fit=crop',
  },
  {
    id: 'side-3',
    name: 'Whipped Potatoes',
    price: 7.00,
    imageUrl: 'https://images.unsplash.com/photo-1619888208493-f09c2f6a6c4a?q=80&w=2787&auto=format&fit=crop',
  },
];

const drinks = [
  {
    id: 'drink-1',
    name: 'Elderflower Spritz',
    price: 12.00,
    imageUrl: 'https://images.unsplash.com/photo-1551024709-8f237c20454d?q=80&w=2787&auto=format&fit=crop',
  },
  {
    id: 'drink-2',
    name: 'Smoked Old Fashioned',
    price: 16.00,
    imageUrl: 'https://images.unsplash.com/photo-1527668893343-14c2957973c7?q=80&w=2787&auto=format&fit=crop',
  },
  {
    id: 'drink-3',
    name: 'Artisanal Berry Iced Tea',
    price: 7.50,
    imageUrl: 'https://images.unsplash.com/photo-1575795107937-1c618037380c?q=80&w=2787&auto=format&fit=crop',
  },
];

const Menupage = () => {
  console.log("MenuPage loaded");

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="container py-12 md:py-20"
        >
          <AnimatedOnScrollWrapper animationType="slideUp" delay={0.1}>
            <h1 className="text-4xl font-extrabold text-center font-heading tracking-tight sm:text-5xl md:text-6xl">
              Our Menu
            </h1>
            <p className="max-w-2xl mx-auto mt-4 text-center text-muted-foreground md:text-lg">
              Crafted with passion, served with style. Discover your next favorite dish.
            </p>
          </AnimatedOnScrollWrapper>

          <Tabs defaultValue="mains" className="w-full max-w-5xl mx-auto mt-12">
            <AnimatedOnScrollWrapper animationType="fadeIn" delay={0.3}>
                <TabsList className="grid w-full grid-cols-3 bg-secondary p-1 h-12">
                  <TabsTrigger value="mains" className="text-base h-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Mains</TabsTrigger>
                  <TabsTrigger value="sides" className="text-base h-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Sides</TabsTrigger>
                  <TabsTrigger value="drinks" className="text-base h-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Drinks</TabsTrigger>
                </TabsList>
            </AnimatedOnScrollWrapper>

            <TabsContent value="mains" className="mt-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {mains.map((item) => (
                      <InteractiveDishCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        imageUrl={item.imageUrl}
                      />
                    ))}
                </div>
            </TabsContent>
            <TabsContent value="sides" className="mt-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {sides.map((item) => (
                      <InteractiveDishCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        imageUrl={item.imageUrl}
                      />
                    ))}
                </div>
            </TabsContent>
            <TabsContent value="drinks" className="mt-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {drinks.map((item) => (
                      <InteractiveDishCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        imageUrl={item.imageUrl}
                      />
                    ))}
                </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Menupage;