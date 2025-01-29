import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'

const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img className={styles.aboutImg} src={getImageUrl("about/aboutImage.png")} alt="Sitting with a laptop"/>
        </div>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor"/>
                <div className={styles.aboutItemText}>
                    <h3> Software Engineer </h3>
                    <p>I'm a software engineer passionate about crafting high-performance, scalable solutions that drive innovation and efficiency.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt="Server"/>
                <div className={styles.aboutItemText}>
                    <h3> Full Stack Developer </h3>
                    <p>I'm a full stack developer skilled in building dynamic, end-to-end solutions that seamlessly integrate frontend and backend technologies.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/uiIcon.png")} alt="UI"/>
                <div className={styles.aboutItemText}>
                    <h3> Open Source Contributor </h3>
                    <p>I'm an open source contributor passionate about collaborating on innovative projects, improving code quality, and driving community-driven development.</p>
                </div>
            </li>
        </ul>
    </section>
  )
}

export default About