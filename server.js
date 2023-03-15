const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const connectToDatabase = require('./models/index');
const path = require('path')
const colors = require('colors')
const router = require("./routes/routes")
const cors = require('cors')
const morgan = require('morgan')
//const sendmail = require('./routes/sendmail')
const errorHadler = require('./middleware/error');

// Load env vars
dotenv.config({path:'./config/config.env'})

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 4003

app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname,'/public'))
app.use( express.static( 'views' ) );

//Dev logging middleware
app.use(morgan('dev'));

app.use(cors({
    origin: " " //or your netlify domain 
})) 

app.use(express.urlencoded({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());



app.use('/', router)
//app.use('/api/v1/contacts'contacts)
//app.use('/api/v1/hotelcontact', hotelcontact)
app.use(errorHadler)    

//CONNECTINT TO DATA BASE
 connectToDatabase( {
             useNewUrlParser: true, useUnifiedTopoology: true 
        })
 .then((error) => {
    if (error) {
        console.log(error)
        return process.exit(1)
    }
    app.listen(PORT, () => {
    console.log(`Server is set up on port ${PORT}`.yellow.bold)
});

});



/* const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const connectToDatabase = require('./models/index');
const path = require('path')
const colors = require('colors')
const router = require("./routes/routes")
const cors = require('cors')
const sendmail = require('./routes/sendmail')
//const sendmail = require('./routes/sendmail')
const books = require('./routes/books');
const contacts = require('./routes/contacts');
const hotelcontact = require('./routes/hotelcontact');
const errorHadler = require('./middleware/error');

// Load env vars
dotenv.config({path:'./config/config.env'})

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 4003

app.set('view engine', 'ejs');

app.use(cors({
    origin: "https://fc-portfolio01.onrender.com" //or your netlify domain 
})) 

app.use(express.urlencoded({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());



app.use('/', router)
//app.use('/api/v1/contacts'contacts)
//app.use('/api/v1/hotelcontact', hotelcontact)
app.use(errorHadler)    

//CONNECTINT TO DATA BASE
 connectToDatabase( {
             useNewUrlParser: true, useUnifiedTopoology: true 
        })
 .then((error) => {
    if (error) {
        console.log(error)
        return process.exit(1)
    }
    app.listen(PORT, () => {
    console.log(`Server is set up on port ${PORT}`.yellow.bold)
});

}); */