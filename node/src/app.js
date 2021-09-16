const express = require('express')
const app = express()
const port = process.env.PORT ? process.env.PORT : 5000;
const version = process.env.VERSION ? process.env.VERSION : 'Unknown';

const healthRoutes = require('./routes/health');

// const blogRoutes = require('');
// const newsRoutes = require('');

app.use('/health', healthRoutes);
// app.use('/api/blogs', blogRoutes);
// app.use('/api/news', newsRoutes);

app.listen(port, () => {
    console.log(
        "---------------------------------" + "\n" +
        "Listener on http://localhost" + `:${port}` + "\n" +
        "Version: " + version + "\n" +
        "---------------------------------"
    );
})
