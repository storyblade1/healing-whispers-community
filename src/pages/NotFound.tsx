
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-serenity-50 px-4">
      <div className="glass-panel text-center py-16 px-8 rounded-2xl max-w-lg w-full animate-fade-in">
        <h1 className="text-7xl font-bold text-serenity-500 mb-4">404</h1>
        <p className="text-2xl font-medium text-foreground mb-4">Page Not Found</p>
        <p className="text-foreground/70 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button 
          className="primary-button bg-serenity-600 hover:bg-serenity-700"
          onClick={() => window.location.href = '/'}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
