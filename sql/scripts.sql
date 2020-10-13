CREATE DATABASE sequelize;

CREATE TABLE IF NOT EXISTS users(
    id integer PRIMARY KEY,
    name text NOT NULL CHECK (name <> ''),
    lastname text CHECK (lastname <> ''),
    email text NOT NULL,
    password text not null,
    age INTEGER
);

CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY,
    name text NOT NULL CHECK (name <> ''),
    description text,
    priority INTEGER,
    userid INTEGER REFERENCES users(id)
);

-- list al tables
\dt

-- list all data in users table
SELECT * FROM users;

-- INSERT TEST DATA FOR users
INSERT INTO users(id, name, lastname, email, password, age)
    VALUES (321312, 'Luca', 'Becci', 'lucabecci@fakeemail.com', 'pepito22', 20 );

INSERT INTO users(id, name, lastname, email, password, age)
    VALUES (231545, 'Carlos', 'Suarez', 'sCarlos@fakeemail.com', 'adjo22', 30 );

INSERT INTO users(id, name, lastname, email, password, age)
    VALUES (321455, 'Marcos', 'Gutierrez', 'marcos@fakeemail.com', '12331', 19 );

-- INSERT TEST DATA FOR tasks
INSERT INTO tasks(id, name, description, priority, userid)
    VALUES(1, 'download Vuejs', 'this is a desc', 2, 321312);

INSERT INTO tasks(id, name, description, priority, userid)
    VALUES(2, 'download Husky', 'this is a desc2', 1, 321312);

INSERT INTO tasks(id, name, description, priority, userid)
    VALUES(3, 'download React', 'this is a desc', 2, 231545);

INSERT INTO tasks(id, name, description, priority, userid)
    VALUES(4, 'download Eslint', 'this is a desc2', 1, 231545);

select * from tasks;

select * from tasks where userid = 321312;