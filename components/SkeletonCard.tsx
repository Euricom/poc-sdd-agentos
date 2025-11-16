/**
 * SkeletonCard component that displays a loading placeholder
 * matching the AgentCard layout structure with shimmer animation.
 */
export function SkeletonCard() {
  return (
    <article className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 flex flex-col gap-4 animate-pulse">
      {/* Title Placeholder */}
      <div className="h-6 bg-gray-200 rounded w-3/4"></div>

      {/* Author Row Placeholder */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
        <div className="h-4 bg-gray-200 rounded w-24"></div>
      </div>

      {/* Description Placeholder (2-3 lines) */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      </div>

      {/* Tags Placeholder */}
      <div className="flex flex-wrap gap-2">
        <div className="h-6 bg-gray-200 rounded-full w-20"></div>
        <div className="h-6 bg-gray-200 rounded-full w-16"></div>
        <div className="h-6 bg-gray-200 rounded-full w-24"></div>
      </div>

      {/* Metadata Row Placeholder */}
      <div className="flex items-center gap-4 pt-2 border-t border-gray-100">
        <div className="h-4 bg-gray-200 rounded w-12"></div>
        <div className="h-4 bg-gray-200 rounded w-12"></div>
        <div className="h-4 bg-gray-200 rounded w-20"></div>
      </div>
    </article>
  );
}
