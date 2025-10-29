interface StatCardProps {
  value: string;
  label: string;
  icon: string;
  index: number;
}

const StatCard = ({ value, label, icon, index }: StatCardProps) => {
  return (
    <div 
      className="glass-card p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300"
      style={{
        animation: `scale-in 0.5s ease-out ${index * 0.1}s both`
      }}
    >
      <div className="text-4xl mb-2">{icon}</div>
      <div className="text-4xl font-bold text-gradient mb-2">{value}</div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
};

export default StatCard;
