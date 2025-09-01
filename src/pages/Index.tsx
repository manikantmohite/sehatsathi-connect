import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ChatInterface from "@/components/ChatInterface";
import Dashboard from "@/components/Dashboard";
import AuthForm from "@/components/AuthForm";
import { useState, useEffect } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Simple routing based on hash
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        setActiveSection(hash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Check initial hash

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case "chat":
        return <ChatInterface />;
      case "dashboard":
        return <Dashboard />;
      case "auth":
        return <AuthForm />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      {renderSection()}
    </div>
  );
};

export default Index;
