export interface StatBadgeProps {
  icon: React.ReactNode;
  label: string;
}

/**
 * StatBadge component that displays a statistic badge with an icon and label
 * on a semi-transparent white background.
 *
 * @param icon - The icon to display (React element from lucide-react or other library)
 * @param label - The text label to display
 */
export function StatBadge({ icon, label }: StatBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium">
      {icon}
      <span>{label}</span>
    </div>
  );
}
