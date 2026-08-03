import "./background.css";

export function Background() {
  return (
    <div className="ambient-background">
      <div className="glow-sphere glow-cyan"></div>
      <div className="glow-sphere glow-emerald"></div>
      <div className="glow-sphere glow-purple"></div>
      <div className="bg-grid-overlay"></div>
    </div>
  );
}