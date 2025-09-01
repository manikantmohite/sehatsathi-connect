import { motion } from "framer-motion";
import { AnimatedButton } from "@/components/ui/animated-button";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { Menu, X, Heart, MessageSquare, BarChart3, User } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Chat", href: "/chat", icon: MessageSquare },
    { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
    { name: "About", href: "/about", icon: Heart },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <GlassmorphismCard className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center animate-glow">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">SehatSathi</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-2 text-white/80 hover:text-white transition-smooth"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </motion.a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <AnimatedButton 
              variant="glass" 
              size="sm"
              onClick={() => window.location.hash = "auth"}
            >
              <User className="mr-2 h-4 w-4" />
              Sign In
            </AnimatedButton>
            <AnimatedButton 
              variant="hero" 
              size="sm"
              onClick={() => window.location.hash = "chat"}
            >
              Get Started
            </AnimatedButton>
          </div>

          {/* Mobile Menu Button */}
          <AnimatedButton
            variant="glass"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </AnimatedButton>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-6 pt-6 border-t border-white/20"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.name.toLowerCase()}`}
                  className="flex items-center space-x-2 text-white/80 hover:text-white transition-smooth p-2"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <AnimatedButton 
                  variant="glass" 
                  size="sm" 
                  className="w-full"
                  onClick={() => {
                    window.location.hash = "auth";
                    setIsOpen(false);
                  }}
                >
                  <User className="mr-2 h-4 w-4" />
                  Sign In
                </AnimatedButton>
                <AnimatedButton 
                  variant="hero" 
                  size="sm" 
                  className="w-full"
                  onClick={() => {
                    window.location.hash = "chat";
                    setIsOpen(false);
                  }}
                >
                  Get Started
                </AnimatedButton>
              </div>
            </div>
          </motion.div>
        )}
      </GlassmorphismCard>
    </nav>
  );
};

export default Navigation;