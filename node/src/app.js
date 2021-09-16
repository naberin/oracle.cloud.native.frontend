const express = require('express')
const app = express()
const port = process.env.port ? process.env.port : 3000;

const healthRoutes = require('./routes/health');

// const blogRoutes = require('');
// const newsRoutes = require('');

app.use('/health', healthRoutes);
// app.use('/api/blogs', blogRoutes);
// app.use('/api/news', newsRoutes);

app.listen(port, () => {
    console.log(`Application running at http://localhost:${port}`)
})
