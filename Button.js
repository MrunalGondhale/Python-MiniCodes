import React from 'react'
import '../style.css'


function Button(props) {
    return (
        <button 
        className={props.open 
          ? "menu-toggle close-button" 
          : "menu-toggle "}
        onClick={props.toggle}
      > <i className="fa fa-plus"></i>
      </button>

    )
}

export default Button
