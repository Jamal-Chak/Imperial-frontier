# Color Update Task: Yellow to Mustard

## Task Overview
Change all yellow text colors to mustard color throughout the Imperial Frontier project.

## Todo Checklist
- [ ] Search for yellow color definitions across the codebase
- [ ] Identify all files containing yellow colors (CSS, TSX, config files)
- [ ] Replace yellow colors with mustard color variants
- [ ] Update Tailwind configuration if needed
- [ ] Test changes by running the development server
- [ ] Verify all yellow text has been converted to mustard

## Implementation Steps
1. **Search Phase**: Use regex to find all yellow color instances
   - Look in CSS files for hex colors like #FFFF00, rgb/yellow keywords
   - Check Tailwind classes with yellow (text-yellow, bg-yellow, border-yellow)
   - Find yellow in style objects and inline styles
   
2. **Replacement Phase**: Replace with appropriate mustard colors
   - Primary mustard: #DAA520 (goldenrod)
   - Alternative mustard: #BDB76B (dark khaki)
   - Lighter mustard: #F0E68C (khaki)
   - Darker mustard: #B8860B (dark goldenrod)

3. **Validation Phase**: Ensure all changes are applied correctly
   - Check for any remaining yellow references
   - Verify styling consistency
   - Test UI components to ensure readability
