INSERT INTO users
(user_name, email, img)
VALUES
($1, $2, $3)
RETURNING *;