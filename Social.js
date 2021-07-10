import React from 'react'
import '../style.css'


function Social(props) {


    const socialLinks = props.socialLinks.map((link) => (
        <a href={link.url}>
          <i className= {link.icon} />
        </a>
      ));
  
    return (
        <div 
        className={props.open 
          ? "social-wrapper social-open"
          : "social-wrapper social-closed"}
      > {socialLinks}
      </div>
    )
}

export default Social
