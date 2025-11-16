'use client';

import { useState, useEffect } from 'react';
import { AlertCircle } from 'lucide-react';
import type { Agent } from '@/lib/mock-data';
import { mockAgents } from '@/lib/mock-data';
import { AgentCard } from '@/components/AgentCard';
import { SkeletonCard } from '@/components/SkeletonCard';

/**
 * GallerySection component that displays the agent gallery with loading,
 * error, and empty states.
 *
 * Features:
 * - Responsive grid layout (1 col mobile, 2 col tablet, 3 col desktop)
 * - Loading state with skeleton cards
 * - Empty state when no agents available
 * - Error state with user-friendly message
 * - Artificial delay to simulate async data fetching
 */
export function GallerySection() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [agents, setAgents] = useState<Agent[]>([]);

  useEffect(() => {
    fetchAgents();
  }, []);

  /**
   * Fetches agents with an artificial delay to simulate async data loading.
   * Delay is randomly between 500-1000ms.
   */
  async function fetchAgents() {
    try {
      setLoading(true);
      setError(null);

      // Artificial delay between 500-1000ms
      const delay = Math.random() * 500 + 500;
      await new Promise((resolve) => setTimeout(resolve, delay));

      // "Fetch" mock data
      setAgents(mockAgents);
    } catch (err) {
      setError('Failed to load agents. Please try refreshing the page.');
      console.error('Error fetching agents:', err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-gray-50 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gallery Header */}
        <header className="mb-8 lg:mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Explore Agents</h2>
          <p className="text-gray-600">Find the perfect agent for your next project</p>
        </header>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" role="status" aria-label="Loading agents">
            {Array.from({ length: 12 }).map((_, index) => (
              <SkeletonCard key={`skeleton-${index}`} />
            ))}
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div
            className="flex flex-col items-center justify-center py-16 text-center"
            role="alert"
            aria-live="polite"
          >
            <AlertCircle className="w-12 h-12 text-red-500 mb-4" aria-hidden="true" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Something went wrong</h3>
            <p className="text-gray-600 mb-4 max-w-md">{error}</p>
            <button
              onClick={fetchAgents}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              aria-label="Retry loading agents"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && agents.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No agents found</h3>
            <p className="text-gray-600">Check back later for new agents</p>
          </div>
        )}

        {/* Loaded State - Agent Grid */}
        {!loading && !error && agents.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {agents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
