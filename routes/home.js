const express = require("express");
const router = new express.Router();

router.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Jobly Backend API</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 2rem; }
          h1 { color: #2c3e50; }
          a { color: #2980b9; }
        </style>
      </head>
      <body>
        <h1>Welcome to Jobly Backend API</h1>
        <p>This is the API backend for the Jobly app. Below are some available routes you can use:</p>
        <ul>
          <li><a href="/companies">/companies</a> - List and details of companies</li>
          <li><a href="/jobs">/jobs</a> - Job listings</li>
          <li><a href="/users">/users</a> - User profiles and info</li>
          <li><a href="/auth/login">/auth/login</a> - Login endpoint</li>
          <li><a href="/auth/register">/auth/register</a> - User registration</li>
        </ul>
        <p>Use these endpoints with a REST client or your frontend app.</p>
      </body>
    </html>
  `);
});

module.exports = router;
