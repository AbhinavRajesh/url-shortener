CREATE DATABASE urlshortner;

CREATE TABLE urls(
    url_id SERIAL PRIMARY KEY,
    url VARCHAR(255)
);