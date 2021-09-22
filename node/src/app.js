const express = require('express')
const app = express()
const port = process.env.PORT ? process.env.PORT : 5000;
const version = process.env.VERSION ? process.env.VERSION : 'Unknown';

const healthRoutes = require('./routes/health');

app.use('/health', healthRoutes);


app.listen(port, () => {
    console.log(
        "---------------------------------" + "\n" +
        "Listener on http://localhost" + `:${port}` + "\n" +
        "Version: " + version + "\n" +
        "---------------------------------"
    );
})
