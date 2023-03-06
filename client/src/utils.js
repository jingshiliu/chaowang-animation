/**
 *
 * @param path, relative path inside the folder "assets"
 * @returns {Promise< image >}
 */
export const fetchAsset = async (path) => {
    try{
        const response = await import(`./assets${path}`)
        return response.default
    }catch (err){
        console.error('Error on importing images from: ' + path)
        throw err
    }
}



export const isVideo = (fileName) => {
    const videoFileExtensions = {'mov': '', 'mp4': '', 'youtube':''}
    const temp = fileName.split('.')
    const fileExtension = temp[temp.length - 1]
    return fileExtension in videoFileExtensions
}

