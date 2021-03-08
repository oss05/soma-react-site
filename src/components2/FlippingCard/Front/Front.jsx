import React, { Fragment } from 'react';

export default function Back({ round, flippingImage, flippingImageAlt }) {

    return (
        <Fragment>
            <div onClick={round} style={{
                boxShadow: "0 0 10px gray",
                cursor: "pointer",
                borderRadius: "10px",
                width: "100%",
                height: "400px",
                background: "#fff",
            }}>
                <img src={flippingImage} alt={flippingImageAlt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
        </Fragment>
    )
}