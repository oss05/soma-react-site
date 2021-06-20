import React, { Fragment } from 'react';
import Button1 from '../../../Components/Button1';

export default function Back({
    round,
    flippingImageBack,
    flippingImageAlt,
    flippingTitle,
    flippingDescription
}) {
    return (
        <Fragment>
            <section style={{
                width: "100%",
                height: "400px",
                background: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
                boxShadow: "0 0 10px gray"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    fontSize: "25px",
                }}>
                    <img src={flippingImageBack} alt={flippingImageAlt} />
                    <h3 style={{ margin: 0 }}>{flippingTitle}</h3>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    padding: '10px 20px',
                    // background: 'red'
                }}>
                    <p style={{ color: '#707070' }}>{flippingDescription}</p>
                    <div style={{ display: "flex" }}>
                        <Button1
                            variant="contained"
                            style={{ margin: "0 3px" }}
                            text1="Más"
                            text2="información"
                        />
                        {/* <Button
                            variant="contained"
                            style={{ margin: "0 3px" }}
                            onClick={round}>
                            Volver
                        </Button> */}
                    </div>
                </div>
            </section>
        </Fragment>
    )
}