import React from 'react'
import ToolsCss from './Tools.module.css'
function Tools() {
  return (
    <div className={ToolsCss.head}>
        <button className={ToolsCss.btn1}>Request for Call</button>
        <button className={ToolsCss.btn2}>Request for Meet</button>
        <button className={ToolsCss.btn3}>Check analysis</button>
    </div>
  )
}

export default Tools