import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Minimize2, Maximize2 } from 'lucide-react';
import Button from '../ui/Button';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm ResearchNexus AI assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    if (isMinimized) setIsMinimized(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: message,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setMessage('');
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      const botResponses = [
        "I'd be happy to help you find research on that topic. Can you provide more specific details about what you're looking for?",
        "Great question! The premium insights section has several papers related to that. Would you like me to suggest some specific ones?",
        "You can upload your research by clicking the 'Upload Research' button in the navbar. Would you like me to walk you through the process?",
        "Based on your interests, I'd recommend checking out our latest papers in women's health research. They cover several breakthrough findings.",
        "If you're looking to monetize your research, our platform offers various options. Would you like to learn more about our pricing models?",
      ];
      
      const botMessage: Message = {
        id: Date.now().toString(),
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Chatbot toggle button */}
      <button
        onClick={toggleChatbot}
        className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? 'bg-error-500 rotate-90' : 'bg-accent-500 animate-glow-pulse'
        }`}
        aria-label="Open AI Assistant"
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <MessageSquare size={24} className="text-white" />
        )}
      </button>
      
      {/* Chatbot panel */}
      {isOpen && (
        <div
          className={`absolute bottom-16 right-0 w-80 sm:w-96 bg-background-light rounded-lg shadow-xl border border-gray-700 flex flex-col overflow-hidden transition-all duration-300 ${
            isMinimized ? 'h-14' : 'h-96'
          }`}
        >
          {/* Header */}
          <div className="bg-background-lighter p-3 flex items-center justify-between border-b border-gray-700">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-accent-500 flex items-center justify-center mr-2">
                <MessageSquare size={16} className="text-white" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-white">AI Assistant</h3>
                <p className="text-xs text-gray-400">
                  {isMinimized ? 'Click to expand' : 'Ask me anything'}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleMinimize}
                className="text-gray-400 hover:text-white"
              >
                {isMinimized ? (
                  <Maximize2 size={16} />
                ) : (
                  <Minimize2 size={16} />
                )}
              </button>
            </div>
          </div>
          
          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="flex-grow p-4 overflow-y-auto">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`mb-4 flex ${
                      msg.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`rounded-lg p-3 max-w-[80%] ${
                        msg.sender === 'user'
                          ? 'bg-accent-500/20 text-white'
                          : 'bg-background-lighter text-gray-200'
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <span className="text-xs text-gray-400 mt-1 block text-right">
                        {formatTime(msg.timestamp)}
                      </span>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              
              {/* Input */}
              <form
                onSubmit={handleSubmit}
                className="p-3 border-t border-gray-700 flex items-center"
              >
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow bg-background-lighter text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-accent-500"
                />
                <Button
                  type="submit"
                  variant="accent"
                  size="sm"
                  className="ml-2"
                  disabled={!message.trim()}
                >
                  <Send size={16} />
                </Button>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default AIChatbot;