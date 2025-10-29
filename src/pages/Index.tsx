import { Activity, Brain, Clock, Lightbulb, MapPin, Shield, TrendingDown, Zap } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import StatCard from "@/components/StatCard";
import TeamMember from "@/components/TeamMember";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-traffic.jpg";

const Index = () => {
  const features = [
    {
      icon: Brain,
      title: "Real-Time Traffic Prediction",
      description: "AI algorithms analyze live traffic data to predict congestion patterns and optimize flow before bottlenecks occur."
    },
    {
      icon: Zap,
      title: "Smart Signal Control",
      description: "Dynamic traffic light timing adapts to real-time conditions, reducing wait times and improving intersection efficiency."
    },
    {
      icon: Shield,
      title: "Emergency Vehicle Priority",
      description: "Automatic detection and prioritization system clears paths for emergency vehicles, saving crucial time."
    },
    {
      icon: Activity,
      title: "Congestion Analytics",
      description: "Comprehensive dashboards provide insights into traffic patterns, helping city planners make data-driven decisions."
    }
  ];

  const stats = [
    { value: "45%", label: "Reduced Congestion", icon: "🚦" },
    { value: "30%", label: "Less Pollution", icon: "🌱" },
    { value: "25%", label: "Shorter Travel Time", icon: "⏱️" },
    { value: "99.9%", label: "System Uptime", icon: "⚡" }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Lead AI Researcher",
      bio: "PhD in Machine Learning with 10+ years in smart city infrastructure and traffic optimization algorithms."
    },
    {
      name: "Michael Rodriguez",
      role: "Systems Architect",
      bio: "Expert in IoT sensor networks and real-time data processing systems for urban environments."
    },
    {
      name: "Priya Patel",
      role: "Data Scientist",
      bio: "Specializes in predictive analytics and traffic pattern recognition using deep learning models."
    },
    {
      name: "James Liu",
      role: "Full Stack Developer",
      bio: "Builds scalable dashboards and APIs for traffic management with focus on user experience."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            AI-Powered Traffic <br />
            <span className="text-gradient">Management System</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Revolutionizing urban mobility with intelligent traffic optimization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary text-lg px-8">
              Explore Demo
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8">
              Watch Video
            </Button>
          </div>
        </div>

        {/* Animated Network Lines */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(150, 80%, 50%)" stopOpacity="0" />
                <stop offset="50%" stopColor="hsl(150, 80%, 50%)" stopOpacity="0.8" />
                <stop offset="100%" stopColor="hsl(150, 80%, 50%)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="url(#lineGradient)" strokeWidth="2">
              <animate attributeName="x1" from="-100%" to="100%" dur="3s" repeatCount="indefinite" />
              <animate attributeName="x2" from="0%" to="200%" dur="3s" repeatCount="indefinite" />
            </line>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About the Project</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our AI-Powered Traffic Management System uses cutting-edge machine learning and IoT sensors to monitor, 
              analyze, and optimize traffic flow in real-time. By processing millions of data points every second, 
              our system predicts congestion patterns and automatically adjusts traffic signals to keep cities moving smoothly.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="glass-card p-6 rounded-xl">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">IoT Sensors</h3>
                <p className="text-muted-foreground">Network of smart sensors at key intersections</p>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">AI Processing</h3>
                <p className="text-muted-foreground">Deep learning models analyze traffic patterns</p>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <Lightbulb className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Smart Decisions</h3>
                <p className="text-muted-foreground">Adaptive signal control in milliseconds</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Powerful Features</h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Advanced capabilities that make traffic flow smarter
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">How It Works</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 border-4 border-primary flex items-center justify-center mx-auto mb-4 text-2xl font-bold glow-primary">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">Data Collection</h3>
                <p className="text-muted-foreground">
                  IoT sensors and cameras continuously monitor traffic at intersections, collecting real-time data on vehicle count, speed, and direction.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 border-4 border-primary flex items-center justify-center mx-auto mb-4 text-2xl font-bold glow-primary">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">AI Analysis</h3>
                <p className="text-muted-foreground">
                  Machine learning algorithms process the data, predict traffic patterns, and identify potential congestion before it occurs.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 border-4 border-primary flex items-center justify-center mx-auto mb-4 text-2xl font-bold glow-primary">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Adaptive Response</h3>
                <p className="text-muted-foreground">
                  The system automatically adjusts signal timing, reroutes traffic, and prioritizes emergency vehicles for optimal flow.
                </p>
              </div>
            </div>
            <div className="mt-12 glass-card p-8 rounded-xl text-center">
              <Clock className="w-16 h-16 text-secondary mx-auto mb-4" />
              <p className="text-lg">
                All of this happens in <span className="text-secondary font-bold">real-time</span>, with the system 
                making thousands of micro-adjustments every hour to keep traffic flowing smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Measurable Impact</h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Real results from our pilot city deployments
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} index={index} />
            ))}
          </div>
          <div className="max-w-3xl mx-auto glass-card p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4 text-center">Benefits for Everyone</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <TrendingDown className="w-10 h-10 text-primary mb-3" />
                <h4 className="font-semibold mb-2">For Commuters</h4>
                <p className="text-muted-foreground text-sm">Less time in traffic, predictable travel times, and reduced stress during daily commutes.</p>
              </div>
              <div>
                <Zap className="w-10 h-10 text-primary mb-3" />
                <h4 className="font-semibold mb-2">For the Environment</h4>
                <p className="text-muted-foreground text-sm">Lower emissions from reduced idling, improved air quality, and sustainable urban development.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Meet Our Team</h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Expert minds building the future of urban mobility
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <TeamMember key={index} {...member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get Involved</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Interested in implementing our system in your city? Want to collaborate on research? 
              We'd love to hear from you.
            </p>
            <div className="glass-card p-8 rounded-xl">
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:outline-none transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:outline-none transition-colors"
                />
                <textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                ></textarea>
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-primary text-lg">
                  Send Message
                </Button>
              </div>
            </div>
            <div className="mt-8 flex justify-center gap-6 text-muted-foreground">
              <a href="mailto:contact@aitraffic.com" className="hover:text-primary transition-colors">
                Email: contact@aitraffic.com
              </a>
              <span>•</span>
              <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                Phone: +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 AI-Powered Traffic Management System. Building smarter cities together.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
