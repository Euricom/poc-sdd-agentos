/**
 * Formats an ISO date string into a human-readable relative time string
 * @param isoDateString - ISO 8601 date string (e.g., "2025-10-15T10:30:00Z")
 * @returns Relative time string (e.g., "3 months ago", "1 month ago", "just now")
 */
export function formatRelativeTime(isoDateString: string): string {
  const date = new Date(isoDateString);
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInWeeks = Math.floor(diffInDays / 7);
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInDays / 365);

  if (diffInYears > 0) {
    return diffInYears === 1 ? '1 year ago' : `${diffInYears} years ago`;
  }

  if (diffInMonths > 0) {
    return diffInMonths === 1 ? '1 month ago' : `${diffInMonths} months ago`;
  }

  if (diffInWeeks > 0) {
    return diffInWeeks === 1 ? '1 week ago' : `${diffInWeeks} weeks ago`;
  }

  if (diffInDays > 0) {
    return diffInDays === 1 ? '1 day ago' : `${diffInDays} days ago`;
  }

  if (diffInHours > 0) {
    return diffInHours === 1 ? '1 hour ago' : `${diffInHours} hours ago`;
  }

  if (diffInMinutes > 0) {
    return diffInMinutes === 1 ? '1 minute ago' : `${diffInMinutes} minutes ago`;
  }

  return 'just now';
}
