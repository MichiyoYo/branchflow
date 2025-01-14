# BranchFlow.dev

BranchFlow is an AI-powered task management tool that helps developers organize their thoughts and project ideas into structured tasks. Using voice input and AI analysis, it converts verbal project descriptions into organized, prioritized tasks that can be managed in a Kanban board interface.

## Features

- 🎙️ **Voice-to-Task Conversion**: Record your project ideas verbally
- 🤖 **AI Task Analysis**: Automatically break down projects into structured tasks
- 📋 **Smart Task Generation**: Get estimated times, priorities, and dependencies
- 📊 **Kanban Board**: Organize tasks in a drag-and-drop interface
- 💾 **Multiple Export Options**: Save tasks in various formats (JSON, Markdown)
- 🔄 **Different Views**: Switch between board, list, and timeline views

## Tech Stack

### Frontend

- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- shadcn/ui for UI components
- Framer Motion for animations
- React Router for navigation

### AI Integration

- Ollama for local AI processing
- llama2 model for task analysis

### Core Libraries

- `@dnd-kit` for drag-and-drop functionality
- `lucide-react` for icons
- `framer-motion` for animations
- `react-router-dom` for routing

## Getting Started

### Prerequisites

1. Install [Node.js](https://nodejs.org/) (version 16 or higher)
2. Install [Ollama](https://ollama.ai/)
3. Pull the llama2 model:
   ```bash
   ollama pull llama2
   ```

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/branchflow.git
   cd branchflow
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open http://localhost:5173 in your browser

## Project Structure

```
src/
├── components/
│   ├── ui/          # shadcn components
│   └── layout/      # Layout components (Header, Footer)
├── features/
│   ├── landing/     # Landing page
│   ├── brain-dump/  # Voice recording and AI analysis
│   ├── voice/       # Voice recording components
│   └── tasks/       # Task management and Kanban board
├── lib/            # Utilities and configurations
└── types/         # TypeScript types and interfaces
```

## Features in Development

- [ ] Task filtering and search
- [ ] Timeline view
- [ ] Project templates
- [ ] Task statistics and analytics
- [ ] Integration with project management tools
- [ ] Collaborative features
- [ ] Dark mode

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
