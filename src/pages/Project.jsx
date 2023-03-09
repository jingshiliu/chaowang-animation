import React, {useEffect, useState} from 'react';
import {nanoid} from "nanoid";
import '../styles/Project.css'
import ProjectPreview from "../components/ProjectPreview";
import ProjectPreviewPopUp from "../components/ProjectPreviewPopUp";
import {useLocation} from "react-router-dom";
import {fetchAsset, isVideo} from "../utils";
import ProjectTypesGallery from "../components/ProjectTypesGallery";

function Project() {
    const location = useLocation()
    const [category, setCategory] = useState('');
    const [projects, setProjects] = useState([]);
    const [previewPopUp, setPreviewPopUp] = useState('')


    useEffect(() => {
        async function fetchData() {
            window.scrollTo(0, 0)
            const assetNames = await fetchAsset(`/Projects/indexes/${category}.json`)
            const assetList = []
            for (let assetName of assetNames) {
                let asset = isVideo(assetName) ? assetName: (await fetchAsset(`/Projects/${assetName}`))
                assetList.push(asset)

                if (assetList.length === assetNames.length) {
                    setProjects(assetList)
                }
            }
        }
        fetchData()
            .catch(err => console.error(err))
    }, [category])

    useEffect(()=>{
        let categoryParams = new URLSearchParams(location.search).get('category')
        if (categoryParams !== category)
            setCategory(categoryParams)
    }, [location])

    return (
        <div className={'Project'}>
            <h1>{category}</h1>
            <section className={'gallery'}>
                {projects.map(
                    asset => <ProjectPreview
                        asset={asset}
                        setPreviewPopUp={setPreviewPopUp}
                        key={nanoid()}
                    />
                )}
            </section>

            <section className={'Project-Footer'}>
                <h1>
                    Other Project Categories
                </h1>

                <ProjectTypesGallery />
            </section>

            {
                previewPopUp ?
                    <ProjectPreviewPopUp asset={previewPopUp} setPreviewPopUp={setPreviewPopUp}/>
                    :
                    <></>
            }
        </div>
    );
}

export default Project;