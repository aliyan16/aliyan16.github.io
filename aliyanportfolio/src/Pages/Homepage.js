import React from "react";

import About from '../components/About'
import Certificates from '../components/Certificates'
import Experience from '../components/Experience'
import Tools from '../components/Tools'
import Layout from "../components/layout";
import Contact from "../components/Contact";


function HomePage(){
    return(
        <>
        <Layout>
            <About/>
            <Tools/>
            <Experience/>
            {/* <Certificates/> */}
            <Contact/>
            
        </Layout>
        </>
    )
}

export default HomePage