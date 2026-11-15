# ABCjs Music Studio

A self-hosted music editor built with **ABCjs**, **Vite** and **Node.js**. Write music using ABC notation, render traditional sheet music directly in your browser, and play melodies using the built-in ABCjs synthesizer.

## Features

- Live rendering of ABC notation into sheet music
- Text-based music editor
- Audio playback in the browser
- Play and stop controls
- Responsive sheet music display
- Docker-based development environment

## Technology Stack

| Component | Version |
|---|---|
| Node.js | 27.0.0 |
| Vite | 8.3.8 |
| ABCjs | 6.7.2 |
| Docker | Latest available |
| Docker Compose | V2 |

> **Note:** Node.js 27 is an experimental release. For a more stable environment, Node.js 26 LTS is recommended.

## Project Structure

```text
abcjs-music-studio/
├── Dockerfile
├── docker-compose.yml
├── package.json
├── package-lock.json
├── index.html
├── README.md
└── src/
    ├── main.js
    └── style.css
```

## Requirements

You need:

- Docker Engine
- Docker Compose V2
- Git (optional)

You do not need to install Node.js or ABCjs directly on your host machine when using Docker.

## Getting Started

### 1. Clone the repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd abcjs-music-studio
```

Alternatively, download the project and navigate into its directory.

### 2. Build the Docker image

```bash
docker compose build
```

### 3. Start the application

```bash
docker compose up -d
```

### 4. Open the application

Open your browser:

**http://localhost:5173**

You should now see the ABCjs Music Studio.

## Docker Commands

| Command | Description |
|---|---|
| `docker compose up -d` | Start the application |
| `docker compose down` | Stop the application |
| `docker compose build` | Build the Docker image |
| `docker compose up -d --build` | Rebuild and start |
| `docker compose logs -f` | Follow application logs |
| `docker compose restart` | Restart the application |
| `docker compose ps` | Show container status |

## Development

The application uses Vite as its development server.

When the project directory is mounted into the container, changes to JavaScript and CSS files are automatically detected.

Main development files:

- `src/main.js` – Application logic and ABCjs integration
- `src/style.css` – Application styling
- `index.html` – Main HTML entry point

### Install dependencies

If you need to add or update dependencies:

```bash
npm install
```

For a clean installation based on the lockfile:

```bash
npm ci
```

Rebuild the Docker image after changing dependencies.

## ABC Notation

ABC notation is a text-based format for describing musical compositions.

Example:

```abc
X:1
T:My First Tune
C:ABCjs Music Studio
M:4/4
L:1/8
K:C
C D E F | G A B c |
c B A G | F E D C |
```

### Basic ABC notation reference

| Symbol | Meaning |
|---|---|
| `X:` | Tune reference number |
| `T:` | Tune title |
| `C:` | Composer |
| `M:` | Time signature |
| `L:` | Default note length |
| `K:` | Musical key |
| `C D E F` | Musical notes |
| `\|` | Bar line |
| `z` | Rest |
| `^F` | F sharp |
| `_B` | B flat |
| `=F` | F natural |

For more information, see the [ABC notation standard](https://abcnotation.com/wiki/abc:standard:v2.1).

## Troubleshooting

### Container does not start

Check the container status:

```bash
docker compose ps
```

Inspect the logs:

```bash
docker compose logs -f
```

### Port 5173 is already in use

Change the port mapping in `docker-compose.yml`:

```yaml
ports:
  - "8080:5173"
```

The application will then be accessible at:

http://localhost:8080

### Dependencies are missing

Rebuild the application:

```bash
docker compose down
docker compose build --no-cache
docker compose up -d
```

### Audio playback does not work

- Check your browser's audio settings.
- Make sure you interact with the page before starting playback.
- Check the browser developer console for JavaScript errors.
- Try a modern browser with Web Audio API support.

## Useful Resources

- [ABCjs Official Website](https://abcjs.net/)
- [ABCjs Documentation](https://docs.abcjs.net/)
- [ABCjs GitHub Repository](https://github.com/paulrosen/abcjs)
- [Vite Documentation](https://vite.dev/)
- [Node.js](https://nodejs.org/)
- [ABC Notation Standard](https://abcnotation.com/wiki/abc:standard:v2.1)

## License

This project uses ABCjs, which is distributed under the MIT License.

Check the individual licenses of all dependencies before distributing the complete application.
