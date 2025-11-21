# Task Breakdown: Agent File Detail Page

## Overview
Total Tasks: 13 organized across 3 primary task groups
Feature: Individual agent detail page with full content display and navigation

**Key Technical Context:**
- Next.js 15 App Router with TypeScript
- React 19.2 with Tailwind CSS v4
- Tests explicitly excluded per user request
- Mock data source: `/lib/mock-data.ts`
- Reusable components: Avatar, TagBadge
- Dynamic route: `/agents/[id]`

## Task List

### Frontend Components & Routing

#### Task Group 1: Dynamic Route Setup and Data Fetching
**Dependencies:** None

- [x] 1.0 Complete dynamic route implementation and data fetching
  - [x] 1.1 Install react-syntax-highlighter dependency
    - Run: `pnpm add react-syntax-highlighter`
    - Run: `pnpm add -D @types/react-syntax-highlighter`
    - Verify: Check package.json for successful installation
  - [x] 1.2 Create dynamic route page at `/app/agents/[id]/page.tsx`
    - Implement Next.js 15 async params pattern
    - Extract agent ID from URL parameters using awaited params
    - Mark page component as async server component
    - Follow pattern: `export default async function AgentDetailPage({ params }: { params: Promise<{ id: string }> })`
  - [x] 1.3 Implement agent data fetching logic
    - Import `mockAgents` from `@/lib/mock-data`
    - Await params and destructure id: `const { id } = await params`
    - Simulate async delay (500-1000ms random) using Promise with setTimeout
    - Find agent by ID: `mockAgents.find(agent => agent.id === id)`
    - Add proper TypeScript typing for agent data
  - [x] 1.4 Add agent not found error handling
    - Check if agent exists after data fetch
    - If not found, return error state JSX
    - Display centered error message: "Agent not found"
    - Include descriptive text: "The agent you're looking for doesn't exist."
    - Add Link component back to homepage: "Back to Agent Gallery"
    - Use semantic HTML with main element
    - Add ARIA label: `aria-label="Agent not found error"`
    - Apply vertical/horizontal centering with Tailwind: `min-h-screen flex items-center justify-center`

**Acceptance Criteria:**
- Dynamic route accessible at `/agents/[id]`
- Agent data fetched successfully from mock data
- Simulated async delay between 500-1000ms
- Non-existent agent IDs show error state with navigation back
- Proper TypeScript typing throughout
- react-syntax-highlighter dependency installed

#### Task Group 2: Page Header and Navigation
**Dependencies:** Task Group 1

- [x] 2.0 Complete page header and navigation elements
  - [x] 2.1 Implement back navigation link
    - Import `Link` from `next/link`
    - Import `ArrowLeft` icon from `lucide-react`
    - Position above agent name in semantic nav element
    - Link to homepage: `href="/"`
    - Display text: "Back to Agents" with arrow icon
    - Add ARIA label: `aria-label="Navigate back to agent gallery"`
    - Style with Tailwind: gray text color with hover state
    - Use inline flex layout for icon and text alignment
  - [x] 2.2 Create agent name heading section
    - Display agent.name as h1 heading
    - Use large, bold typography: `text-4xl font-bold`
    - Apply responsive sizing: smaller on mobile, larger on desktop
    - Add vertical spacing below heading
    - Ensure semantic hierarchy (h1 for page title)
  - [x] 2.3 Implement responsive layout container
    - Wrap content in main element with semantic HTML
    - Apply max-width constraint: `max-w-4xl mx-auto`
    - Add responsive padding: `px-4 md:px-6 lg:px-8`
    - Apply vertical padding: `py-8 md:py-12`
    - Ensure content not full-screen wide

**Acceptance Criteria:**
- Back navigation link visible and functional
- Agent name displays as h1 with proper styling
- Layout contained to max-width with responsive padding
- Semantic HTML elements used (main, nav, h1)
- All interactive elements keyboard accessible

#### Task Group 3: Author Information and Metadata
**Dependencies:** Task Group 2

- [x] 3.0 Complete author and metadata display sections
  - [x] 3.1 Build author information section
    - Add "Created by" label text above author display
    - Import Avatar component from `@/components/ui/Avatar`
    - Pass agent.author as name prop to Avatar
    - Use medium size variant: `size="md"`
    - Display author name next to avatar
    - Apply horizontal flex layout with gap spacing
    - Use readable text size and weight for author name
    - Match styling patterns from homepage AgentCard
  - [x] 3.2 Create metadata row display
    - Import icons from lucide-react: `Eye`, `Copy`, `Clock`
    - Create horizontal flex container with gap spacing
    - Build three metadata items in order:
      1. View count: Eye icon + agent.viewCount
      2. Copy count: Copy icon + agent.copyCount
      3. Creation time: Clock icon + formatRelativeTime(agent.createdAt)
    - Import formatRelativeTime from `@/lib/utils/time`
    - Apply light gray text color: `text-gray-600`
    - Add ARIA labels to each item:
      - `aria-label="View count: {viewCount}"`
      - `aria-label="Copy count: {copyCount}"`
      - `aria-label="Created {relativeTime}"`
    - Ensure responsive layout: stack on small screens if needed
  - [x] 3.3 Implement tags display section
    - Import TagBadge component from `@/components/ui/TagBadge`
    - Create horizontal wrapping flex container
    - Map over agent.tags array
    - Render TagBadge component for each tag
    - Apply gap spacing between badges: `gap-2`
    - Add vertical margin above and below section
    - Ensure tags wrap to multiple lines on narrow screens

**Acceptance Criteria:**
- "Created by" label visible above author section
- Avatar component renders with medium size and correct color
- Author name displayed next to avatar
- Three metadata items display horizontally with proper icons
- Relative time formatting works correctly
- All ARIA labels present for accessibility
- Tags display in wrapping horizontal row
- Consistent spacing throughout sections

### Content Display

#### Task Group 4: Description and Code Sections
**Dependencies:** Task Group 3

- [x] 4.0 Complete description and code content display
  - [x] 4.1 Build description section
    - Add "Description" heading as h2 element
    - Use proper semantic hierarchy (h2 under h1)
    - Apply heading styling: `text-2xl font-semibold`
    - Display agent.description in paragraph element
    - Use standard body text styling with line height
    - Apply readable text size: `text-base md:text-lg`
    - Add generous vertical spacing above and below
    - Allow description to span full content width
  - [x] 4.2 Implement syntax-highlighted code section
    - Add "Agent Code" heading as h2 element
    - Use consistent heading styling with Description section
    - Import `Prism as SyntaxHighlighter` from `react-syntax-highlighter`
    - Import code style theme (use `vscDarkPlus` or `github` theme)
    - Create SyntaxHighlighter component with props:
      - `language="markdown"` (agent content is markdown)
      - `style={selectedTheme}` (imported theme)
      - `customStyle` for additional styling
    - Display agent.content field inside SyntaxHighlighter
    - Apply light background with subtle border
    - Add padding inside code block for readability
    - Enable horizontal scrolling for long lines: `overflow-x-auto`
    - Use monospace font (handled by syntax highlighter)
  - [x] 4.3 Apply responsive code block styling
    - Ensure code block horizontally scrollable on mobile
    - Apply responsive border radius
    - Add subtle box shadow for depth
    - Test on mobile viewport (320px) for scroll behavior
    - Verify code block doesn't break page layout
    - Ensure adequate padding on all screen sizes

**Acceptance Criteria:**
- Description section displays with h2 heading
- Full agent description visible with readable styling
- Code section displays with h2 heading
- Syntax highlighting active with appropriate theme
- Code content displays agent.content from mock data
- Code block scrolls horizontally on narrow screens
- Light background and subtle border applied to code block
- Proper semantic heading hierarchy maintained
- Generous vertical spacing between sections

### Quality Assurance

#### Task Group 5: Accessibility and Responsive Design Verification
**Dependencies:** Task Groups 1-4

- [x] 5.0 Complete accessibility and responsive design verification
  - [x] 5.1 Verify semantic HTML structure
    - Confirm proper element usage: main, nav, article, section
    - Verify heading hierarchy: h1 for page title, h2 for sections
    - Check no heading levels skipped
    - Ensure links use anchor tags or Next.js Link
    - Validate button elements used for interactive actions
  - [x] 5.2 Test keyboard navigation
    - Tab through all interactive elements in logical order
    - Verify back navigation link accessible via keyboard
    - Ensure visible focus indicators on all focusable elements
    - Test Enter/Space key activation for interactive elements
    - Confirm no keyboard traps in page flow
  - [x] 5.3 Validate ARIA labels and accessibility attributes
    - Review all ARIA labels on metadata icons
    - Verify back navigation has descriptive ARIA label
    - Check error state has appropriate ARIA label
    - Ensure Avatar component includes built-in ARIA support
    - Validate no redundant or conflicting ARIA attributes
  - [x] 5.4 Test responsive layout across screen sizes
    - Mobile (320px - 768px): single column, horizontal scroll for code
    - Tablet (768px - 1024px): maintained single column with larger padding
    - Desktop (1024px+): max-width constraint with generous padding
    - Verify metadata row layout on small screens
    - Ensure tags wrap appropriately on narrow viewports
    - Test code block horizontal scrolling at 320px width
    - Confirm responsive padding applied: px-4 (mobile), px-6 (tablet), px-8 (desktop)
  - [x] 5.5 Verify color contrast and visual design
    - Check text meets 4.5:1 contrast ratio minimum
    - Verify metadata text legible with gray color
    - Ensure code block text readable against background
    - Test visual hierarchy: headings clearly distinguished
    - Validate consistent spacing matches mockup design
    - Compare final implementation to `planning/visuals/agent-detail-mockup.png`
  - [x] 5.6 Manual browser testing
    - Test in Chrome/Edge (Chromium)
    - Test in Firefox
    - Test in Safari (if on macOS)
    - Verify back navigation works correctly
    - Test with valid agent ID (e.g., agent-002)
    - Test with invalid agent ID to verify error handling
    - Confirm no console errors or warnings
    - Validate smooth page loading with simulated delay

**Acceptance Criteria:**
- All semantic HTML elements properly used
- Complete keyboard navigation without traps
- All ARIA labels present and descriptive
- Responsive layout works at 320px, 768px, 1024px+ breakpoints
- Code block scrolls horizontally on mobile without breaking layout
- Color contrast ratios meet WCAG 2.1 AA standards (4.5:1 minimum)
- Visual design matches mockup specifications
- Cross-browser compatibility verified
- Error states function correctly
- No console errors in browser DevTools

## Execution Order

Recommended implementation sequence:
1. **Dynamic Route Setup and Data Fetching** (Task Group 1) - Foundation with route creation, dependency installation, and data fetching
2. **Page Header and Navigation** (Task Group 2) - Navigation and basic page structure
3. **Author Information and Metadata** (Task Group 3) - Author display and metadata row with reusable components
4. **Description and Code Sections** (Task Group 4) - Main content display with syntax highlighting
5. **Accessibility and Responsive Design Verification** (Task Group 5) - Final quality checks and cross-browser testing

## Important Notes

**Testing Scope:**
- Unit tests and integration tests are **explicitly out of scope** per user request
- Manual browser testing included in Task Group 5 for functional verification only
- No automated test writing required for this feature

**Dependencies:**
- Must install `react-syntax-highlighter` and its TypeScript types
- Relies on existing Avatar and TagBadge components
- Uses existing mock data structure from `/lib/mock-data.ts`
- Uses existing time formatting utility from `/lib/utils/time.ts`

**Design Compliance:**
- Follow mockup at `planning/visuals/agent-detail-mockup.png`
- Maintain visual consistency with homepage gallery implementation
- Use same color scheme, spacing, and typography patterns

**Standards Alignment:**
- Follows Next.js 15 App Router conventions with async params
- Uses React 19.2 and Tailwind CSS v4 patterns
- Implements accessibility standards per `agent-os/standards/frontend/accessibility.md`
- Follows component best practices per `agent-os/standards/frontend/components.md`
- Adheres to global conventions per `agent-os/standards/global/conventions.md`

**Out of Scope Items:**
- Copy to clipboard functionality (future enhancement)
- Edit or modify agent functionality
- Related agents recommendations
- Social sharing features
- User authentication/authorization
- Comments or discussions
- Favoriting or bookmarking
- Download agent functionality
- View count tracking
- Code search within agent
- Multiple syntax highlighting themes
