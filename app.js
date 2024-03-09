const path = require('path');

const express = require('express');

const mainRoutes = require('./routes/index');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(mainRoutes);

app.listen(4000,()=>{
    console.log('Server running on port 4000...');
});