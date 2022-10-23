import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({
    api_key: '295749856778466',
    api_secret: 'OFRp6rXUtZitWPwOr17ppzJv-Zc',
    cloud_name: 'dhuc4dydz'
})

export const uploadImage = async filePath => {
    return await cloudinary.uploader.upload(filePath,{
        folder: 'posts'
    })
}

export const deleteImage = async publicId => {
    return await cloudinary.uploader.destroy(publicId)
}