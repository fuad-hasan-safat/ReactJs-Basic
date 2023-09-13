import React, { useState} from 'react'


export default function Image_({image, index, handleRemove}) {
    const [isMouseOnImage, setIsMouseOnImage] = useState(false)
    return (
        <div className='
           w-1/3 my-4 border flex justify-center'>
            <div className='relative'
            onMouseEnter={()=>setIsMouseOnImage(index)}
            onMouseLeave={()=>setIsMouseOnImage(-1)}>
                <i className={
                    `fas fa-times absolute right-0 cursor-pointer opacity-40 hover:opacity-100 bg-white hover:bg-red-600 
                    ${isMouseOnImage === index?"":"hidden"}`
                }
                onClick={()=>handleRemove(index)}></i>
                <img 
                className="h-96 w-96 object-cover hover:object-scale-down  rounded-lg shadow-xl dark:shadow-gray-800"
                
                src={image} 
                />
            </div>
        
    </div>
    )
}
