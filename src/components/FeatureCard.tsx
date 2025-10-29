import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon: Icon, title, description, index }: FeatureCardProps) => {
  return (
    <div 
      className="glass-card p-6 rounded-xl hover:shadow-glow transition-all duration-300 group"
      style={{
        animation: `fade-in 0.6s ease-out ${index * 0.1}s both`
      }}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors glow-primary">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
