interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  index: number;
}

const TeamMember = ({ name, role, bio, index }: TeamMemberProps) => {
  return (
    <div 
      className="glass-card p-6 rounded-xl hover:shadow-glow transition-all duration-300"
      style={{
        animation: `fade-in 0.6s ease-out ${index * 0.15}s both`
      }}
    >
      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 glow-primary"></div>
      <h3 className="text-xl font-semibold text-center mb-1">{name}</h3>
      <p className="text-primary text-center mb-3 font-medium">{role}</p>
      <p className="text-muted-foreground text-sm text-center leading-relaxed">{bio}</p>
    </div>
  );
};

export default TeamMember;
