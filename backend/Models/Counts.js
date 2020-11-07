import mongoose from 'mongoose'

const schema = mongoose.Schema

const countSchema = new schema ({
    
    
    Count : {
        type : Number
    }
   

})

const Counts = mongoose.model('Counts', countSchema)

export  default Counts