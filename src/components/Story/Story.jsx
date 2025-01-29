import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Story.module.css'

const Story = () => {
    return (
        <section className={styles.container}>
             <div className={styles.content}>
             <h2 className={styles.title}>My Story </h2>
                <p className={styles.description}>I developed a passion for coding when I was in the 5th grade. That is when I
                    learned my first "Hello World" in BASIC.In 7th grade, we were taught HTML
                    at school, and that is how I knew I wanted to be a software developer.
                    I loved making the computer do whatever I wanted—it was almost like
                    magic to me. This ignited a desire to delve deeper
                    into coding. I was thrilled when I got selected to
                    participate in the Computer Science bootcamp at the
                    Indian Institute of Technology (IIT), Kharagpur, in
                    8th grade. Learning college-level coding as a high
                    school student solidified my foundation in this field,
                    something I never imagined as a kid. Later, I pursued
                    a Bachelor's in Computer Science Engineering and
                    then a Masters, where I gained extensive practical
                    experience through industry-level projects.I now
                    have over two years of experience as a software
                    developer.I'm deeply fascinated by evolving technologies and strive to stay
                    updated with the latest advancements. Learning is a lifelong pursuit for me,
                    and I constantly push myself to acquire new skills and broaden my expertise.
                    My goal is to continue contributing to impactful projects and making meaningful
                    advancements in the tech world, benefiting both the community and the
                    organizations I collaborate with.</p>
            </div>
                <img src={getImageUrl("story/story.png")} alt="storyImage" className={styles.storyImg} />
            
            
        </section>
    )
}

export default Story