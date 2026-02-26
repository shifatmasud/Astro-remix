# Developer Notebook

A log of all tasks, ideas, and progress for this project.

## To Do

-   [ ] Integrate Gemini API for a core feature.
-   [ ] Create a more complex page layout.
-   [ ] Add interactive 3D elements with Three.js.

## In Progress

-   ...

## Done

-   **[2026-02-20 08:45]**: Implemented "System Spec" floating window and toggle in the Inspector group. Added interactive visuals, SVG animations, and "Copy as Markdown" button.
-   **[2024-05-21 13:30]**: Replaced the number input in Range Sliders with an interactive, animated counter for a more dynamic feel.
-   **[2024-05-21 13:15]**: Added a toggleable measurement overlay to the Stage, showing real-time dimensions for the button component.
-   **[2024-05-21 13:00]**: Completed extensive refactor into granular components (new Core inputs, Package panels for each window, Section for Stage).
-   **[2024-05-21 12:30]**: Refactored MetaPrototype into a modular component structure (App, Package, Section, Core) for better organization and scalability.
-   **[2024-05-21 12:00]**: Implemented Meta Prototype environment with draggable windows and State Layer physics.
-   **[2024-05-21 10:30]**: Implemented Tier 3 documentation files (`README.md`, `LLM.md`, `noteBook.md`, `bugReport.md`) as per system prompt.
-   **[2024-05-21 09:00]**: Initial project setup with React, Theme Provider, and responsive breakpoints.
-   **[2026-02-25 14:45]**: Integrated a 3D character into the main stage using `three.js` and `@react-three/fiber`. The `Stage` component now renders a 3D canvas with the character and basic lighting.
-   **[2026-02-25 15:00]**: Added a thumbstick and jump button to control the 3D character's movement and actions.
-   **[2026-02-25 15:08]**: Implemented a walking animation for the 3D character, driven by its movement velocity.
-   **[2026-02-25 15:10]**: Added a jetpack flame animation with pulsing and flickering effects when the jump button is held.
-   **[2026-02-25 15:22]**: Implemented camera controls that allow the user to change the camera angle by dragging on the screen.
-   **[2026-02-26 03:17]**: Simplified the character's movement logic. The character now directly faces the direction of the thumbstick and moves forward, providing a more intuitive "tank control" scheme.