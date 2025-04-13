
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LiveTicker } from './LiveTicker';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-neopress-paper border-b border-neopress-gray-300 shadow-sm">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <h1 className="text-3xl md:text-4xl font-serif font-bold italic tracking-tighter">
              <span className="text-neopress-red">Neo</span>Press
            </h1>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <DesktopNav />
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-neopress-ink">
              <Search className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden text-neopress-ink"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-neopress-paper border-b border-neopress-gray-300">
          <div className="container py-4">
            <MobileNav closeMenu={() => setIsMenuOpen(false)} />
          </div>
        </div>
      )}
      
      <LiveTicker />
    </header>
  );
};

const DesktopNav = () => {
  const mainLinks = [
    { name: 'Home', path: '/' },
    { name: 'World', path: '/world' },
    { name: 'Politics', path: '/politics' },
    { name: 'Culture', path: '/culture' },
    { name: 'Opinion', path: '/opinion' }
  ];
  
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {mainLinks.map((link) => (
          <NavigationMenuItem key={link.name}>
            <Link 
              to={link.path}
              className="font-serif text-neopress-gray-800 hover:text-neopress-red transition-colors px-3 py-2"
            >
              {link.name}
            </Link>
          </NavigationMenuItem>
        ))}
        
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-serif bg-transparent text-neopress-gray-800 hover:text-neopress-red hover:bg-transparent">More</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {[
                { name: 'Technology', path: '/technology', description: 'Latest tech news and innovations' },
                { name: 'Science', path: '/science', description: 'Discoveries and research breakthroughs' },
                { name: 'Arts', path: '/arts', description: 'Visual arts, theater, and creative expression' },
                { name: 'Business', path: '/business', description: 'Economy, markets, and entrepreneurship' },
                { name: 'Health', path: '/health', description: 'Medical advances and wellness insights' },
                { name: 'Sports', path: '/sports', description: 'Athletics, competitions, and team news' },
                { name: 'Environment', path: '/environment', description: 'Climate, conservation, and sustainability' },
                { name: 'Archive', path: '/archive', description: 'Browse our historical collection' }
              ].map((item) => (
                <ListItem
                  key={item.name}
                  title={item.name}
                  href={item.path}
                  className="hover:bg-neopress-paperDark"
                >
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const MobileNav = ({ closeMenu }: { closeMenu: () => void }) => {
  const allLinks = [
    { name: 'Home', path: '/' },
    { name: 'World', path: '/world' },
    { name: 'Politics', path: '/politics' },
    { name: 'Culture', path: '/culture' },
    { name: 'Opinion', path: '/opinion' },
    { name: 'Technology', path: '/technology' },
    { name: 'Science', path: '/science' },
    { name: 'Arts', path: '/arts' },
    { name: 'Business', path: '/business' },
    { name: 'Health', path: '/health' },
    { name: 'Sports', path: '/sports' },
    { name: 'Environment', path: '/environment' },
    { name: 'Archive', path: '/archive' }
  ];
  
  return (
    <nav>
      <ul className="flex flex-col space-y-3">
        {allLinks.map((link) => (
          <li key={link.name}>
            <Link 
              to={link.path}
              className="font-serif text-neopress-gray-800 hover:text-neopress-red transition-colors block py-2"
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-serif font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;
