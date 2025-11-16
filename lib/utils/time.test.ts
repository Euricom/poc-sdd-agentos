import { describe, it, expect } from 'vitest';
import { formatRelativeTime } from './time';

describe('formatRelativeTime', () => {
  it('should format dates from 3 months ago correctly', () => {
    // Date roughly 3 months ago
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
    const isoString = threeMonthsAgo.toISOString();

    const result = formatRelativeTime(isoString);
    expect(result).toBe('3 months ago');
  });

  it('should format dates from 1 month ago correctly', () => {
    // Date roughly 1 month ago
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    const isoString = oneMonthAgo.toISOString();

    const result = formatRelativeTime(isoString);
    expect(result).toBe('1 month ago');
  });

  it('should format recent dates as "just now"', () => {
    const now = new Date().toISOString();
    const result = formatRelativeTime(now);
    expect(result).toBe('just now');
  });
});
