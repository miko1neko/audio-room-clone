# Voice Session Layout Update

## Goal
Restructure the `/voice` page so the left-side settings panels scroll independently while the main "Looking for someone?" area stays fixed and centered on the right.

## Changes

1. **Contain the page viewport**  
   Change the outer wrapper in `src/routes/voice.tsx` from `min-h-screen` to a fixed viewport height with `overflow-hidden` so the overall page stops scrolling.

2. **Make only the left column scrollable**  
   Wrap the left-side settings panels in a container with `h-full overflow-y-auto` and add bottom padding so content does not disappear under the fixed footer. Keep the existing panel order and spacing.

3. **Fix the main area in place**  
   Give the main "Looking for someone?" section `overflow-hidden` (or `overflow-y-auto` as a fallback for very small viewports) and keep it centered. It should not scroll when the left panels scroll.

4. **Preserve content**  
   Do not change the text, icons, cards, or any existing behavior in the left panels or the main area. The visual output should match the current state, just with a fixed right side and scrollable left side.

## Verification
- Open the `/voice` preview on desktop and a narrower viewport.
- Confirm that scrolling the left panels moves only the settings blocks.
- Confirm the main area remains visible and centered while scrolling.
- Check that the last left panel is not hidden behind the footer.
