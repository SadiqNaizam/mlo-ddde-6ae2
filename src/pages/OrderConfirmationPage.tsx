import React from 'react';
import { Link } from 'react-router-dom';

// Import Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Import Shadcn/UI Components
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

// Import Icons from lucide-react
import { CheckCircle2, Package, Timer, ArrowLeft } from 'lucide-react';

const OrderConfirmationPage: React.FC = () => {
    console.log('OrderConfirmationPage loaded');

    // Placeholder data for the order summary
    const orderDetails = {
        id: 'ORD-12345XYZ',
        items: [
            { name: 'Quantum Quinoa Salad', quantity: 1, price: 18.00 },
            { name: 'Fusion Fizz Drink', quantity: 2, price: 5.50 },
        ],
        subtotal: 29.00,
        tax: 2.32,
        total: 31.32,
    };

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
            <Header />

            <main className="flex-1 flex items-center justify-center py-12 md:py-24">
                <div className="container max-w-2xl px-4">
                    <Card className="border-border bg-card shadow-xl animate-in fade-in-50 zoom-in-95 duration-500">
                        <CardHeader className="text-center items-center p-6">
                            <CheckCircle2 className="h-16 w-16 text-primary mb-4" />
                            <CardTitle className="text-3xl font-heading">Thank You for Your Order!</CardTitle>
                            <CardDescription className="text-muted-foreground mt-2">
                                Your order has been placed successfully. A confirmation receipt has been sent to your email.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6 p-6">
                            <Separator />
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold font-heading flex items-center">
                                    <Package className="mr-2 h-5 w-5 text-primary" />
                                    Order Summary ({orderDetails.id})
                                </h3>
                                <div className="space-y-2 text-sm">
                                    {orderDetails.items.map((item) => (
                                        <div key={item.name} className="flex justify-between">
                                            <span className="text-muted-foreground">{item.name} x {item.quantity}</span>
                                            <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                                        </div>
                                    ))}
                                </div>
                                <Separator />
                                <div className="space-y-2 text-sm font-medium">
                                     <div className="flex justify-between">
                                        <span className="text-muted-foreground">Subtotal</span>
                                        <span>${orderDetails.subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Tax (8%)</span>
                                        <span>${orderDetails.tax.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-base font-bold text-foreground">
                                        <span>Total</span>
                                        <span className="text-primary">${orderDetails.total.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                             <Alert className="bg-accent border-primary/20">
                                <Timer className="h-4 w-4 text-primary" />
                                <AlertTitle className="font-semibold text-primary">Estimated Preparation Time</AlertTitle>
                                <AlertDescription className="text-foreground/80">
                                    Your order will be ready in approximately 20-30 minutes.
                                </AlertDescription>
                            </Alert>
                        </CardContent>
                        <CardFooter className="flex justify-center p-6">
                             <Button asChild size="lg" className="mt-4 font-bold group">
                                <Link to="/menupage">
                                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                                    Continue Browsing
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default OrderConfirmationPage;