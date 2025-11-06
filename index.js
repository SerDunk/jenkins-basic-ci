const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static HTML
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Abhinav Srivatsa Kondapalli - Portfolio</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                color: #333;
                background: #f4f4f4;
                padding: 20px;
            }
            
            .container {
                max-width: 800px;
                margin: 0 auto;
                background: white;
                padding: 40px;
                border-radius: 10px;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            }
            
            header {
                text-align: center;
                margin-bottom: 30px;
                padding-bottom: 20px;
                border-bottom: 2px solid #333;
            }
            
            h1 {
                font-size: 2rem;
                margin-bottom: 5px;
            }
            
            .title {
                color: #666;
                font-size: 1.1rem;
            }
            
            .section {
                margin-bottom: 30px;
            }
            
            h2 {
                font-size: 1.5rem;
                margin-bottom: 15px;
                color: #333;
            }
            
            .skills {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
            }
            
            .skill {
                background: #333;
                color: white;
                padding: 8px 16px;
                border-radius: 5px;
                font-size: 0.9rem;
            }
            
            footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #ddd;
                color: #666;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <header>
                <h1>Abhinav Srivatsa Kondapalli</h1>
                <p class="title">SDE Intern @ JM Financial</p>
            </header>
            
            <div class="section">
                <h2>About</h2>
                <p>
                    Full Stack Developer specializing in modern web and mobile development.
                    Currently working on Flutter applications while building scalable web solutions with React and Next.js.
                </p>
            </div>
            
            <div class="section">
                <h2>Skills</h2>
                <div class="skills">
                    <span class="skill">React</span>
                    <span class="skill">Next.js</span>
                    <span class="skill">Flutter</span>
                    <span class="skill">Full Stack Development</span>
                    <span class="skill">JavaScript</span>
                    <span class="skill">Node.js</span>
                </div>
            </div>
            
            <footer>
                <p>&copy; 2025 Abhinav Srivatsa Kondapalli</p>
            </footer>
        </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`🚀 Portfolio server is running on http://localhost:${PORT}`);
});
