import React, { useState } from 'react'
import Panel from './Panel'
import Button from './Button'
import '../style.css'

function Menu() {
    

    const [open , setOpen]=useState(false)



const toggleMenu = () => {
    setOpen(!open)
}

const linksArray = [
    { name: "home", url: "#" },
  { name: "log in", url: "#" },
  { name: "photos", url: "#" },
  { name: "contact", url: "#" },
  { name: "download", url: "#" }
];


const socialArray = [
    {
    icon: "fa fa-github-square", 
    url: "https://github.com/matthewvincent"
  },{
    icon: "fa fa-instagram", 
    url: "https://www.instagram.com/middlestates/"
  },{
    icon: "fa fa-tumblr-square", 
    url: "http://matthewvincentphotography.com/"
  }
];

return (


    <div>
    <Panel 
   open={open} 
   links={linksArray} 
   socialLinks={socialArray}
 />
 <Button 
   toggle={toggleMenu} 
   open={open} 
 />
</div>
    )
}

export default Menu
