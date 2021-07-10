import React from 'react'
import '../style.css'


function Links(props) {


    const linkList = props.links.map((link) => (
        <li className="link">
          <a href={link.url}>{link.name}</a>
        </li>
      ));
    return (
        <div 
        className={props.open 
          ? "links-wrapper"
          : "links-wrapper links-wrapper-closed"}
      >
          {console.log(props.links)}
           <ul className="link-list">
              {linkList}
        </ul>
      </div>
    )
}

export default Links
