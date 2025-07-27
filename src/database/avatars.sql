CREATE TABLE
    IF NOT EXISTS avatars (
        id SERIAL PRIMARY KEY,
        user_id UUID NOT NULL,
        url VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT now ()
    )