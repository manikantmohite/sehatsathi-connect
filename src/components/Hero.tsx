import { motion } from "framer-motion";
import { AnimatedButton } from "@/components/ui/animated-button";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { Heart, MessageCircle, Shield, Users } from "lucide-react";
import heroImage from "@/assets/hero-healthcare.jpg";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-32 right-20 w-16 h-16 bg-secondary/10 rounded-full animate-float"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute top-1/2 right-10 w-12 h-12 bg-accent/20 rounded-full animate-float"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-bold leading-tight"
            >
              <span className="gradient-text">SehatSathi</span>
              <br />
              <span className="text-white text-3xl lg:text-4xl">
                AI Healthcare for Everyone
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white/80 leading-relaxed max-w-xl"
            >
              Empowering rural and semi-urban communities with multilingual AI-driven 
              healthcare education, symptom checking, and vaccination reminders.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <AnimatedButton 
                variant="hero" 
                size="xl" 
                className="animate-pulse-glow"
                onClick={() => window.location.hash = "chat"}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Chatting
              </AnimatedButton>
              <AnimatedButton 
                variant="glass" 
                size="xl"
                onClick={() => window.location.hash = "about"}
              >
                <Heart className="mr-2 h-5 w-5" />
                Learn More
              </AnimatedButton>
            </motion.div>
          </motion.div>

          {/* Right Column - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <GlassmorphismCard className="text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center animate-glow">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Multilingual Chat</h3>
                <p className="text-white/70">AI-powered healthcare guidance in your local language</p>
              </GlassmorphismCard>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <GlassmorphismCard className="text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 mx-auto bg-gradient-secondary rounded-2xl flex items-center justify-center animate-glow">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Symptom Checker</h3>
                <p className="text-white/70">Smart health assessment and recommendations</p>
              </GlassmorphismCard>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <GlassmorphismCard className="text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center animate-glow">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Vaccination Alerts</h3>
                <p className="text-white/70">Never miss important health checkups</p>
              </GlassmorphismCard>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <GlassmorphismCard className="text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 mx-auto bg-gradient-secondary rounded-2xl flex items-center justify-center animate-glow">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Community Health</h3>
                <p className="text-white/70">Real-time outbreak alerts and prevention</p>
              </GlassmorphismCard>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;