import React from 'react'

export default function Home() {
    return (

        <div className="flex flex-wrap h-screen justify-center grid-cols-3 ">
            <div className='m-auto text-9xl'>
                <h1 className='font-serif'>WEL</h1>
            </div>
            <div className='m-auto'>
            <img 
                className='h-96 w-50'
                src={require('../assets/images/myAvatar/fuadAvatarFantacy.png')} />
            </div>
            <div className='m-auto text-9xl'>
                <h1 className='font-serif'>come</h1>
            </div>
        </div>




    )
}
