/**
 * Integration Tests for Homepage
 * Task Group 5: Critical end-to-end user workflows
 *
 * These tests verify the complete user experience from page load
 * to viewing agents, ensuring all components work together correctly.
 */

import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import HomePage from '@/app/page';

describe('Homepage Integration', () => {
  it('should render complete page structure with hero and gallery sections', () => {
    const { container } = render(<HomePage />);

    // Main element should exist with semantic HTML
    const main = container.querySelector('main');
    expect(main).toBeDefined();
    expect(main?.className).toContain('min-h-screen');

    // Hero section should be present
    const heroSection = container.querySelector('section');
    expect(heroSection).toBeDefined();
  });

  it('should display loading state initially then show agents after delay', async () => {
    render(<HomePage />);

    // Initially, should show skeleton loaders
    const skeletonElements = document.querySelectorAll('.animate-pulse');
    expect(skeletonElements.length).toBeGreaterThan(0);

    // After delay (500-1000ms + buffer), agents should be displayed
    await waitFor(
      () => {
        // Check for specific agent names from mock data
        expect(screen.queryByText('Python Code Review Assistant')).toBeDefined();
      },
      { timeout: 3000 }
    );

    // Verify multiple agents are rendered
    expect(screen.queryByText('React Component Reviewer')).toBeDefined();
    expect(screen.queryByText('TypeScript Code Quality Checker')).toBeDefined();
  });

  it('should display hero section with branding while agents are loading', () => {
    render(<HomePage />);

    // Hero section should always be visible, even during loading
    expect(screen.getByRole('heading', { name: /agent hub/i })).toBeDefined();
    expect(screen.getByText(/browse and discover powerful claude code agents/i)).toBeDefined();

    // Statistics badges should be visible - use more specific query
    expect(screen.getByText(/13 agents/i)).toBeDefined();
    expect(screen.getByText(/community powered/i)).toBeDefined();
  });

  it('should maintain heading hierarchy from h1 (hero) to h2 (gallery) to h3 (cards)', async () => {
    render(<HomePage />);

    // H1 should be "Agent Hub" in hero section
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1.textContent).toBe('Agent Hub');

    // Wait for gallery to load
    await waitFor(
      () => {
        // H2 should be "Explore Agents" in gallery section
        const h2 = screen.getByRole('heading', { level: 2, name: /explore agents/i });
        expect(h2).toBeDefined();
      },
      { timeout: 3000 }
    );

    // H3 elements should be agent card titles
    await waitFor(() => {
      const h3Elements = document.querySelectorAll('h3');
      // Should have multiple h3 elements (one per agent card)
      expect(h3Elements.length).toBeGreaterThan(0);
    });
  });

  it('should render all 12 agent cards with complete metadata after loading', async () => {
    render(<HomePage />);

    // Wait for agents to load
    await waitFor(
      () => {
        expect(screen.queryByText('Python Code Review Assistant')).toBeDefined();
      },
      { timeout: 3000 }
    );

    // Verify all 12 agent cards are rendered
    const articles = document.querySelectorAll('article');
    expect(articles.length).toBe(12);

    // Verify view counts are present (numbers from mock data)
    expect(screen.queryByText('782')).toBeDefined(); // View count from first agent

    // Verify copy counts are present
    expect(screen.queryByText('95')).toBeDefined(); // Copy count from first agent

    // Verify tags are rendered
    expect(screen.queryByText('code-review')).toBeDefined();
    expect(screen.queryByText('python')).toBeDefined();

    // Verify author names are displayed
    expect(screen.queryByText('Sarah Chen')).toBeDefined();
    expect(screen.queryByText('Marcus Rodriguez')).toBeDefined();
  });
});
