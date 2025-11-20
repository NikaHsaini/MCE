interface GeometricShapeProps {
  type: 'hexagon' | 'triangle' | 'square' | 'circle';
  size?: number;
  color?: string;
  className?: string;
  animate?: boolean;
}

export default function GeometricShape({
  type,
  size = 200,
  color = 'primary',
  className = '',
  animate = true,
}: GeometricShapeProps) {
  const getShapePath = () => {
    switch (type) {
      case 'hexagon':
        return 'M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z';
      case 'triangle':
        return 'M50 0 L100 86.6 L0 86.6 Z';
      case 'square':
        return 'M0 0 L100 0 L100 100 L0 100 Z';
      case 'circle':
        return 'M50 0 A50 50 0 1 1 50 100 A50 50 0 1 1 50 0';
      default:
        return '';
    }
  };

  const animationClass = animate ? 'animate-float' : '';
  const glowClass = color === 'primary' ? 'quantum-glow' : 
                    color === 'secondary' ? 'quantum-glow-secondary' : 
                    color === 'pink' ? 'quantum-glow-pink' :
                    'quantum-glow-accent';

  return (
    <div className={`${className} ${animationClass}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={`${glowClass} opacity-80`}
      >
        <path
          d={getShapePath()}
          fill="currentColor"
          className={
            color === 'primary' ? 'text-primary' :
            color === 'secondary' ? 'text-secondary' :
            color === 'pink' ? 'text-pink-500' :
            'text-accent'
          }
        />
      </svg>
    </div>
  );
}
