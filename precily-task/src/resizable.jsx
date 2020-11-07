import react, { useState } from 'react'
import Main from './Main'
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom'

function ResizableComponents() {


  const [gridAreaVertical, setGridAreaVertical] = useState({ display: "grid", gridGap: "20px", gridTemplateRows: "250px 200px", height: "500px" })
  const [gridAreaHorizontal, setGridAreaHorizontal] = useState({ display: "grid", gridTemplateColumns: "750px 230px", width: "1000", gridGap: "10px" })
  const [offsetterX, setOffsetX] = useState(0)
  const [offsetterY, setOffsetY] = useState(0)
  const [change, setChange] = useState(false)
  const [height1div, setHeight1Div] = useState(250)
  const [width1div, setWidth1Div] = useState(750)
  const [width2div, setWidth2Div] = useState(230)
  const [height3div, setHeight3Div] = useState(200)


  let div1Style = {
    borderLeft : "2px solid black",
    borderTop : "2px solid black",
    cursor: "auto",
    margin: "20px",
    position: "relative",
    marginLeft: "10px"
  }

  let div2Style = {
    
    position: "relative",
    cursor: "auto",



  }

  let div3Style = {
    
    position: "relative",
    width: "1000px",
    cursor: "auto"

  }




  const dragEnded1 = (e) => {

    console.log(e.nativeEvent.offsetY)
    const offSetYRelative = e.nativeEvent.offsetY + height1div
    setHeight1Div(offSetYRelative)
    const newGridArea = `${offSetYRelative}px ${450 - offSetYRelative}px`

    setGridAreaVertical({ ...gridAreaVertical, gridTemplateRows: newGridArea })
    setChange(true)
  }

  const dragEnded2 = (e) => {


    const offSetXRelative = e.nativeEvent.offsetX + width1div
    setWidth1Div(offSetXRelative)
    const newGridArea = `${offSetXRelative}px ${980 - offSetXRelative}px`

    setGridAreaHorizontal({ ...gridAreaHorizontal, gridTemplateColumns: newGridArea })
    setChange(true)
  }


const dragEnded3 = (e) => {
  const offSetXRelative = width2div-e.nativeEvent.offsetX 
  setWidth2Div(offSetXRelative)
  const newGridArea = `${980-offSetXRelative}px ${offSetXRelative}px`
  setGridAreaHorizontal({ ...gridAreaHorizontal, gridTemplateColumns: newGridArea })
  setChange(true)
}

const dragEnded4 = (e) => {
  console.log(e.nativeEvent.offsetY)
  const offSetYRelative =   height3div-e.nativeEvent.offsetY
  setHeight3Div(offSetYRelative)
  const newGridArea = `${450-offSetYRelative}px ${offSetYRelative}px`
  setGridAreaVertical({ ...gridAreaVertical, gridTemplateRows: newGridArea })
    setChange(true)
}



  return (
    <div style={gridAreaVertical}>


      <div style={gridAreaHorizontal}>






        <div style={div1Style} >
          
          <div draggable="true" style={{ height: "100%", width: "2px", float: "right", backgroundColor: "black", zIndex: "1", cursor: "e-resize" }} onDragEnd={dragEnded2}>

          </div>
          <div draggable="true" style={{ width: "100%", height: "2px", backgroundColor: "black", zIndex: "1", position: "absolute", bottom: "0", cursor: "n-resize" }}
            onDragEnd={dragEnded1}>

          </div>
          <h4>Hi, might not work on safari,  please try on google chrome if it doesn't.</h4>
          <Link to="/partTwo"><Button color="primary" variant = "contained">Click here for 2nd part</Button></Link>
         
        </div>




        <div style={div2Style} >
 
          <div style={{ height: "100%", width: "2px", float: "right", backgroundColor: "black", zIndex: "1" }}>
         
          </div>
          <div style={{ width: "100%", height: "2px", position: "absolute", bottom: "0", backgroundColor: "black", zIndex: "1", cursor : "n-resize" }} draggable = "true" onDragEnd = {dragEnded1}>

          </div>
          
          <div style={{ width: "100%", height: "2px", float: "Top", backgroundColor: "black", zIndex: "1" }}>

          </div>
          only inner sides work as of now 
          <div style={{ height: "100%", width: "2px", float: "left", backgroundColor: "black", zIndex: "1", cursor : "e-resize" }} draggable = "true" onDragEnd = {dragEnded3}>

          </div>
        </div>


      </div>





      <div style={div3Style} >
        <div style={{ height: "100%", width: "2px", float: "right", backgroundColor: "black", zIndex: "1" }}>

        </div>
        <div style={{ width: "100%", height: "2px", position: "absolute", bottom: "0", backgroundColor: "black", zIndex: "1" }}>

        </div>
        <div style={{ width: "100%", height: "2px", float: "Top", backgroundColor: "black", zIndex: "1", cursor : "n-resize" }} draggable = "true" onDragEnd = {dragEnded4}>

        </div>
        If something breaks, please consider and refresh the page to try again. 
        <div style={{ height: "100%", width: "2px", float: "left", backgroundColor: "black", zIndex: "1" }}>

        </div>
      </div>

    </div>

  )
}

export default ResizableComponents;
