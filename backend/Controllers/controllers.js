import Products from '../Models/Products.js'
import Counts from '../Models/Counts.js'




const controller = {
  
    addProduct : (req, res) => {
       
         Counts.update({_id : "5fa634feee144b17ac1bf4e5"}, {$inc : {Count : 1}}, (err, count) => {})
            if(req.body.ProductName.length < 1 || req.body.ProductName == null) {
                res.json({
                    message : "Please provide valid name"
                })
            }

             Products.create(req.body).then((product, err) => {
                 
                 if(err) {
                     console.log(err)
                     res.status(404).send(err)
                 }
                 res.json ({
                     product : product 
                 })
             })
    },

    updateProduct : async (req, res) => {
        Counts.update({_id : "5fa634feee144b17ac1bf4e5"}, {$inc : {Count : 1}}, (err, count) => {})
       Products.findByIdAndUpdate(req.body.productId, {
            ProductName : req.body.ProductName,
            Price : req.body.Price,
            Quantity : req.body.Quantity,
            isAvailable : req.body.isAvailable
        },
        {new: true},
        (err,updatedProduct)=> {
         res.json({
             status : 200,
             updatedProduct : updatedProduct
         })
        })
       
    },

    getCounts : (req, res) => {
        Counts.find().then((counts, err) => {
          
            res.json({
                counts :counts[0].Count,
                status : 200
            })
        })
    }
    
}



export default controller