import { Eye, Copy, Clock } from 'lucide-react';
import type { Agent } from '@/lib/mock-data';
import { Avatar } from '@/components/ui/Avatar';
import { TagBadge } from '@/components/ui/TagBadge';
import { formatRelativeTime } from '@/lib/utils/time';

export interface AgentCardProps {
  agent: Agent;
}

/**
 * AgentCard component that displays an agent's information in a card layout.
 * Shows name, author, description, tags, and metadata (views, copies, time).
 *
 * @param agent - The agent object containing all card information
 */
export function AgentCard({ agent }: AgentCardProps) {
  const relativeTime = formatRelativeTime(agent.createdAt);

  return (
    <article className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 flex flex-col gap-4">
      {/* Agent Name */}
      <h3 className="text-xl font-bold text-gray-900">{agent.name}</h3>

      {/* Author Row */}
      <div className="flex items-center gap-3">
        <Avatar name={agent.author} size="sm" />
        <span className="text-sm text-gray-700">{agent.author}</span>
      </div>

      {/* Description */}
      <p className="text-gray-600 line-clamp-3">{agent.description}</p>

      {/* Tags Row */}
      <div className="flex flex-wrap gap-2">
        {agent.tags.map((tag) => (
          <TagBadge key={tag} tag={tag} />
        ))}
      </div>

      {/* Metadata Row */}
      <div className="flex items-center gap-4 text-sm text-gray-400 pt-2 border-t border-gray-100">
        <div className="flex items-center gap-1.5" aria-label={`${agent.viewCount} views`}>
          <Eye className="w-4 h-4" aria-hidden="true" />
          <span>{agent.viewCount}</span>
        </div>
        <div className="flex items-center gap-1.5" aria-label={`${agent.copyCount} copies`}>
          <Copy className="w-4 h-4" aria-hidden="true" />
          <span>{agent.copyCount}</span>
        </div>
        <div className="flex items-center gap-1.5" aria-label={`Created ${relativeTime}`}>
          <Clock className="w-4 h-4" aria-hidden="true" />
          <span>{relativeTime}</span>
        </div>
      </div>
    </article>
  );
}
