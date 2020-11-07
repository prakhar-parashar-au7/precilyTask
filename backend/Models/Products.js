import mongoose from 'mongoose'

const schema = mongoose.Schema

const productSchema = new schema ({
    
    
    ProductName : {
        type: String
    },

    Price : {
        type : Number
    },
     
    Quantity : {
        type : Number
    },

    isAvailable : {
        type : Boolean
    }
})

const Products = mongoose.model('Products', productSchema)

export  default Products