import React from 'react'
import Layout from '../components/layout'
import ServicesComponent from '../components/ServicesComponent'
function ServicesPage() {
  return (
    <>
    <Layout>
        <div className='Services-container'>
            <ServicesComponent/>
        </div>
    </Layout>
    </>
  )
}

export default ServicesPage