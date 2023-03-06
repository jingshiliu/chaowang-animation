import React from 'react';
import '../styles/About.css'
import photo from '../assets/HomePreviewImages/About_Chao_Wang.jpg'

function About() {
    return (
        <main className={'About'}>
            <img src={photo} alt="Chao Wang with bumble bee from Transformer"/>
            <div>
                <h1>About Me</h1>
                <p>
                    Chao Wang or Wilson Wang, either one works for me! Hello, I’m just your ordinary creative in the
                    field
                    of animation aspiring to make it big in the industry. I was born in Sichuan China, where I lived for
                    12
                    years. After moving to New York City, much of my eastern culture meshed with new experiences in
                    America
                    which greatly influenced my artistic style. I’m a really optimistic person and a team player as
                    well. As
                    an animator, I specialize in background design, background painting, and also special effects
                    animation.
                    In my world of animation, I like to create content that is adventurous, inspiring, and
                    unforgettable. I
                    draw inspiration from some of my favorite companies including Marvel, Riot and The Line. Ultimately,
                    I
                    aspire to use my skill sets to create stories that resonate with my audience.
                </p>
            </div>
        </main>
    );
}

export default About;