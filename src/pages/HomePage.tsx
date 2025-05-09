import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Database, LightbulbIcon, Rocket, LineChart, Trophy, Users, Heart } from 'lucide-react';
import Button from '../components/ui/Button';
import ScrollReveal from '../components/animations/ScrollReveal';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-background to-background-light opacity-90" />
          <div 
            className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary-500/10 rounded-full blur-3xl animate-float"
          />
          <div 
            className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-secondary-500/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: '2s' }}
          />
          <div 
            className="absolute top-1/2 right-1/4 w-1/4 h-1/4 bg-accent-500/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: '4s' }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mx-auto max-w-4xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6">
                <span className="bg-iridescent text-transparent bg-clip-text">
                  Revolutionizing Research
                </span>{' '}
                <br />for a Data-Driven Future
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Connect, collaborate, and monetize your research findings on our cutting-edge platform, 
                giving underserved areas like women's health the spotlight they deserve.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <Link to="/explore">
                  <Button variant="primary" size="lg" rightIcon={<ArrowRight size={18} />}>
                    Explore Research
                  </Button>
                </Link>
                <Link to="/upload">
                  <Button variant="outline" size="lg">
                    Upload Your Research
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mt-12">
              <div className="p-4">
                <h3 className="text-3xl font-bold text-white mb-1">1000+</h3>
                <p className="text-gray-400">Research Papers</p>
              </div>
              <div className="p-4">
                <h3 className="text-3xl font-bold text-white mb-1">500+</h3>
                <p className="text-gray-400">Researchers</p>
              </div>
              <div className="p-4">
                <h3 className="text-3xl font-bold text-white mb-1">50+</h3>
                <p className="text-gray-400">Organizations</p>
              </div>
              <div className="p-4">
                <h3 className="text-3xl font-bold text-white mb-1">$2M+</h3>
                <p className="text-gray-400">Research Funded</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
                <span className="bg-iridescent text-transparent bg-clip-text">
                  Transforming Research Sharing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform offers a suite of innovative features designed to empower researchers and organizations alike.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Database />,
                title: "Monetize Research Data",
                description: "Turn your valuable research into income by monetizing your datasets and findings through our premium access model.",
                color: "primary",
                delay: 0
              },
              {
                icon: <LightbulbIcon />,
                title: "AI-Enhanced Insights",
                description: "Our AI assistant helps identify trends, summarize findings, and uncover connections between different research papers.",
                color: "secondary",
                delay: 0.1
              },
              {
                icon: <Users />,
                title: "Collaborative Community",
                description: "Connect with other researchers, form partnerships, and collaborate on groundbreaking studies in your field.",
                color: "accent",
                delay: 0.2
              },
              {
                icon: <LineChart />,
                title: "Advanced Analytics",
                description: "Track the performance and impact of your research with comprehensive metrics and visualizations.",
                color: "success",
                delay: 0.3
              },
              {
                icon: <Rocket />,
                title: "Research Amplification",
                description: "Increase the visibility and impact of your work with our platform's promotion and distribution features.",
                color: "warning",
                delay: 0.4
              },
              {
                icon: <Trophy />,
                title: "Premium Access",
                description: "Organizations can subscribe to premium insights, gaining exclusive access to the latest research and trends.",
                color: "error",
                delay: 0.5
              }
            ].map((feature, index) => (
              <ScrollReveal key={index} delay={feature.delay}>
                <div className={`bg-background-lighter p-6 rounded-xl border border-gray-800 hover:border-${feature.color}-500 transition-all duration-300`}>
                  <div className={`w-12 h-12 rounded-lg bg-${feature.color}-500/20 flex items-center justify-center mb-4`}>
                    <span className={`text-${feature.color}-400`}>{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Women's Health Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <ScrollReveal direction="left" className="md:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
                Empowering Research in{' '}
                <span className="bg-iridescent text-transparent bg-clip-text">
                  Women's Health
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                We're committed to advancing research in underserved areas, with a special focus on women's health research.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary-500/20 flex items-center justify-center mr-3 mt-0.5">
                    <Heart size={14} className="text-secondary-400" />
                  </div>
                  <p className="text-gray-300">
                    Closing the gender data gap in medical research and clinical trials
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary-500/20 flex items-center justify-center mr-3 mt-0.5">
                    <Heart size={14} className="text-secondary-400" />
                  </div>
                  <p className="text-gray-300">
                    Supporting studies on conditions that disproportionately affect women
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary-500/20 flex items-center justify-center mr-3 mt-0.5">
                    <Heart size={14} className="text-secondary-400" />
                  </div>
                  <p className="text-gray-300">
                    Providing funding and visibility for female researchers and their work
                  </p>
                </li>
              </ul>
              <Link to="/explore?field=womens-health">
                <Button variant="secondary" rightIcon={<ArrowRight size={18} />}>
                  Explore Women's Health Research
                </Button>
              </Link>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={0.2} className="md:w-1/2">
              <div className="relative rounded-lg overflow-hidden border border-gray-800">
                <img 
                  src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Medical researchers collaborating" 
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-background-light to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              Ready to Join the Research Revolution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Whether you're a researcher looking to share your findings or an organization seeking valuable insights, we have the tools you need.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup">
                <Button variant="primary" size="lg">
                  Create Account
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default HomePage;