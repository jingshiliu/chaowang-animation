import React, {useEffect, useState} from 'react';
import dataPaths from "../assets/HomePreviewImages/data.json";
import '../styles/ProjectTypeGallery.css'
import WorkPreview from "./WorkPreview";
import {nanoid} from "nanoid";

function ProjectTypesGallery() {
    const [imagePaths, setImagePaths] = useState(dataPaths)

    useEffect(()=>{
        let paths = dataPaths.map(fileName => {
            return {
                fileName,
                title: fileName.split('.')[0]
            }
        });
        setImagePaths(paths)
    }, [])

    return (
        <section className={'ProjectTypeGallery'}>
            {imagePaths.map(path => <WorkPreview props={path} key={nanoid()}/>)}
        </section>
    );
}

export default ProjectTypesGallery;