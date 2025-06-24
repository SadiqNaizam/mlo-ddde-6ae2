import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ParallaxHeroSection from '@/components/ParallaxHeroSection';
import InteractiveDishCard from '@/components/InteractiveDishCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Placeholder data for the featured dishes section
const featuredDishes = [
  {
    id: 1,
    name: 'Seared Scallops with Saffron Risotto',
    price: 32.50,
    imageUrl: 'https://images.unsplash.com/photo-1621996346565-e326e7e2444e?q=80&w=2940&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Wagyu Beef Burger with Truffle Aioli',
    price: 28.00,
    imageUrl: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2940&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Spicy Tuna Crispy Rice',
    price: 24.75,
    imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2896&auto=format&fit=crop',
  },
];

const Homepage: React.FC = () => {
  console.log('Homepage loaded');

  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <ParallaxHeroSection />

        {/* Featured Dishes Section */}
        <section className="py-20 sm:py-24">
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
                Our Signature Dishes
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                A curated selection of our most popular creations, crafted with passion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredDishes.map((dish) => (
                <InteractiveDishCard
                  key={dish.id}
                  id={dish.id}
                  name={dish.name}
                  price={dish.price}
                  imageUrl={dish.imageUrl}
                />
              ))}
            </div>

            <div className="text-center mt-16">
              <Button asChild size="lg" className="text-base font-bold group">
                <Link to="/menupage">
                  View The Full Menu
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;