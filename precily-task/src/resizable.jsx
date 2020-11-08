import React, { useState } from 'react'
import Main from './Main'


function ResizableComponents() {

  // states used in the component

  const [gridAreaVertical, setGridAreaVertical] = useState({ display: "grid", gridGap: "20px", gridTemplateRows: "320px 130px", height: "500px", marginLeft: "20px" })
  const [gridAreaHorizontal, setGridAreaHorizontal] = useState({ display: "grid", gridTemplateColumns: "750px 230px", width: "1000", gridGap: "20px" })
  const [change, setChange] = useState(false)
  const [height1div, setHeight1Div] = useState(250)
  const [width1div, setWidth1Div] = useState(750)
  const [width2div, setWidth2Div] = useState(230)
  const [height3div, setHeight3Div] = useState(200)


  // styles
  let div1Style = {
    cursor: "auto",
    marginTop: "20px",
    marginBottom: "20px",
    position: "relative",
    overflow: "hidden"

  }

  let div2Style = {
    position: "relative",
    marginTop: "20px",
    marginBottom: "20px",
    cursor: "auto",
    overflow: "hidden"
  }

  let div3Style = {
    position: "relative",
    width: "1000px",
    cursor: "auto",
    overflow: "hidden"
  }



  // functions used to change the size of components within on a side being dragged
  


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
    const offSetXRelative = width2div - e.nativeEvent.offsetX
    setWidth2Div(offSetXRelative)
    const newGridArea = `${980 - offSetXRelative}px ${offSetXRelative}px`
    setGridAreaHorizontal({ ...gridAreaHorizontal, gridTemplateColumns: newGridArea })
    setChange(true)
  }

  const dragEnded4 = (e) => {
    console.log(e.nativeEvent.offsetY)
    const offSetYRelative = height3div - e.nativeEvent.offsetY
    setHeight3Div(offSetYRelative)
    const newGridArea = `${450 - offSetYRelative}px ${offSetYRelative}px`
    setGridAreaVertical({ ...gridAreaVertical, gridTemplateRows: newGridArea })
    setChange(true)
  }

 


  return (
    <div style={gridAreaVertical}>

      <div style={gridAreaHorizontal}>




        {/* component1 */}
        <div style={div1Style} >


          <div style={{ width: "100%", height: "2px", float: "Top", backgroundColor: "black", zIndex: "1", cursor: "n-resize" }} draggable="true" >

          </div>

          <div style={{ height: "100%", width: "2px", float: "left", backgroundColor: "black", zIndex: "1", cursor: "e-resize" }} draggable="true" onDragEnd={dragEnded3}>

          </div>

          <div draggable="true" style={{ height: "100%", width: "2px", float: "right", backgroundColor: "black", zIndex: "1", cursor: "e-resize" }} onDragEnd={dragEnded2}>

          </div>
          <div draggable="true" style={{ width: "100%", height: "2px", backgroundColor: "black", zIndex: "1", position: "absolute", bottom: "0", cursor: "n-resize" }}
            onDragEnd={dragEnded1}>

          </div>
          <div style={{ marginLeft: "30px" }}>
            <Main />
          </div>
        </div>


       {/* component2 */}

        <div style={div2Style} >

          <div style={{ height: "100%", width: "2px", float: "right", backgroundColor: "black", zIndex: "1" }}>

          </div>
          <div style={{ width: "100%", height: "2px", position: "absolute", bottom: "0", backgroundColor: "black", zIndex: "1", cursor: "n-resize" }} draggable="true" onDragEnd={dragEnded1}>

          </div>

          <div style={{ width: "100%", height: "2px", float: "Top", backgroundColor: "black", zIndex: "1" }}>

          </div>

          <div style={{ height: "100%", width: "2px", float: "left", backgroundColor: "black", zIndex: "1", cursor: "e-resize" }} draggable="true" onDragEnd={dragEnded3}>

          </div>
          <div style={{ fontSize: "12px" }}>
            <p>All components can be resized by dragging their sides.</p>
            <p>Click add new to add new product.</p>
            <p>Click update to update the current product(demoProduct cannot be updated)</p>
            <p>Click Api counts to seet times these Apis have been hit </p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTI3Hbb6Ka0jyRrv0iDctoSmArgaw_41ssDA" height="100px" width="100px" alt="" />
          </div>
        </div>


      </div>



 {/* component3 */}

      <div style={div3Style} >
        <div style={{ height: "100%", width: "2px", float: "right", display: "inline", backgroundColor: "black", zIndex: "1" }}>

        </div>

        <div style={{ width: "100%", height: "2px", position: "absolute", display: "inline", bottom: "0", backgroundColor: "black", zIndex: "1" }}>

        </div>

        <div style={{ width: "100%", height: "2px", float: "Top", backgroundColor: "black", zIndex: "1", cursor: "n-resize" }} draggable="true" onDragEnd={dragEnded4}>

        </div>


        <div style={{ height: "100%", width: "2px", float: "left", display: "inline", backgroundColor: "black", zIndex: "1", marginRight: "10px" }}>

        </div>
        <div style={{ width: "400px", marginLeft: "50px", display: "inline", position: "relative", }}>
          <h4>Draggable Components</h4>
        If something breaks, please consider and refresh the page to try again.
        If something breaks, please consider and refresh the page to try again.
        </div>
      </div>

    </div>

  )
}

export default ResizableComponents;
