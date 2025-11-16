import { FileText, Sparkles, Users } from 'lucide-react';
import { StatBadge } from '@/components/ui/StatBadge';
import { mockAgents } from '@/lib/mock-data';

/**
 * HeroSection component that displays the hero section with branding,
 * tagline, and statistics badges on a vibrant gradient background.
 *
 * Features:
 * - Gradient background (blue to pink)
 * - Logo icon and "Agent Hub" title
 * - Descriptive tagline
 * - Statistics badges showing agent count and community status
 */
export function HeroSection() {
  const agentCount = mockAgents.length;

  return (
    <section className="bg-gradient-to-r from-blue-500 to-pink-500">
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 text-center">
        {/* Logo and Title */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <FileText className="w-12 h-12 text-white" aria-hidden="true" />
          <h1 className="text-5xl font-bold text-white">Agent Hub</h1>
        </div>

        {/* Tagline */}
        <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
          Browse and discover powerful Claude Code agents to supercharge your development workflow
        </p>

        {/* Statistics Badges */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <StatBadge
            icon={<Sparkles className="w-4 h-4" aria-hidden="true" />}
            label={`${agentCount} Agents`}
          />
          <StatBadge
            icon={<Users className="w-4 h-4" aria-hidden="true" />}
            label="Community Powered"
          />
        </div>
      </header>
    </section>
  );
}
