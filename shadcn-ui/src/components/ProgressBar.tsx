interface ProgressBarProps {
  percentage: number;
  label?: string;
  showPercentage?: boolean;
}

export default function ProgressBar({ 
  percentage, 
  label = 'Funding Progress',
  showPercentage = true 
}: ProgressBarProps) {
  const clampedPercentage = Math.min(Math.max(percentage, 0), 100);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="font-montserrat text-sm font-medium text-[#2C3E50]">
          {label}
        </span>
        {showPercentage && (
          <span className="font-montserrat text-sm font-semibold text-[#4CAF50]">
            {clampedPercentage}%
          </span>
        )}
      </div>
      <div className="w-full h-6 bg-[#F4F1DE] rounded-lg overflow-hidden">
        <div
          className="h-full bg-[#4CAF50] transition-all duration-500 ease-out flex items-center justify-end pr-2"
          style={{ width: `${clampedPercentage}%` }}
        >
          {clampedPercentage > 10 && (
            <span className="text-white text-xs font-montserrat font-semibold">
              {clampedPercentage}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
}