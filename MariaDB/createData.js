const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'node_js_root',
  password: 'node_js_root',
  database: 'careerPageDB'
});

connection.connect(err => {
  if (err) {
    return console.error('error connecting: ' + err.stack);
  }

  console.log('connected as id ' + connection.threadId);

  // 데이터 삽입 쿼리를 실행합니다. 실제 값으로 교체 필요
  const query = `INSERT INTO postedJobs (o, postDate, title) VALUES ('Agency', '2023-01-01', 'Sample Title')`;
  connection.query(query, (error, results, fields) => {
    if (error) {
      return console.error('An error occurred while executing the query', error);
    }

    console.log('Insertion result:', results);
  });

  connection.end();
});
