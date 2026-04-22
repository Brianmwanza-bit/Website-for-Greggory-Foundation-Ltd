const db = require('./backend/config/database');

const hash = '$2b$10$SQclxZ0iJhEYSCzHMruuS.GQZ5kW84SKjG3OZTqL0vKL1ue8Yv2r.';

db.query(
  "UPDATE admin_users SET password_hash = ? WHERE email = 'admin@greggoryfoundation.org'",
  [hash],
  (err, res) => {
    if (err) {
      console.error('Error:', err.message);
    } else {
      console.log('Password updated successfully:', res);
    }
    process.exit();
  }
);
