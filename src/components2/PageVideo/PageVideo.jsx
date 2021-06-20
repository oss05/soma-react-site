import React from 'react'
import headerVideo from '../../Assets/Videos/Home.mp4';

// CSS
import './PageVideo.scss';

export default function PageVideos() {
    return (
        <section>
            <video autoPlay loop mute="true" className="video">
                <source src={headerVideo} type="video/mp4" />
            </video>
        </section>
    )
}