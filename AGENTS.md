# Nexus Design System Component Library Rules

This will be a production-ready React component library. Every component should be fully documented, tested, and include Storybook stories. We're building a professional design system that other teams will depend on.

Ensure the component viewing window in the stories are large enough to show the whole component. Create new lines and reduce the number of component variants rather than have them crowded on a page. 

## Core Principles

When importing from Figma or creating components, always generate a complete component package including the main component file, TypeScript types, Storybook stories, and documentation. Think production-ready from the start.

## Design Tokens 
use DESIGN-TOKENS.md as the source of truth

## Component Structure

For every component, create this structure:
- Main component file with TypeScript and all variants from Figma
- Comprehensive Storybook story file showing all states and variants
- Proper TypeScript interfaces exported separately
- Export from main index.ts file
- JSDoc documentation for all props

## Technical Requirements

Use TypeScript interfaces for all props with proper JSDoc comments. Export types separately for consumer applications. Reference the figma imports for styling as well as DESIGN-TOKENS.md// Include proper accessibility with ARIA labels, keyboard navigation, and focus management. Forward refs for all interactive components. All components, stories and documentation should use Inter font. 

## Storybook Stories

Create stories that showcase every variant and state present in the Figma design. Include controls for all props. Add usage documentation and real-world examples. Show the component in different contexts. Include accessibility notes and best practices. Use the autodocs tag for automatic documentation generation.

## Code Quality Standards

Every component must have proper error and loading states where applicable. Include data-testid attributes for testing. Implement proper focus management and keyboard navigation. Maintain high contrast ratios for accessibility. Use React.memo where appropriate for performance.

## Documentation Approach

Write JSDoc comments for components explaining their purpose and usage. Include code examples in documentation. Document all props with their types and descriptions. Add Storybook descriptions explaining when and how to use each component. Create usage guidelines showing dos and don'ts.

## Export Strategy

Always update src/index.ts with both the component and its types. Ensure tree-shaking friendly exports. Set up package.json for NPM publishing readiness. Include both CommonJS and ESM builds.

## AI Instructions

When generating components from Figma imports, preserve all variants and states present in the design. Create comprehensive, not minimal implementations. Think about developer experience - make components that are pleasant to use. Generate helpful error messages and warnings. Consider responsive behavior in every component. Add comments explaining complex logic or patterns.

## Storybook Story Pattern

For each component, create a main story file that includes a Default story, individual stories for each major variant, an AllVariants story showing everything together, and interactive examples showing real usage. Use Storybook controls to make props interactive. Include parameters for layout and documentation.

## Quality Checklist

Before considering any component complete, ensure it has TypeScript types for all props, Storybook stories for all variants, keyboard navigation support, responsive design consideration, proper ARIA labels, loading and error states if applicable, and export from the main index file.

## Remember

We're building a design system that will be used across multiple projects. Every component should be polished, well-documented, and ready for production use. The goal is to create components that developers will love to use and that maintain consistency across applications. 

