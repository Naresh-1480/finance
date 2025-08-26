import FeatureCard from "./FeatureCard";
import { Brain, TrendingUp, Bell, Target, PieChart, Shield } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Get personalized financial advice based on your spending patterns, income, and goals with our advanced AI coach."
    },
    {
      icon: PieChart,
      title: "Smart Budget Tracking",
      description: "Automatically categorize expenses and track your budget with intuitive charts and real-time spending analysis."
    },
    {
      icon: Bell,
      title: "Intelligent Alerts",
      description: "Receive proactive notifications about bill due dates, unusual spending, and opportunities to save money."
    },
    {
      icon: Target,
      title: "Goal Achievement",
      description: "Set and track financial goals with AI-guided strategies to help you reach your savings and investment targets."
    },
    {
      icon: TrendingUp,
      title: "Investment Guidance",
      description: "Make informed investment decisions with AI analysis of market trends and personalized risk assessment."
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your financial data is protected with bank-level encryption and privacy controls you can trust."
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Powerful Features for
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Smart Finance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to take control of your finances and build wealth intelligently
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;