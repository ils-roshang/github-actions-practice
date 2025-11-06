// Import required modules
const express = require('express');
const app = express();

// Define port (default: 8080)
const PORT = process.env.PORT || 8080;

// Root route
app.get('/', (req, res) => {
  const html = `
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CI/CD Workflow by Roshan Gawande 🚀</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #007BFF, #6f42c1);
            color: white;
            text-align: center;
          }
          h1 {
            font-size: 2.8rem;
            margin-bottom: 0.5rem;
          }
          h2 {
            font-size: 1.5rem;
            margin: 0.2rem 0 1.5rem 0;
            opacity: 0.9;
          }
          .section {
            background: rgba(255, 255, 255, 0.1);
            padding: 20px 40px;
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.2);
            width: 80%;
            max-width: 600px;
            margin: 10px 0;
          }
          .tools {
            list-style: none;
            padding: 0;
          }
          .tools li {
            background: rgba(0,0,0,0.2);
            margin: 8px 0;
            padding: 10px;
            border-radius: 10px;
            font-weight: 500;
          }
          footer {
            position: absolute;
            bottom: 20px;
            font-size: 0.9rem;
            opacity: 0.7;
          }
        </style>
      </head>
      <body>
        <h1>🚀 Hell!!n!</h1>
        <h2>Automated CI/CD Workflow</h2>

        <div class="section">
          <h3>🔧 Pipeline Steps</h3>
          <ul class="tools">
            <li>🧠 CodeQL</li>
            <li>📦 npm audit</li>
            <li>🐳 Trivy</li>
            <li>🚀 gcloud run deploy</li>
          </ul>
        </div>

        <div class="section">
          <h3>👨‍💻 Developed by</h3>
          <p><strong>Roshan Gawande</strong></p>
        </div>

        <footer>Node.js Express • GitHub Actions • Cloud Run • Port ${PORT}</footer>
      </body>
    </html>
  `;
  res.send(html);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
