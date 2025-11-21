import Link from 'next/link';
import { ArrowLeft, Eye, Copy, Clock } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { mockAgents } from '@/lib/mock-data';
import { Avatar } from '@/components/ui/Avatar';
import { TagBadge } from '@/components/ui/TagBadge';
import { formatRelativeTime } from '@/lib/utils/time';

/**
 * Agent Detail Page - displays complete agent information including description,
 * metadata, and syntax-highlighted code content.
 *
 * Features:
 * - Dynamic routing with [id] parameter
 * - Full agent information display
 * - Syntax-highlighted code block
 * - Back navigation to homepage
 * - Error handling for invalid agent IDs
 * - Responsive single-column layout
 * - Full accessibility compliance
 */
export default async function AgentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Extract agent ID from URL parameters using Next.js 15 async params pattern
  const { id } = await params;

  // Simulate async data fetching with random delay between 500-1000ms
  const delay = Math.random() * 500 + 500;
  await new Promise((resolve) => setTimeout(resolve, delay));

  // Find agent by ID from mock data
  const agent = mockAgents.find((agent) => agent.id === id);

  // Handle agent not found error state
  if (!agent) {
    return (
      <main
        className="min-h-screen flex items-center justify-center px-4"
        aria-label="Agent not found error"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Agent not found</h1>
          <p className="text-gray-600 mb-6">
            The agent you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            aria-label="Navigate back to agent gallery"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to Agent Gallery
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
      {/* Back Navigation */}
      <nav aria-label="Navigate back to agent gallery" className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          aria-label="Navigate back to agent gallery"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Back to Agents</span>
        </Link>
      </nav>

      {/* Agent Name */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        {agent.name}
      </h1>

      {/* Author Information */}
      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-2">Created by</p>
        <div className="flex items-center gap-3">
          <Avatar name={agent.author} size="md" />
          <span className="text-base font-medium text-gray-900">{agent.author}</span>
        </div>
      </div>

      {/* Metadata Row */}
      <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
        <div
          className="flex items-center gap-2"
          aria-label={`View count: ${agent.viewCount}`}
        >
          <Eye className="w-4 h-4" aria-hidden="true" />
          <span>{agent.viewCount}</span>
        </div>
        <div
          className="flex items-center gap-2"
          aria-label={`Copy count: ${agent.copyCount}`}
        >
          <Copy className="w-4 h-4" aria-hidden="true" />
          <span>{agent.copyCount}</span>
        </div>
        <div
          className="flex items-center gap-2"
          aria-label={`Created ${formatRelativeTime(agent.createdAt)}`}
        >
          <Clock className="w-4 h-4" aria-hidden="true" />
          <span>{formatRelativeTime(agent.createdAt)}</span>
        </div>
      </div>

      {/* Tags Section */}
      <div className="flex flex-wrap gap-2 mb-8">
        {agent.tags.map((tag) => (
          <TagBadge key={tag} tag={tag} />
        ))}
      </div>

      {/* Description Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Description</h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          {agent.description}
        </p>
      </section>

      {/* Agent Code Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Agent Code</h2>
        <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
          <SyntaxHighlighter
            language="markdown"
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              padding: '1.5rem',
              fontSize: '0.875rem',
              lineHeight: '1.5',
              overflowX: 'auto',
            }}
            showLineNumbers={false}
          >
            {agent.content}
          </SyntaxHighlighter>
        </div>
      </section>
    </main>
  );
}
