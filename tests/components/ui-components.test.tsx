/**
 * Tests for Core UI Components
 * Task Group 2: Avatar, TagBadge, AgentCard, and SkeletonCard
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Avatar } from '@/components/ui/Avatar';
import { TagBadge } from '@/components/ui/TagBadge';
import { AgentCard } from '@/components/AgentCard';
import { SkeletonCard } from '@/components/SkeletonCard';
import type { Agent } from '@/lib/mock-data';

describe('Avatar Component', () => {
  it('should display first initial of name', () => {
    const name = 'Sarah Chen';
    render(<Avatar name={name} size="md" />);

    // Avatar should contain the first letter of the name
    expect(screen.getByText('S')).toBeDefined();
  });

  it('should apply color class from getAvatarColor utility', () => {
    const name = 'Marcus Rodriguez';
    const { container } = render(<Avatar name={name} size="md" />);

    // Avatar should have a background color class
    const avatar = container.querySelector('div');
    expect(avatar?.className).toContain('bg-');
  });
});

describe('TagBadge Component', () => {
  it('should render tag text with proper styling', () => {
    const tag = 'code-review';
    const { container } = render(<TagBadge tag={tag} />);

    // Badge should display the tag text
    expect(screen.getByText(tag)).toBeDefined();

    // Badge should have pill styling classes
    const badge = container.querySelector('span');
    expect(badge?.className).toContain('rounded-full');
    expect(badge?.className).toContain('bg-gray-100');
  });
});

describe('AgentCard Component', () => {
  const mockAgent: Agent = {
    id: 'test-001',
    name: 'Test Agent',
    description: 'This is a test agent description that should be displayed on the card.',
    content: '# Test content',
    author: 'Test Author',
    createdAt: '2025-08-15T10:30:00Z',
    tags: ['testing', 'mock'],
    viewCount: 123,
    copyCount: 45,
  };

  it('should render all required fields from agent data', () => {
    render(<AgentCard agent={mockAgent} />);

    // Card should contain agent name
    expect(screen.getByText(mockAgent.name)).toBeDefined();

    // Card should contain author name
    expect(screen.getByText(mockAgent.author)).toBeDefined();

    // Card should contain description
    expect(screen.getByText(mockAgent.description)).toBeDefined();

    // Card should contain view count
    expect(screen.getByText(mockAgent.viewCount.toString())).toBeDefined();

    // Card should contain copy count
    expect(screen.getByText(mockAgent.copyCount.toString())).toBeDefined();
  });
});

describe('SkeletonCard Component', () => {
  it('should render placeholder structure matching AgentCard', () => {
    const { container } = render(<SkeletonCard />);

    // Skeleton should have pulse animation class
    const article = container.querySelector('article');
    expect(article?.className).toContain('animate-pulse');

    // Skeleton should have gray background elements
    const grayElements = container.querySelectorAll('.bg-gray-200');
    expect(grayElements.length).toBeGreaterThan(0);
  });
});
