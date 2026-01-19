
import { cn } from "@/lib/utils";

// We use a subset of props that are compatible with both Divs and Lucide usage patterns
interface PrismIconProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number | string;
}

export const PrismIcon = ({ className, size = 24, ...props }: PrismIconProps) => {
  return (
    <div 
      className={cn("relative inline-flex items-center justify-center select-none", className)} 
      style={{ width: size, height: size }}
      {...props}
    >
      <img 
        src="/prism.png" 
        alt="Insight Prism" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};
