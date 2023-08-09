import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Discord, Instagram, Twitter } from './Icons'
import gradient_icon from '../assets/images/png/gradient_icon.png'
import grid_img_1 from '../assets/images/png/grid_img_1.png'
import grid_img_2 from '../assets/images/png/grid_img_2.png'
import grid_img_3 from '../assets/images/png/grid_img_3.png'
import grid_img_4 from '../assets/images/png/grid_img_4.png'
import grid_img_5 from '../assets/images/png/grid_img_5.png'
import grid_img_6 from '../assets/images/png/grid_img_6.png'
import grid_img_7 from '../assets/images/png/grid_img_7.png'
import grid_img_8 from '../assets/images/png/grid_img_8.png'
import grid_img_9 from '../assets/images/png/grid_img_9.png'
import grid_img_10 from '../assets/images/png/grid_img_10.png'
import grid_img_11 from '../assets/images/png/grid_img_11.png'
import grid_img_12 from '../assets/images/png/grid_img_12.png'
import grid_img_13 from '../assets/images/png/grid_img_13.png'
import grid_img_14 from '../assets/images/png/grid_img_14.png'
import grid_img_15 from '../assets/images/png/grid_img_15.png'
import grid_img_16 from '../assets/images/png/grid_img_16.png'
import grid_img_17 from '../assets/images/png/grid_img_17.png'
import grid_img_18 from '../assets/images/png/grid_img_18.png'
import grid_img_19 from '../assets/images/png/grid_img_19.png'
import grid_img_20 from '../assets/images/png/grid_img_20.png'
import grid_img_21 from '../assets/images/png/grid_img_21.png'
import grid_img_22 from '../assets/images/png/grid_img_22.png'
import grid_img_23 from '../assets/images/png/grid_img_23.png'
import grid_img_24 from '../assets/images/png/grid_img_24.png'
import grid_img_25 from '../assets/images/png/grid_img_25.png'
import img_2004 from '../assets/images/png/time_2004.png'
import img_2005 from '../assets/images/png/time_2005.png'
import img_2006 from '../assets/images/png/time_2006.png'
import img_2006_2 from '../assets/images/png/time_2006_2.png'
import img_2008 from '../assets/images/png/time_2008.png'
import img_2007 from '../assets/images/png/time_2007.png'
import img_2010 from '../assets/images/png/time_2010.png'
const GridNav = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    if (showNavbar) {
        document.body.classList.remove('overflow-hidden');
    } else {
        document.body.classList.add('overflow-hidden')
    }
    return (
        <section className='timeline_bg min-vh-100'>
            <header className='py-4'>
                <Container>
                    <nav className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex align-items-center'>
                            <a className='me-3' href="https://instagram.com"><Instagram /></a>
                            <a className='me-3' href="https://discord.com"><Discord /></a>
                            <a href="https://twitter.com"><Twitter /></a>
                        </div>
                        <ul className={`${showNavbar ? 'd-flex align-items-center gap-4 mb-0 nav_sm p-0' : 'd-flex align-items-center gap-4 mb-0 nav_sm nav_show p-0'} `}>
                            <li><Link onClick={() => setShowNavbar(true)} className='ff_fontspring_demo text_000000 fs_sm fw-normal underline me-lg-2'>HOME</Link></li>
                            <li><Link onClick={() => setShowNavbar(true)} className='ff_fontspring_demo text_000000 fs_sm fw-normal underline me-lg-2'>OUR STORY</Link></li>
                            <li><Link onClick={() => setShowNavbar(true)} className='ff_fontspring_demo text_000000 fs_sm fw-normal underline me-lg-2'>ROADMAP</Link></li>
                            <li><Link onClick={() => setShowNavbar(true)} className='ff_fontspring_demo text_000000 fs_sm fw-normal underline me-lg-2'>TRAITS</Link></li>
                            <li><Link onClick={() => setShowNavbar(true)} className='ff_fontspring_demo text_000000 fs_sm fw-normal underline me-lg-2'>TEAM</Link></li>
                            <li><Link onClick={() => setShowNavbar(true)} className='ff_fontspring_demo text_000000 fs_sm fw-normal underline me-lg-2'>GENESIS</Link></li>
                            <li><Link onClick={() => setShowNavbar(true)} className='ff_fontspring_demo text_000000 fs_sm fw-normal underline'>FAQS</Link></li>
                            <span title="close" className="ms-4 close_nav text-white fw-bold fs-1 d-lg-none" onClick={() => setShowNavbar(true)}>&times;</span>
                        </ul>
                        <span title="open"
                            className="d-inline d-lg-none fw-bold fs-1 text-white"
                            onClick={() => setShowNavbar(false)}>
                            &#9776; </span>
                    </nav>
                </Container>
            </header>
            <section>
                <Container fluid>
                    <div className='timeline_container'>
                        <Row>
                            <Col md={6}>
                                <div className='d-flex flex-md-row justify-content-md-end justify-content-center mt-3 mb-4'><h1 className='genesis fs_lg fw-normal text_ffffff ff_copper_black'>GENESIS</h1></div>
                                <p className='text_black fs_sm fw-light ff_fontspring_demo ms-md-5 ps-md-5 d-flex justify-content-center'>MANY YEARS BEFORE LAPINC</p>
                            </Col>
                            <Col md={6}>
                                <div className='d-flex flex-md-row flex-column-reverse align-items-center justify-content-md-start justify-content-center mt-md-5 pt-md-2 mb-md-0 mb-5'>
                                    <img src={gradient_icon} alt="icon" />
                                    <p className='text-center ms-md-5 ps-md-5 fs_sm fw-semibold ff_fontspring_demo'>THIS ARTIST DUO WERE <span className='d-block'>FORMALLY KNOWN AS LVSP</span></p>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col col={6} className='d-md-block d-none'>
                                <div className='grid_container position-relative'>
                                    <div className='time_2004_abs pb-4'>
                                        <div className='time_2004 time_2004_bg time  d-flex justify-content-between align-items-center mb-5'>
                                            <p className='mb-0 fs_sm fw-semibold ff_fontspring_demo text_ffffff'>
                                                LEON MEETS PIPPA
                                            </p>
                                            <p className='mb-0 fs_sm fw-semibold ff_fontspring_demo'>2004</p>
                                        </div>
                                    </div>
                                    <div className='time_2006_abs'>
                                        <div className='time time_2006 time_2006_bg d-flex justify-content-between align-items-center'>
                                            <p className='mb-0 fs_sm fw-semibold ff_fontspring_demo text_ffffff'>
                                                SELL OUT SHOW PERTH
                                            </p>
                                            <p className='mb-0 fs_sm fw-semibold ff_fontspring_demo'>2006</p>
                                        </div>
                                    </div>
                                    <div className='grid_item_1 d-flex justify-content-center'>
                                        <img src={grid_img_1} alt="grid-img" />
                                    </div>
                                    <div className='grid_item_3'>
                                        <img className='w-100' src={grid_img_2} alt="grid-img" />
                                    </div>
                                    <div className='grid_item_4'>
                                        <img className='w-100' src={grid_img_3} alt="grid-img" />
                                    </div>
                                    <div className='grid_item_5'>
                                        <img className='w-100' src={grid_img_4} alt="grid-img" />
                                    </div>
                                    <div className='grid_item_6 d-flex justify-content-center'>
                                        <img className='w-100' src={grid_img_5} alt="grid-img" />
                                    </div>
                                </div>
                                <div className='grid_container position-relative'>
                                    <div className='time_2008_abs'>
                                        <div className='time time_2006 time_2008_11_14_bg d-flex justify-content-between align-items-center'>
                                            <p className='mb-0 fs_sm fw-semibold ff_fontspring_demo text_ffffff'>
                                                LOS ANGELES EXPO
                                            </p>
                                            <p className='mb-0 fs_sm fw-semibold ff_fontspring_demo'>2008</p>
                                        </div>
                                    </div>
                                    <div className='grid_item_8 d-flex justify-content-end'>
                                        <img className='w-100' src={grid_img_6} alt="grid-img" />
                                    </div>
                                    <div className='grid_item_9'>
                                        <img className='w-100' src={grid_img_7} alt="grid-img" />
                                    </div>
                                    <div className='grid_item_10 d-flex justify-content-center'>
                                        <img src={grid_img_8} alt="grid-img" />
                                    </div>
                                    <div className='grid_item_11'>
                                        <img className='w-100' src={grid_img_9} alt="grid-img" />
                                    </div>
                                </div>
                                <div className='grid_container position-relative'>
                                    <div className='time_2011_14_abs'>
                                        <div className='time time_2011_14 time_2008_11_14_bg d-flex justify-content-between align-items-center'>
                                            <p className='mb-0 fs_sm fw-semibold ff_fontspring_demo text_ffffff'>
                                                RESIDENT ARTISTS SYDNEY AT FOL GALLERY
                                            </p>
                                            <p className='mb-0 fs_sm fw-semibold ff_fontspring_demo'>2011-2014</p>
                                        </div>
                                    </div>
                                    <div className='grid_item_13'>
                                        <img className='w-100' src={grid_img_10} alt="grid-img" />
                                    </div>
                                    <div className='grid_item_14'>
                                        <img className='w-100' src={grid_img_11} alt="grid-img" />
                                    </div>
                                    <div className='grid_item_15'>
                                        <img className='w-100' src={grid_img_12} alt="grid-img" />
                                    </div>
                                </div>
                            </Col>
                            <Col col={6} className='d-md-block d-none'>
                                <div className='grid_container position-relative'>
                                    <div className='time_2005_abs'>
                                        <div className='d-flex align-items-center justify-content-between time time_2005'>
                                            <p className='mb-0 fs_sm fw-semibold ff_fontspring_demo'>2005</p>
                                            <p className='mb-0 text_ffffff fs_sm fw-semibold ff_fontspring_demo'>LVSP CREATED </p>
                                        </div>
                                    </div>
                                    <div className='grid_item_17'>
                                        <img className='w-100' src={grid_img_13} alt="grid_img" />
                                    </div>
                                    <div className='grid_item_18'>
                                        <img className='w-100' src={grid_img_14} alt="grid_img" />
                                    </div>
                                    <div className='grid_item_19'>
                                        <img className='w-100' src={grid_img_15} alt="grid_img" />
                                    </div>
                                    <div className='grid_item_20'>
                                        <img className='w-100' src={grid_img_16} alt="grid_img" />
                                    </div>
                                    <div className='grid_item_21'>
                                        <img className='w-100' src={grid_img_17} alt="grid_img" />
                                    </div>
                                    <div className='grid_item_23 position-relative'>
                                        <img className='w-100' src={grid_img_18} alt="grid_img" />
                                        <div className='time_2007_abs'>
                                            <div className='d-flex justify-content-between align-items-center time time_2006 time_2007_bg'>
                                                <p className='mb-0 fs_sm fw-semibold ff_fontspring_demo'>2007</p>
                                                <p className='mb-0 fs_sm fw-semibold ff_fontspring_demo text_ffffff'>SELL OUT SHOW PERTH</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='grid_item_24'>
                                        <img className='w-100' src={grid_img_19} alt="grid_img" />
                                    </div>
                                    <div className='grid_item_25'>
                                        <img className='w-100' src={grid_img_20} alt="grid_img" />
                                    </div>
                                    <div className='grid_item_26 d-flex justify-content-end'>
                                        <img className='w-100' src={grid_img_21} alt="grid_img" />
                                    </div>

                                    <div className='grid_item_28 position-relative mt-5'>
                                        <img className='w-100' src={grid_img_22} alt="grid_img" />
                                        <div className='time_2009_abs'>
                                            <div className='d-flex justify-content-between align-items-center time time_2006 time_2009_bg'>
                                                <p className='mb-0 fs_sm fw-semibold ff_fontspring_demo'>2009</p>
                                                <p className='mb-0 fs_sm fw-semibold ff_fontspring_demo text_ffffff'>SELL OUT SHOW PERTH</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='grid_container position-relative'>
                                    <div className='time_2010_abs'>
                                        <div className='d-flex justify-content-between  align-items-center time time_2006'>
                                            <p className='mb-0 fs_sm fw-semibold ff_fontspring_demo'>2010</p>
                                            <p className='mb-0 fs_sm fw-semibold ff_fontspring_demo text_ffffff'>SELL OUT SHOW</p>
                                            <p className='mb-0 fs_sm fw-semibold ff_fontspring_demo text_ffffff'>SYDNEY</p>
                                        </div>
                                    </div>
                                    <div className='grid_item_30'>
                                        <img className='w-100' src={grid_img_23} alt="grid_img" />
                                    </div>
                                    <div className='grid_item_31'>
                                        <img className='w-100' src={grid_img_24} alt="grid_img" />
                                    </div>
                                    <div className='grid_item_32'>
                                        <img className='w-100' src={grid_img_25} alt="grid_img" />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <div className='d-md-none d-block'>
                            <div className='grid_container'>
                                <div className='grid_sm_1'>
                                    <img className='w-100' src={img_2004} alt="grid_img" />
                                </div>
                                <div className='grid_sm_2'>
                                    <img className='w-100' src={img_2005} alt="grid_img" />
                                </div>
                                <div className='grid_sm_3'>
                                    <img className='w-100' src={img_2006} alt="grid_img" />
                                </div>
                                <div className='grid_sm_4'>
                                    <img className='w-100' src={grid_img_1} alt="grid_img" />
                                </div>
                                <div className='grid_sm_5'>
                                    <img className='w-100' src={grid_img_14} alt="grid_img" />
                                </div>
                                <div className='grid_sm_6'>
                                    <img className='w-100' src={grid_img_2} alt="grid_img" />
                                </div>
                                <div className='grid_sm_7'>
                                    <img className='w-100' src={grid_img_13} alt="grid_img" />
                                </div>
                                <div className='grid_sm_8'>
                                    <img className='w-100' src={grid_img_16} alt="grid_img" />
                                </div>
                                <div className='grid_sm_9'>
                                    <img className='w-100' src={grid_img_15} alt="grid_img" />
                                </div>
                                <div className='grid_sm_10'>
                                    <img className='w-100' src={img_2006_2} alt="grid_img" />
                                </div>
                                <div className='grid_sm_11'>
                                    <img className='w-100' src={grid_img_19} alt="grid_img" />
                                </div>
                                <div className='grid_sm_12'>
                                    <img className='w-100' src={grid_img_18} alt="grid_img" />
                                </div>
                                <div className='grid_sm_13'>
                                    <img className='w-100' src={grid_img_4} alt="grid_img" />
                                </div>
                                <div className='grid_sm_14'>
                                    <img className='w-100' src={grid_img_17} alt="grid_img" />
                                </div>
                                <div className='grid_sm_15'>
                                    <img className='w-100' src={grid_img_5} alt="grid_img" />
                                </div>
                                <div className='grid_sm_16'>
                                    <img className='w-100' src={grid_img_20} alt="grid_img" />
                                </div>
                                <div className='grid_sm_17'>
                                    <img className='w-100' src={grid_img_3} alt="grid_img" />
                                </div>
                                <div className='grid_sm_18'>
                                    <img className='w-100' src={img_2007} alt="grid_img" />
                                </div>
                                <div className='grid_sm_19'>
                                    <img className='w-100' src={grid_img_21} alt="grid_img" />
                                </div>
                                <div className='grid_sm_20'>
                                    <img className='w-100' src={grid_img_6} alt="grid_img" />
                                </div>
                                <div className='grid_sm_21'>
                                    <img className='w-100' src={img_2008} alt="grid_img" />
                                </div>
                                <div className='grid_sm_22'>
                                    <img className='w-100' src={grid_img_8} alt="grid_img" />
                                </div>
                                <div className='grid_sm_23'>
                                    <img className='w-100' src={grid_img_7} alt="grid_img" />
                                </div>
                                <div className='grid_sm_24'>
                                    <img className='w-100 h-100' src={grid_img_22} alt="grid_img" />
                                </div>
                                <div className='grid_sm_25'>
                                    <img className='w-100' src={grid_img_9} alt="grid_img" />
                                </div>
                                <div className='grid_sm_26'>
                                    <img className='w-100' src={img_2010} alt="grid_img" />
                                </div>
                                <div className='grid_sm_27'>
                                    <img className='w-100' src={grid_img_10} alt="grid_img" />
                                </div>
                                <div className='grid_sm_28'>
                                    <img className='w-100' src={grid_img_11} alt="grid_img" />
                                </div>
                                <div className='grid_sm_29'>
                                    <img className='w-100' src={grid_img_24} alt="grid_img" />
                                </div>
                                <div className='grid_sm_30'>
                                    <img className='w-100' src={grid_img_25} alt="grid_img" />
                                </div>
                                <div className='grid_sm_31 d-flex justify-content-center'>
                                    <img className='w-100' src={grid_img_23} alt="grid_img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </section>
    )
}

export default GridNav