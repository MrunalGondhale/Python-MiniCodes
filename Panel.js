import React from 'react'
import Links from './Links';
import Social from './Social';
import '../style.css'


function Panel(props) {
    return (

        <div
        className={props.open 
          ? "menu-wrapper menu-open" 
          : "menu-wrapper"}
      >


        <Links 
          links={props.links} 
          open={props.open} 
        />
        <Social 
          socialLinks={props.socialLinks} 
          open={props.open}
        />
      </div>
    );
}

export default Panel



