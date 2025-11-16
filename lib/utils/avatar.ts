/**
 * Available Tailwind color classes for avatars
 * Using 10 distinct colors for variety
 */
const AVATAR_COLORS = [
  'bg-purple-500',
  'bg-blue-500',
  'bg-green-500',
  'bg-orange-500',
  'bg-pink-500',
  'bg-indigo-500',
  'bg-teal-500',
  'bg-red-500',
  'bg-yellow-500',
  'bg-cyan-500',
] as const;

/**
 * Simple hash function to generate a consistent number from a string
 * @param str - Input string to hash
 * @returns Hash number
 */
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}

/**
 * Generates a consistent Tailwind color class from an author name
 * @param name - Author name
 * @returns Tailwind color class string (e.g., "bg-purple-500")
 */
export function getAvatarColor(name: string): string {
  const hash = hashString(name);
  const colorIndex = hash % AVATAR_COLORS.length;
  return AVATAR_COLORS[colorIndex];
}
