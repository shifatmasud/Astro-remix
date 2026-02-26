# Bug Report Log

Tracking all issues, from critical bugs to minor suggestions.

## Critical (App Breaking)

-   ...

## Warning (Unexpected Behavior)

-   [x] **[2026-02-25 15:02]** Fixed a `ReferenceError` in the `Thumbstick` component. The `onMove` function was not in the correct scope because the drag handler functions were defined outside the component. Moved the handlers inside the `Thumbstick` component to resolve the issue.
-   [x] **[2026-02-25 15:10]** Resolved a build error caused by an incompatibility between `framer-motion` and `framer-motion-3d`. Downgraded `framer-motion-3d` to a compatible version to fix the issue.
-   [x] **[2026-02-25 15:30]** Fixed incorrect thumbstick movement logic. The character now moves relative to the camera's direction and rotates to face the direction of movement.
-   [x] **[2026-02-25 15:36]** Corrected inverted left/right thumbstick controls. The character now moves in the correct direction.
-   [x] **[2026-02-26 03:17]** Fixed a build error caused by a duplicate `speed` variable declaration in the `Character.tsx` component.
-   [x] **[2026-02-26 03:20]** Corrected inverted forward/backward thumbstick controls. The character now moves in the correct direction.

## Suggestion (Improvements)

-   [ ] Add more interactive SVG animations to the System Spec window for each rule.
-   ...
