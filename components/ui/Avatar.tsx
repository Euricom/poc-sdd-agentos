import { getAvatarColor } from '@/lib/utils/avatar';

export interface AvatarProps {
  name: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Avatar component that displays a circular avatar with the first initial of a name
 * and a consistent color based on the name.
 *
 * @param name - The name to display (shows first initial)
 * @param size - Size variant: 'sm' (32px), 'md' (40px), or 'lg' (48px). Defaults to 'md'
 */
export function Avatar({ name, size = 'md' }: AvatarProps) {
  const initial = name.charAt(0).toUpperCase();
  const colorClass = getAvatarColor(name);

  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
  };

  return (
    <div
      className={`${colorClass} ${sizeClasses[size]} rounded-full flex items-center justify-center font-semibold text-white`}
      aria-label={`Avatar for ${name}`}
    >
      {initial}
    </div>
  );
}
