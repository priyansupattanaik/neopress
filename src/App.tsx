
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CategoryPage from "./components/CategoryPage";
import ArticleDetail from "./components/ArticleDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          
          {/* Category routes */}
          <Route path="/world" element={<CategoryPage />} />
          <Route path="/politics" element={<CategoryPage />} />
          <Route path="/culture" element={<CategoryPage />} />
          <Route path="/opinion" element={<CategoryPage />} />
          <Route path="/archive" element={<CategoryPage />} />
          <Route path="/technology" element={<CategoryPage />} />
          <Route path="/science" element={<CategoryPage />} />
          <Route path="/arts" element={<CategoryPage />} />
          <Route path="/business" element={<CategoryPage />} />
          <Route path="/health" element={<CategoryPage />} />
          <Route path="/sports" element={<CategoryPage />} />
          <Route path="/environment" element={<CategoryPage />} />
          <Route path="/media" element={<CategoryPage />} />
          <Route path="/education" element={<CategoryPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
