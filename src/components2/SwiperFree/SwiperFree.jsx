import React from 'react';
// import Swiper from 'react-id-swiper';

// Styles
// import './SwiperFree.scss';

const FreeModeNoFixedPositions = ({ brandSlideImg, brandSlideImgAlt, brandSlideImg2, brandSlideImg3, brandSlideImg4, brandSlideImg5, brandSlideImg6 }) => {

    const params = {
        slidesPerView: 4,
        spaceBetween: 30,
        freeMode: true
    }

    return (
        <p>si</p>
        // <Swiper {...params}>
        //         <div className="swiper-free">
        //             <img src={brandSlideImg} alt={brandSlideImgAlt} />
        //         </div>
        //         <div className="swiper-free">
        //             <img src={brandSlideImg2} alt={brandSlideImgAlt} />
        //         </div>
        //         <div className="swiper-free">
        //             <img src={brandSlideImg3} alt={brandSlideImgAlt} />
        //         </div>
        //         <div className="swiper-free">
        //             <img src={brandSlideImg4} alt={brandSlideImgAlt} />
        //         </div>
        //         <div className="swiper-free">
        //             <img src={brandSlideImg5} alt={brandSlideImgAlt} />
        //         </div>
        // </Swiper>
    )
};

export default FreeModeNoFixedPositions;
