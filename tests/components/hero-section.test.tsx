/**
 * Tests for Hero Section Component
 * Task Group 3: Hero section with branding and statistics
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HeroSection } from '@/components/HeroSection';

describe('HeroSection Component', () => {
  it('should render with correct heading text and tagline', () => {
    render(<HeroSection />);

    // Hero should contain "Agent Hub" title
    expect(screen.getByRole('heading', { name: /agent hub/i })).toBeDefined();

    // Hero should contain the tagline
    expect(screen.getByText(/browse and discover powerful claude code agents/i)).toBeDefined();
  });

  it('should display statistics badges with correct labels', () => {
    render(<HeroSection />);

    // Should show agent count badge with number
    expect(screen.getByText(/13 agents/i)).toBeDefined();

    // Should show "Community Powered" badge
    expect(screen.getByText(/community powered/i)).toBeDefined();
  });

  it('should use semantic HTML with section and header tags', () => {
    const { container } = render(<HeroSection />);

    // Hero should be wrapped in a section tag
    const section = container.querySelector('section');
    expect(section).toBeDefined();

    // Hero should use a header tag for content
    const header = container.querySelector('header');
    expect(header).toBeDefined();
  });
});
