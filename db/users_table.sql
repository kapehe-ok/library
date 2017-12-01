CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    user_name TEXT,
    email TEXT,
    img TEXT,
    auth_id TEXT
)