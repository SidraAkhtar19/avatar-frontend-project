# Avatar Builder Dashboard

A pixel-perfect recreation of the Avatar Builder Dashboard using React, TypeScript, and Tailwind CSS. This application features a game-like HUD (Heads-Up Display) for customizing characters in real-time.

## Features

- **Dynamic Avatar Preview**: Uses DiceBear API to generate high-quality SVG avatars based on state.
- **Custom HUD Interface**: A dark-themed, glassmorphism-inspired UI with top, left, and right navigation bars.
- **Real-time Customization**:
    - **Eyes**: Select from multiple expression styles.
    - **Hair & Skintones**: A gallery grid with 18+ unique combinations.
    - **Color Picker**: Change clothing/accessory colors with a professional-grade UI.
- **Responsive Layout**: Designed for large desktop screens (1600px+ width recommended).
- **Animations**: Implements Framer-motion inspired entry animations and hover effects using Tailwind's animation utilities.

## Prerequisites

- Node.js (v18.0.0 or higher)
- npm or yarn

## Installation

1. Clone or download the project files.
2. Navigate to the project directory in your terminal.
3. Install dependencies:
    npm install

## Running the Application

To start the development server:
    npm run dev

The application will be available at `http://localhost:5173`.

## Project Structure

- `src/components/`: Modular UI components.
    - `HUD.tsx`: The main game interface container.
    - `GalleryGrid.tsx`: Right-side panel for hair/skin options.
    - `ColorPicker.tsx`: Custom color selection component.
    - `InstructionCard.tsx`: Left-side requirements panel.
- `src/types.ts`: TypeScript interfaces for the avatar state.
- `src/App.tsx`: Main layout and state management.

## Technical Notes

- **Avatar Engine**: Powered by `@dicebear/avataaars`.
- **Icons**: Provided by `lucide-react`.
- **Styling**: 100% Tailwind CSS with custom configuration for brand colors.
- **State Management**: React `useState` for handling complex avatar configurations.

## Troubleshooting

- **Images not loading**: Ensure you have an active internet connection as the avatars are fetched from the DiceBear CDN.
- **Slow animations**: The UI uses CSS transitions; ensure your browser's hardware acceleration is enabled for the best experience.
