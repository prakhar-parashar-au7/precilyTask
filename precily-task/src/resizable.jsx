import React, { useState } from 'react'
import Main from './Main'


function ResizableComponents() {

  // states used in the component

  const [gridAreaVertical, setGridAreaVertical] = useState({ display: "grid", gridGap: "20px", gridTemplateRows: "320px 130px", height: "500px", marginLeft: "20px" })
  const [gridAreaHorizontal, setGridAreaHorizontal] = useState({ display: "grid", gridTemplateColumns: "0px 750px 210px", width: "1000", gridGap: "20px" })
  const [change, setChange] = useState(false)
  const [height1div, setHeight1Div] = useState(320)
  const [width1div, setWidth1Div] = useState(750)
  const [width2div, setWidth2Div] = useState(210)
  const [height3div, setHeight3Div] = useState(130)
  const [widthDummyDiv, setWidthDummyDiv] = useState(0)

  // styles

  



  let div1Style = {
    cursor: "auto",
    marginTop: "20px",
    marginBottom: "20px",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 0 15px 1px rgba(0, 0, 0, 0.6)",
    background: "-webkit-linear-gradient(to right, #1c92d2, #f2fcfe)", /* Chrome 10-25, Safari 5.1-6 */
    background: "linear-gradient(to right, #1c92d2, #f2fcfe)"

  }

  let div2Style = {
    position: "relative",
    marginTop: "20px",
    marginBottom: "20px",
    cursor: "auto",
    overflow: "hidden",
    boxShadow: "0 0 15px 1px rgba(0, 0, 0, 0.6)",
background: "-webkit-linear-gradient(to right, #0ED2F7, #B2FEFA)",  /* Chrome 10-25, Safari 5.1-6 */
background: "linear-gradient(to right, #0ED2F7, #B2FEFA)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  }

  let div3Style = {
    position: "relative",
    width: "1000px",
    cursor: "auto",
    overflow: "hidden",
    boxShadow: "0 0 15px 1px rgba(0, 0, 0, 0.6)",
    background: "-webkit-linear-gradient(to right, #2F80ED, #56CCF2)",  /* Chrome 10-25, Safari 5.1-6 */
    background: "linear-gradient(to right, #2F80ED, #56CCF2)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    

  }



  // functions used to change the size of components within on a side being dragged
  

  const dragEnded1B = (e) => {
  

    const offSetXRelative = e.nativeEvent.offsetX + width1div
  
    setWidth1Div(offSetXRelative)
    setWidth2Div(980-offSetXRelative)
    const newGridArea = `0px ${offSetXRelative}px ${980 - offSetXRelative}px`
   
    setGridAreaHorizontal({ ...gridAreaHorizontal, gridTemplateColumns: newGridArea })
    setChange(!change)
  }




  const dragEnded1C = (e) => {

    console.log(e.nativeEvent.offsetY)
    const offSetYRelative = e.nativeEvent.offsetY + height1div
    console.log(offSetYRelative)
    setHeight1Div(offSetYRelative)
    setHeight3Div(450-offSetYRelative)
    const newGridArea = `${offSetYRelative}px ${450 - offSetYRelative}px`
    setGridAreaVertical({ ...gridAreaVertical, gridTemplateRows: newGridArea })
    setChange(!change)
  }

  
  const dragEnded1D = (e) => {
    if (e.nativeEvent.offsetX > 0 || widthDummyDiv > 0) {
      console.log(e.nativeEvent.offsetX)
     const offSetXRelative = width1div - e.nativeEvent.offsetX
     console.log(offSetXRelative)
     setWidth1Div(offSetXRelative)
     setWidthDummyDiv(e.nativeEvent.offsetX + widthDummyDiv)
     const newGridArea = `${e.nativeEvent.offsetX+widthDummyDiv}px ${offSetXRelative}px ${width2div}px`
     setGridAreaHorizontal({...gridAreaHorizontal, gridTemplateColumns : newGridArea})   
     setChange(!change) 
    } 
   
  }  


  const dragEnded2C = (e) => {

    console.log(e.nativeEvent.offsetY)
    const offSetYRelative = e.nativeEvent.offsetY + height1div
    console.log(offSetYRelative)
    setHeight1Div(offSetYRelative)
    setHeight3Div(450-offSetYRelative)
    const newGridArea = `${offSetYRelative}px ${450 - offSetYRelative}px`
    setGridAreaVertical({ ...gridAreaVertical, gridTemplateRows: newGridArea })
    setChange(!change)
  }



  const dragEnded2D = (e) => {
    
    const offSetXRelative = width2div - e.nativeEvent.offsetX
  
    setWidth2Div(offSetXRelative)
    setWidth1Div(980-offSetXRelative)
    const newGridArea = `0px ${980 - offSetXRelative}px ${offSetXRelative}px`
   
    setGridAreaHorizontal({ ...gridAreaHorizontal, gridTemplateColumns: newGridArea })
    setChange(!change)
  }

  const dragEnded3A = (e) => {
    
    const offSetYRelative = height3div - e.nativeEvent.offsetY
    setHeight3Div(offSetYRelative)
    setHeight1Div(450-offSetYRelative)
    const newGridArea = `${450 - offSetYRelative}px ${offSetYRelative}px`
    setGridAreaVertical({ ...gridAreaVertical, gridTemplateRows: newGridArea })
    setChange(!change)
  }




  return (
    <div style={gridAreaVertical}>

      <div style={gridAreaHorizontal}>


        <div>

        </div>

        {/* component1 */}
        <div style={div1Style} >


          <div style={{ width: "100%", height: "2px", float: "Top", backgroundColor: "black", zIndex: "1", cursor: "n-resize" }} draggable="true" >

          </div>

          <div draggable="true" style={{ height: "100%", width: "2px", float: "right", backgroundColor: "black", zIndex: "1", cursor: "e-resize" }} onDragEnd={dragEnded1B}>

          </div>

          <div draggable="true" style={{ width: "100%", height: "2px", backgroundColor: "black", zIndex: "1", position: "absolute", bottom: "0", cursor: "n-resize" }} onDragEnd={dragEnded1C}>

          </div>

          <div style={{ height: "100%", width: "2px", float: "left", backgroundColor: "black", zIndex: "1", cursor: "e-resize" }} draggable="true" onDragEnd={dragEnded1D}>

          </div>

          
         
          <div style={{ marginLeft: "30px" }}>
            <Main />
          </div>
        </div>


       {/* component2 */}

        <div style={div2Style} >

        <div style={{ width: "100%", height: "2px", float: "Top", backgroundColor: "black", zIndex: "1" }}>

        </div>

          <div style={{ height: "100%", width: "2px", float: "right", backgroundColor: "black", zIndex: "1" }}>

          </div>
          <div style={{ width: "100%", height: "2px", position: "absolute", bottom: "0", backgroundColor: "black", zIndex: "1", cursor: "n-resize" }} draggable="true" onDragEnd={dragEnded2C}>

          </div>

          

          <div style={{ height: "100%", width: "2px", float: "left", backgroundColor: "black", zIndex: "1", cursor: "e-resize" }} draggable="true" onDragEnd={dragEnded2D}>

          </div>
          <div style={{ fontSize: "12px" }}>
            <p>All components can be resized by dragging their sides.</p>
            <p>Click add new to add new product.</p>
            <p>Click update to update the current product(demoProduct cannot be updated)</p>
            <p>Click Api counts to see no. of times these APIs have been hit </p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTI3Hbb6Ka0jyRrv0iDctoSmArgaw_41ssDA" height="100px" width="100px" alt="" />
          </div>
        </div>


      </div>



 {/* component3 */}

  
      

      <div style={div3Style} >

      <div style={{ width: "100%", height: "2px", float: "Top", backgroundColor: "black", zIndex: "1", cursor: "n-resize" }} draggable="true" onDragEnd={dragEnded3A}>

       </div>
        <div style={{ height: "100%", width: "2px", float: "right", display: "inline", backgroundColor: "black", zIndex: "1" }}>

        </div>

        <div style={{ width: "100%", height: "2px", position: "absolute", display: "inline", bottom: "0", backgroundColor: "black", zIndex: "1" }}>

        </div>

        <div style={{ height: "100%", width: "2px", float: "left", display: "inline", backgroundColor: "black", zIndex: "1", marginRight: "10px" }}>

        </div>
        <div style={{ width: "400px", marginLeft: "50px", display: "inline", position: "relative", }}>
          <h4>Draggable Components</h4>
        If something breaks, please consider and refresh the page to try again.
        </div>
      </div>

    </div>


  )
}

export default ResizableComponents;
