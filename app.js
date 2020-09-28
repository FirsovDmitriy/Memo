const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const memoRoutes = require('./routes/memo');
const path = require('path');

const app = express();


const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, 'public')));


app.use(memoRoutes); // Новый мидлвейр

const PORT = config.get('port') || 5000

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })

        app.listen(PORT, () => console.log(`The server has started on port ${PORT}...`));

    } catch (err) {
        console.log('Server Error', err.message);
        process.exit(1);
    }
}

start();

