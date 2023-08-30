import React from 'react'
import {BsLinkedin,BsGithub,BsDribbble} from 'react-icons/bs'
function Header_Social({className}) {
  return (
    <div className={className}>
<a href="https://bd.linkedin.com/" target='_blank'>
    <BsLinkedin/>
</a>
<a href="https://github.com/jibonrahaman/" target='_blank'>
    <BsGithub/>
</a>
<a href="https://dribbble.com/shots" target='_blank'>
    <BsDribbble/>
</a>
    </div>
  )
}

export default Header_Social