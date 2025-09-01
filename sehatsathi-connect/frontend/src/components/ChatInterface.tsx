import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatedButton } from "@/components/ui/animated-button";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { Input } from "@/components/ui/input";
import { Send, Mic, MicOff, Bot, User, Heart } from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Namaste! मैं SehatSathi हूँ। आपकी स्वास्थ्य संबंधी कोई भी समस्या है तो बताइए। How can I help you with your health today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isListening, setIsListening] = useState(false);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputMessage("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "Thank you for your question! I understand you're asking about health concerns. Let me help you with that. Can you provide more specific details about your symptoms?",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  const toggleListening = () => {
    setIsListening(!isListening);
    // Here you would implement actual voice recognition
  };

  return (
    <div className="min-h-screen pt-20 pb-6 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold gradient-text mb-4">
            AI Health Assistant
          </h1>
          <p className="text-white/80 text-lg">
            Available in English, Hindi, and regional languages
          </p>
        </motion.div>

        <GlassmorphismCard className="h-96 flex flex-col">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, x: message.sender === "user" ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl flex items-start space-x-3 ${
                    message.sender === "user"
                      ? "bg-primary text-white"
                      : "bg-white/10 text-white border border-white/20"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.sender === "user" 
                      ? "bg-white/20" 
                      : "bg-gradient-primary"
                  }`}>
                    {message.sender === "user" ? (
                      <User className="h-4 w-4" />
                    ) : (
                      <Bot className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm leading-relaxed">{message.content}</p>
                    <span className="text-xs opacity-70 mt-1 block">
                      {message.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-white/20">
            <div className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your health question in English or Hindi..."
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 pr-12"
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <AnimatedButton
                  variant="ghost"
                  size="icon"
                  className={`absolute right-2 top-1/2 transform -translate-y-1/2 ${
                    isListening ? "text-red-400 animate-pulse" : "text-white/60"
                  }`}
                  onClick={toggleListening}
                >
                  {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                </AnimatedButton>
              </div>
              <AnimatedButton
                variant="hero"
                size="icon"
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
              >
                <Send className="h-4 w-4" />
              </AnimatedButton>
            </div>
          </div>
        </GlassmorphismCard>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            "Fever symptoms",
            "Vaccination schedule",
            "Emergency care",
            "Preventive tips",
          ].map((action, index) => (
            <AnimatedButton
              key={action}
              variant="glass"
              className="justify-center"
              onClick={() => setInputMessage(action)}
            >
              <Heart className="mr-2 h-4 w-4" />
              {action}
            </AnimatedButton>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ChatInterface;