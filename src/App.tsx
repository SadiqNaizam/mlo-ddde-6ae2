import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Cartpage from "./pages/Cartpage";
import Checkoutpage from "./pages/Checkoutpage";
import Homepage from "./pages/Homepage";
import Menupage from "./pages/Menupage";
import Orderconfirmationpage from "./pages/Orderconfirmationpage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();


const App = () => (
<QueryClientProvider client={queryClient}>
    <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
        <Routes>


          <Route path="/" element={<Homepage />} />
          <Route path="/cartpage" element={<Cartpage />} />
          <Route path="/checkoutpage" element={<Checkoutpage />} />
          <Route path="/menupage" element={<Menupage />} />
          <Route path="/orderconfirmationpage" element={<Orderconfirmationpage />} />
          {/* catch-all */}
          <Route path="*" element={<NotFound />} />


        </Routes>
    </BrowserRouter>
    </TooltipProvider>
</QueryClientProvider>
);

export default App;
