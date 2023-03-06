import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import '../styles/WorkPreview.css';
import {fetchAsset} from '../utils.js';

function WorkPreview({props}) {
    const {fileName, title} = props
    const [image, setImage] = useState(null)

    useEffect(()=>{
        fetchAsset(`/HomePreviewImages/${fileName}`)
            .then(img => setImage(img))
            .catch(err => console.error(err))
    }, [])

    return (
        <Link className={'WorkPreview'} to={`/project?category=${title}`}>
            <h2>{title}</h2>
            <img src={image} alt=""/>
        </Link>
    );
}

export default WorkPreview;