const express = require('express');
const app = express();
const cors = require('cors');
const  { router } = require('./routes/queries.routes');
require('dotenv').config();


app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.use('/queriess', router);
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

app.listen( process.env.PORT, () => {
    console.log(`Server connected on port ${process.env.PORT} `);
} );
