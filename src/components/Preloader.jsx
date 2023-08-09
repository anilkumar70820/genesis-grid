import React from 'react'
import logo from '../assets/images/png/preloader_img.png'
const Preloader = () => {
    return (
        <div>
            <div className="bg-black d-flex flex-column justify-content-center align-items-center position-fixed top-0 left-0 min-vh-100 z-3 w-100">
                <div className='d-flex justify-content-center'>
                    <img className='logo_animation w-50' src={logo} alt='logo' />
                </div>
                <div className='d-flex justify-content-end mt-4'><h1 className='genesis fs_lg fw-normal text_ffffff ff_copper_black'>GENESIS</h1></div>
            </div>
        </div>
    )
}

export default Preloader