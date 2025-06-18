import React from 'react'
import Layout from '../components/layout'

function ServicesPage() {
  return (
    <>
    <Layout>
        <div>
            <h4>My Services</h4>
            <div className="experience-grid">
                    <div className="experience-card">
                        <div className="experience-content">
                            <img src={FiverrImg} alt="Fiverr" className="experience-icon" />
                            <div className="experience-details">
                                <h4>Web Developer</h4>
                                <p>2023 - Present</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="experience-card">
                        <div className="experience-content">
                            <img src={ComppecImg} alt="Comppec" className="experience-icon" />
                            <div className="experience-details">
                                <h4>Director Web & IT</h4>
                                <p>Jan 2025 - Jun 2025</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="experience-card">
                        <div className="experience-content">
                            <img src={ComppecImg} alt="Comppec" className="experience-icon" />
                            <div className="experience-details">
                                <h4>Deputy Director Marketing</h4>
                                <p>Jan 2024 - Jun 2024</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </Layout>
    </>
  )
}

export default ServicesPage