# InnoDuo_Honors

This is the record management system for honors students at Caldwell University.

## Local setup

This project runs with local Node installs in `backend/` and `frontend/`.

1. Copy `backend/.env.example` to `backend/.env` and fill in your MongoDB and email credentials.
2. Start MongoDB locally, or point `ENV_URI` at your MongoDB instance.
3. Run the backend:

```bash
cd backend
npm install
npm start
```

4. Run the frontend in a second terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend talks to the backend at `http://localhost:3000`.
