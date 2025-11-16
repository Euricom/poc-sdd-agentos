export interface TagBadgeProps {
  tag: string;
}

/**
 * TagBadge component that displays a tag as a pill-shaped badge
 * with light gray background and dark text.
 *
 * @param tag - The tag text to display
 */
export function TagBadge({ tag }: TagBadgeProps) {
  return (
    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
      {tag}
    </span>
  );
}
