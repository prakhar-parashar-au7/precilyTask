import { TextField , Button, Select, MenuItem} from '@material-ui/core'
import Axios from 'axios'
import React, {useState} from 'react'


const Main = () => {
    const [name, setName] = useState("demoProduct")
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const [isAvailable, setIsAvailable] = useState(true)
    const [addingNew, setAddingNew] = useState(false)
    const [updating, setUpdating] = useState(false)
    const [productId, setProductId] = useState("")
    const [apiCounts, setApiCounts] = useState(0)
    const [showApiCounts, setShowApiCounts] = useState(false)

const addProduct = () => {
    Axios({
        method : "post",
        url : 'http://localhost:8080/addProduct',
        data : {
            ProductName : name,
            Price : price,
            Quantity : quantity,
            isAvailable : isAvailable
        }
}).then((response) => {
    console.log(response)
    const {ProductName, Price, Quantity, isAvailable, _id} = response.data.product
    setName(ProductName)
    setPrice(Price)
    setQuantity(Quantity)
    setIsAvailable(isAvailable)
    setAddingNew(false)
    setProductId(_id)
})
}


const updateProduct = () => {
    Axios({
        method : "put",
        url : 'http://localhost:8080/updateProduct',
        data : {
            ProductName : name,
            Price : price,
            Quantity : quantity,
            isAvailable : isAvailable,
            productId : productId
        }

}).then((response) => {
    console.log(response)
    const {ProductName, Price, Quantity, isAvailable, _id} = response.data.updatedProduct
    setName(ProductName)
    setPrice(Price)
    setQuantity(Quantity)
    setIsAvailable(isAvailable)
    setUpdating(false)
    setProductId(_id)
})
}


const getApiCounts = () => {
    Axios({
        method : "get",
        url : "http://localhost:8080/getApiCounts"
    }).then((response) => {
        console.log(response)
        setApiCounts(response.data.counts)
        setShowApiCounts(true)
    })
}



    return(
        <div style= {{display : "grid", gridTemplateColumns : "auto auto"}}>
        <div>
    <p>Name : {(addingNew) ?  <TextField label="Name" variant="outlined"  onChange = {(e)=> setName(e.target.value)}/> 
          :
         (updating) ? <TextField label="Name" value={name} variant="outlined"  onChange = {(e)=> setName(e.target.value)}/> 
         :
         name}</p>


    <p>Price : {(addingNew ) ?  <TextField label="Price" variant="outlined"  onChange = {(e)=> setPrice(e.target.value)}/> 
    :
    (updating) ? <TextField label="Price" value={price} variant="outlined"  onChange = {(e)=> setPrice(e.target.value)}/> 
    :    
    `Rs${price}` }</p>


    <p>Quantity : {(addingNew) ?  <TextField label="Quantity" variant="outlined"  onChange = {(e)=> setQuantity(e.target.value)}/>
     :
     (updating) ? <TextField label="Quantity" value={quantity} variant="outlined"  onChange = {(e)=> setQuantity(e.target.value)}/> 
     :
      quantity}</p>


    <p>Is It available : { (addingNew ) ?  <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    onChange = {(e)=> {
                        if(e.target.value == "Yes"){
                            setIsAvailable(true)
                        }
                        if(e.target.value == "No"){
                            setIsAvailable(false)
                        }
                    }}>
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                   
                </Select> 
                :
                (updating) ?   <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value= {(isAvailable)?"Yes": "No"}
                onChange = {(e)=> {
                    if(e.target.value == "Yes"){
                        setIsAvailable(true)
                    }
                    if(e.target.value == "No"){
                        setIsAvailable(false)
                    }
                }}>
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
               
            </Select> 
                :
                
                (isAvailable) ? "Yes" : "No"}</p>
               { (addingNew) ?  <Button color="primary" variant="contained" onClick = {addProduct}>Add this</Button> 
               :
               (updating) ? <Button color="primary" variant="contained" onClick = {updateProduct}>Update this</Button> 
               :               
               null}
               {
            (showApiCounts)? 
               <h5>Api Counts : {apiCounts} so far</h5> : null }
    </div>
    <div style={{display : "grid", gridTemplateRows : "50px", gridGap : "20px", height : "200px"}}>
    <Button color="primary" variant="contained" onClick = {() => setAddingNew(true)}>Add New</Button>
    <Button color="primary" variant="contained" onClick = {() => setUpdating(true)}>Update</Button>
    <Button color="primary" variant="contained" onClick = {getApiCounts}>Counts</Button>
    </div>
    </div>
    )
}

export default Main