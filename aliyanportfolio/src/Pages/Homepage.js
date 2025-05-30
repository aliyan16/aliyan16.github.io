import React from "react";

import About from '../components/About'
import Certificates from '../components/Certificates'
import Experience from '../components/Experience'
import Tools from '../components/Tools'


function HomePage(){
    return(
        <>
        <About/>
        <Tools/>
        <Experience/>
        <Certificates/>
        </>
    )
}

export default HomePage