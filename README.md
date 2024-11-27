# Dev Journal
A full-stack journal application built with Vite.js (React) for the frontend and Node.js for the backend.

## Tech Stack
- **Frontend**: Vite.js + React
- **Backend**: Node.js (hosted on Render)
- **Deployment**:
  - Frontend: Vercel
  - Backend: Render

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/kerenvr/dev-journal.git
    cd dev-journal
    ```

2. Install dependencies:
    - If you're using npm:
        ```bash
        npm install
        ```
    - Or if you're using yarn:
        ```bash
        yarn install
        ```

3. Start the development environment:
    - For the **frontend** (Vite + React):
        ```bash
        npm run dev
        # or
        yarn dev
        ```
        The frontend will be available at `http://localhost:5173`.

    - For the **backend** (Node.js):
        ```bash
        npm run server
        # or
        yarn server
        ```
        The backend will be available at `http://localhost:3000`.

### Environment Variables
Make sure to configure the following environment variables in your `.env` file:
- **Frontend**: You may need to set an API base URL (e.g., `VITE_API_URL=http://localhost:3000`).
- **Backend**: Configure any necessary environment variables such as database connections, API keys, etc.

### Deployment
- **Frontend**: Deploy the frontend to Vercel.
- **Backend**: Deploy the backend to Render.

Once deployed, the frontend will interact with the backend at the appropriate URL.

### Notes
- The Vite development server runs on port `5173` by default.
- The Node.js backend runs on port `3000` locally.
