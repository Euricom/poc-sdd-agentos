# Specification: Agent File Detail Page

**Author:** Peter Cosemans
**Date:** 2025-11-18
**Phase:** Phase 1 MVP - Item #2

## Goal
Create individual agent detail pages that display complete agent information including full description, syntax-highlighted code content, metadata, and navigation back to homepage, enabling users to view and understand agent files in detail.

## User Stories
- As a developer, I want to view full agent details and code content so that I can understand how the agent works before using it
- As a user, I want to easily navigate back to the agent gallery so that I can continue browsing other agents

## Specific Requirements

**Dynamic Route Implementation**
- Create Next.js App Router dynamic route at `/app/agents/[id]/page.tsx`
- Extract agent ID from URL parameters using Next.js 15 async params pattern
- Fetch agent data from `mockAgents` array by matching ID
- Implement simulated async delay (500-1000ms) matching gallery loading pattern
- Handle server component rendering with proper TypeScript typing

**Agent Not Found Handling**
- Display user-friendly error message when agent ID does not exist in mock data
- Show "Agent not found" heading with descriptive message
- Include Link component back to homepage with text "Back to Agent Gallery"
- Use semantic HTML with proper ARIA labels for error state
- Center error content vertically and horizontally in viewport

**Page Header Section**
- Display agent name as h1 heading with large, bold typography
- Implement "Back to Agents" link using Next.js Link component with left arrow icon from lucide-react
- Position back link above agent name for easy navigation
- Use semantic nav element for back link with appropriate ARIA label

**Author Information Display**
- Add "Created by" label text above author section for clarity
- Reuse Avatar component from `/components/ui/Avatar.tsx` with medium size
- Display author name next to avatar in readable text size
- Align avatar and author name horizontally with consistent spacing
- Apply same styling patterns as AgentCard component

**Metadata Row Layout**
- Display three metadata items horizontally: views, forks (copies), and creation time
- Use Eye icon from lucide-react for view count display
- Use Copy icon from lucide-react for fork/copy count display
- Use Clock icon from lucide-react for timestamp display
- Format creation date using `formatRelativeTime` utility from `/lib/utils/time.ts`
- Apply light gray text color matching mockup design
- Add ARIA labels to each metadata item for accessibility

**Tags Display Section**
- Reuse TagBadge component from `/components/ui/TagBadge.tsx`
- Display all agent tags in horizontal wrapping row with gap spacing
- Map over agent.tags array rendering TagBadge for each tag
- Maintain consistent spacing between tag badges

**Description Section**
- Add "Description" heading (h2) with proper semantic hierarchy
- Display full agent description text in readable paragraph
- Use standard body text styling with appropriate line height
- Allow description to span full content width

**Agent Code Section**
- Add "Agent Code" heading (h2) with proper semantic hierarchy
- Implement syntax-highlighted code block using `react-syntax-highlighter`
- Use appropriate syntax highlighter style (github or vs2015 theme)
- Display agent.content field from mock data in code block
- Enable horizontal scrolling for long code lines on mobile
- Apply light background color with subtle border matching mockup
- Add padding inside code block for readability
- Use monospace font for code display

**Responsive Layout**
- Implement single-column layout constrained to max-width container
- Apply responsive padding (px-4 on mobile, px-6 on tablet, px-8 on desktop)
- Ensure code block scrolls horizontally on small screens
- Add generous vertical spacing between sections
- Follow same responsive patterns as homepage gallery

**Accessibility Compliance**
- Use semantic HTML elements (main, nav, article, section)
- Ensure proper heading hierarchy (h1 for page title, h2 for section headings)
- Add ARIA labels to metadata icons and interactive elements
- Ensure sufficient color contrast ratios for all text
- Enable keyboard navigation for all interactive elements
- Test with screen readers to verify content readability

## Visual Design

**`planning/visuals/agent-detail-mockup.png`**
- Page title "React Component Reviewer" displayed as large h1 heading
- Circular avatar with teal/mint background showing "M" initial next to author name
- Metadata row with three inline items using icons for views (645), forks (78), and time (1 month ago)
- Horizontal row of tag badges: "code-review", "react", "frontend", "javascript"
- "Description" heading followed by single paragraph text block
- "Agent Code" heading followed by large syntax-highlighted code block
- Code block shows syntax highlighting with orange markdown headers, purple keywords, and green comments
- Clean single-column layout with generous whitespace between sections
- Content constrained to maximum width, not full-screen wide
- Light gray/off-white background for code block with subtle border

## Existing Code to Leverage

**Avatar Component (`/components/ui/Avatar.tsx`)**
- Reuse existing Avatar component for author display with consistent color generation
- Use medium size variant for detail page
- Maintains consistent avatar styling with gallery cards
- Includes built-in ARIA labels and accessibility features

**TagBadge Component (`/components/ui/TagBadge.tsx`)**
- Reuse for displaying agent tags with identical styling to gallery
- Pill-shaped badges with light gray background
- Maintains visual consistency across homepage and detail pages

**Mock Data Structure (`/lib/mock-data.ts`)**
- Agent interface defines complete data structure including id, name, description, content, author, createdAt, tags, viewCount, copyCount
- Access mockAgents array to find agent by ID
- Content field contains full markdown text for syntax highlighting

**Time Formatting Utility (`/lib/utils/time.ts`)**
- Use formatRelativeTime function to convert ISO date strings to relative time display
- Produces user-friendly output like "1 month ago", "3 days ago"
- Identical formatting pattern as gallery cards

**Async Loading Pattern (from `GallerySection.tsx`)**
- Implement artificial delay between 500-1000ms using setTimeout wrapped in Promise
- Use try-catch for error handling with user-friendly error messages
- Follow same loading state management pattern for consistency

## Out of Scope
- Copy to clipboard button for agent code (will be implemented separately)
- Integration tests and unit tests (explicitly excluded per user request)
- Edit or modify agent functionality
- Related agents or recommendations section
- Sharing functionality for social media
- User authentication or authorization checks
- Commenting or discussion features
- Favoriting or bookmarking agents
- Download agent as file functionality
- View count tracking or analytics implementation
- Search functionality within agent code
- Multiple theme options for syntax highlighting
