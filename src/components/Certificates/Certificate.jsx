import React from 'react'

import certificates from '../../data/certificates.json'
import CertificateCard from './CertificateCard'

import styles from './Certificate.module.css'
//import styles from './Certificate.module.css'


const Certificate = () => {
  return (
    <section className={styles.container}>
        <h2 className={styles.title}>Certificates</h2>
        <div className={styles.certificates}>
            {
                certificates.map((certificate, id) => {
                    return <CertificateCard key={id} certificate={certificate}/>
                })}
            </div>
                
                         
                                
    </section>
  )
}

export default Certificate