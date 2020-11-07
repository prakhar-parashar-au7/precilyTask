import express from 'express'
import bodyparser from 'body-parser'
import './Models/db_connect.js'
import controller from './Controllers/controllers.js'
import cors from 'cors'


const app = express()

app.use(express.json())
app.use(bodyparser.urlencoded({extended: true}))
app.use(cors())

// To add new data
 app.post('/addProduct', controller.addProduct)

 // To update the data
 app.put('/updateProduct', controller.updateProduct)

 // To get Api counts
 app.get('/getApiCounts', controller.getCounts)

app.listen(process.env.PORT||8080, () => {
    console.log('Server listening on port 8080')
})

