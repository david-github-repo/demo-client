# Demo Client

A simple demonstration Minecraft client built with TypeScript that connects to offline servers using the Mineflayer library.

## ⚠️ Experimental Project

**This is an experimental project created for learning and testing purposes only.** It serves as a playground for exploring Minecraft bot development, pathfinding algorithms, and TypeScript automation patterns.

## What It Does

This demo client:

- Connects to a Minecraft server using the `mineflayer` library
- Uses pathfinding capabilities to navigate the world automatically
- Demonstrates basic bot movement in a square pattern
- Automatically disconnects after completing its path

## Features

- **Automated Movement**: Uses `mineflayer-pathfinder` for intelligent navigation
- **TypeScript Support**: Written in TypeScript with proper type safety
- **Build System**: Uses esbuild for fast compilation and bundling
- **Watch Mode**: Supports development with automatic rebuilding

## Prerequisites

- Node.js (version 16 or higher recommended)
- pnpm package manager

## Installation

1. Clone or download this project
2. Install dependencies:

   ```bash
   pnpm install
   ```

## Usage

### Development Mode (with watch)

```bash
pnpm run build:watch
```

Then run the built file:

```bash
node build/main.mjs
```

### Production Build

```bash
pnpm run build:prod
```

Then run:

```bash
node dist/main.cjs
```

## Configuration

The bot uses environment variables for configuration. Create a `.env` file in the root directory:

```env
HOST=server.com
PORT=25565
```

## Project Structure

```text
├── src/
│   └── main.ts          # Main bot logic
├── build/
│   └── main.mjs         # Development build output
├── dist/                # Production build output (created after build)
├── package.json         # Project configuration
├── tsconfig.json        # TypeScript configuration
└── pnpm-workspace.yaml  # pnpm workspace configuration
```

## Dependencies

- **mineflayer**: Core Minecraft bot framework
- **mineflayer-pathfinder**: Advanced pathfinding plugin
- **minecraft-protocol**: Low-level Minecraft protocol implementation

## Development Dependencies

- **esbuild**: Fast JavaScript bundler and minifier
- **TypeScript**: Type-safe JavaScript development

## Disclaimer

This project is for educational and experimental purposes only. Always ensure you have permission to connect bots to any Minecraft server, and respect server rules and terms of service.

## License

ISC
