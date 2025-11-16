import { describe, it, expect } from 'vitest';
import { getAvatarColor } from './avatar';

describe('getAvatarColor', () => {
  it('should return consistent colors for the same name', () => {
    const name = 'Sarah Chen';
    const color1 = getAvatarColor(name);
    const color2 = getAvatarColor(name);

    expect(color1).toBe(color2);
  });

  it('should return different colors for different names', () => {
    const name1 = 'Sarah Chen';
    const name2 = 'Marcus Rodriguez';
    const color1 = getAvatarColor(name1);
    const color2 = getAvatarColor(name2);

    expect(color1).not.toBe(color2);
  });

  it('should return valid Tailwind color class strings', () => {
    const name = 'Test User';
    const color = getAvatarColor(name);

    // Should match pattern like "bg-purple-500", "bg-blue-500", etc.
    expect(color).toMatch(/^bg-\w+-500$/);
  });
});
