import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatedButton } from "@/components/ui/animated-button";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Heart, 
  Mail, 
  Lock, 
  User, 
  Phone, 
  MapPin, 
  Eye, 
  EyeOff 
} from "lucide-react";

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    password: "",
    confirmPassword: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - will integrate with Supabase later
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center animate-glow">
            <Heart className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold gradient-text mb-2">
            {isSignUp ? "Join SehatSathi" : "Welcome Back"}
          </h1>
          <p className="text-white/80">
            {isSignUp 
              ? "Create your account to access AI healthcare assistance" 
              : "Sign in to your healthcare companion"
            }
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <GlassmorphismCard>
            <form onSubmit={handleSubmit} className="space-y-6">
              {isSignUp && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-primary transition-smooth"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white flex items-center">
                      <Phone className="mr-2 h-4 w-4" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-primary transition-smooth"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-white flex items-center">
                      <MapPin className="mr-2 h-4 w-4" />
                      Location (District/State)
                    </Label>
                    <Input
                      id="location"
                      name="location"
                      type="text"
                      placeholder="e.g., Mumbai, Maharashtra"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-primary transition-smooth"
                      required
                    />
                  </div>
                </motion.div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-primary transition-smooth"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-white flex items-center">
                  <Lock className="mr-2 h-4 w-4" />
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-primary transition-smooth pr-12"
                    required
                  />
                  <AnimatedButton
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </AnimatedButton>
                </div>
              </div>

              {isSignUp && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="space-y-2"
                >
                  <Label htmlFor="confirmPassword" className="text-white flex items-center">
                    <Lock className="mr-2 h-4 w-4" />
                    Confirm Password
                  </Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-primary transition-smooth"
                    required
                  />
                </motion.div>
              )}

              <AnimatedButton
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
              >
                {isSignUp ? "Create Account" : "Sign In"}
              </AnimatedButton>
            </form>

            <div className="mt-6 text-center">
              <p className="text-white/70 text-sm">
                {isSignUp ? "Already have an account?" : "Don't have an account?"}
                <button
                  type="button"
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="ml-2 text-primary hover:text-primary-glow transition-smooth font-medium"
                >
                  {isSignUp ? "Sign In" : "Sign Up"}
                </button>
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-white/20 text-center">
              <p className="text-white/60 text-xs">
                By continuing, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </GlassmorphismCard>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthForm;