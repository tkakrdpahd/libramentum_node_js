CREATE DATABASE careerPageDB;

CREATE USER 'node_js_root'@'localhost' IDENTIFIED BY 'node_js_root';

CREATE TABLE postedJobs(
    idx INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    o ENUM('Agency', 'Production'), -- 0 == Agency, 1 == Production
    postDate DATE, -- posted date
    title VARCHAR(255) -- job title
);
