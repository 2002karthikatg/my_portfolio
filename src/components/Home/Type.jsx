import React from 'react';
import Typewriter from 'typewriter-effect';

function Type() {
  return (
    <div>
    <Typewriter
    options ={{
        strings: ["Welcome to My Website", "I'm a MERN Stack Developer", "Software Developer", "Freelancer", "MERN Stack Developer", "Open Source Contributor"],
       autoStart:true,
        loop: true,
        startSpeed:50,
        deleteSpeed: 50,
        // delay: 2000,

    }}
    />

    
    
    </div>
  )
}

export default Type;