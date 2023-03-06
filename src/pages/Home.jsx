import React from 'react';
import {nanoid} from 'nanoid'
import '../styles/Home.css'
import ProjectTypesGallery from "../components/ProjectTypesGallery";


function Home() {
    return (
        <main className={'Home'}>

            <h4 className={'quote'}>
                I create animations to inspire people just like how they motivated me. Everyone has the chance to shine,
                we just need a spark to make it happen.
            </h4>

            <ProjectTypesGallery />
        </main>
    );
}

export default Home;