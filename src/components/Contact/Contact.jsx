import React from 'react'
import styles from './Contact.module.css'
import { getImageUrl } from '../../utils'

const Contact = () => {
    return <footer id="contact" className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Have a question or want to collaborate? Reach out to me!</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email"/>
            <a href="mailto:vandanakerketta02@gmail.com">vandanakerketta02@gmail.com</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin"/>
            <a href="https://www.linkedin.com/in/vandanakerketta/">linkedin.com/in/vandanakerketta/</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github"/>
            <a href="https://www.github.com/vandy02">github.com/vandy02</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/linktreeIcon.png")} alt="Linktree"/>
            <a href="https://linktr.ee/Vandy02">linktr.ee/Vandy02</a>
        </li>
    </ul>
  </footer>
}

export default Contact