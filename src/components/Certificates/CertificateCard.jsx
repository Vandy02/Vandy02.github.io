import React from 'react'
import styles from './CertificateCard.module.css'
import { getImageUrl } from '../../utils'

const CertificateCard = ({ certificate : { imageSrc, title, organization, skills}}) => {
  return (
    <div className={styles.container}>
                <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.image}/>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.organization}>{organization}</p>
                <ul className={styles.skills}>
                    {
                        skills.map((skill, id) => (
    
                            <li key={id} className={styles.skill}>{skill}</li>
    
                        ))
                    }
                </ul>
            </div>
  )
}

export default CertificateCard