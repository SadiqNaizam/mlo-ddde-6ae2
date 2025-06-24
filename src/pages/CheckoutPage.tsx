import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { toast } from 'sonner';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CreditCard, User, Truck } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  address: z.string().min(5, { message: 'Please enter a valid address.' }),
  city: z.string().min(2, { message: 'Please enter a valid city.' }),
  zip: z.string().regex(/^\d{5}$/, { message: 'Please enter a valid 5-digit zip code.' }),
  cardName: z.string().min(2, { message: 'Name on card is required.' }),
  cardNumber: z.string().regex(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/, {
    message: 'Please enter a valid credit card number.'
  }),
  cardExpiry: z.string().regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, {
    message: 'Please use MM/YY format.'
  }),
  cardCVC: z.string().regex(/^[0-9]{3,4}$/, { message: 'Please enter a valid CVC.' }),
});

const CheckoutPage = () => {
  useEffect(() => {
    console.log('CheckoutPage loaded');
  }, []);

  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      address: '',
      city: '',
      zip: '',
      cardName: '',
      cardNumber: '',
      cardExpiry: '',
      cardCVC: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('Form Submitted:', values);
    toast.success('Processing your order...', {
      description: 'You will be redirected shortly.',
    });
    // Simulate API call
    setTimeout(() => {
      navigate('/orderconfirmationpage');
    }, 2000);
  }

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground">
      <Header />
      <main className="container mx-auto flex-grow px-4 py-12 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h1 className="font-heading text-4xl font-extrabold tracking-tight lg:text-5xl">Secure Checkout</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Just a few more details and your delicious meal will be on its way.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-2">
              {/* Shipping & Contact Details */}
              <div className="space-y-6">
                <h2 className="flex items-center font-heading text-2xl font-semibold">
                  <Truck className="mr-3 h-6 w-6 text-primary" />
                  Shipping & Contact
                </h2>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Street Address</FormLabel>
                      <FormControl>
                        <Input placeholder="123 Culinary Lane" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex gap-4">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input placeholder="New York" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="zip"
                    render={({ field }) => (
                      <FormItem className="w-1/3">
                        <FormLabel>ZIP Code</FormLabel>
                        <FormControl>
                          <Input placeholder="10001" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Payment Details & Order Summary */}
              <div className="space-y-6">
                <h2 className="flex items-center font-heading text-2xl font-semibold">
                  <CreditCard className="mr-3 h-6 w-6 text-primary" />
                  Payment Information
                </h2>
                <FormField
                  control={form.control}
                  name="cardName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name on Card</FormLabel>
                      <FormControl>
                        <Input placeholder="John M Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="cardNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Card Number</FormLabel>
                      <FormControl>
                        <Input placeholder="•••• •••• •••• ••••" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex gap-4">
                  <FormField
                    control={form.control}
                    name="cardExpiry"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Expiry Date</FormLabel>
                        <FormControl>
                          <Input placeholder="MM/YY" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cardCVC"
                    render={({ field }) => (
                      <FormItem className="w-1/3">
                        <FormLabel>CVC</FormLabel>
                        <FormControl>
                          <Input placeholder="123" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <Separator className="my-4 bg-border" />

                <Card className="bg-secondary border-border/50">
                  <CardHeader>
                    <CardTitle className="font-heading text-xl">Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>$95.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>$5.00</span>
                    </div>
                    <Separator className="bg-border/50" />
                    <div className="flex justify-between font-bold text-lg">
                      <span className="text-foreground">Total</span>
                      <span className="text-primary">$100.00</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="lg:col-span-2 mt-6 flex flex-col items-center gap-4">
                 <Button type="submit" size="lg" className="w-full max-w-md text-base font-bold">
                    Place Order
                  </Button>
                  <Button variant="link" asChild>
                    <Link to="/cartpage" className="text-muted-foreground">Back to Cart</Link>
                  </Button>
              </div>

            </form>
          </Form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;