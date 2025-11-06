# Portfolio Site

A basic portfolio website built with Express.js and Node.js.

## Features

- Clean and modern design
- Responsive layout
- Animated UI elements
- Dockerized for easy deployment

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Docker (optional, for containerized deployment)

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the application:

```bash
npm start
```

3. Open your browser and navigate to:

```
http://localhost:3000
```

## Docker Deployment

### Build the Docker image:

```bash
docker build -t portfolio-site .
```

### Run the container:

```bash
docker run -p 3000:3000 portfolio-site
```

### Or use a custom port:

```bash
docker run -p 8080:3000 -e PORT=3000 portfolio-site
```

## Customization

Edit the `index.js` file to customize:

- Your name and title
- About section
- Skills
- Projects
- Contact information
- Colors and styling

## License

ISC
