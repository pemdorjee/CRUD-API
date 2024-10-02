import mongoose from 'mongoose';
import express from 'express'
import Productrouter from './routes/product.route.js';
const app = express ();
const PORT = 3000



app.use(express.json())

app.use('/api/products', Productrouter)

mongoose.connect('mongodb+srv://pemdorjee61:indonesia123@admin.pj4zekx.mongodb.net/?retryWrites=true&w=majority&appName=admin')
.then (() => {
    console.log('connected to the database')
    app.listen (PORT, () => {
        console.log ("server is listening on port :",PORT)
    })
    
})
.catch((error) => {
    console.log ('errror while loading : ', error)
})
