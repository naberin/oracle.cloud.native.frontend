const express = require('express')
const app = express()
const port = process.env.port ? process.env.port : 3000;

const healthRoutes = require('./routes/health');


app.use('/health', healthRoutes);

app.listen(port, () => {
    console.log(`Application running at http://localhost:${port}`)
})
