import React, { Fragment } from 'react';

// Components 
import DecryptEffect from '../DecryptEffect/DecryptEffect';

// CSS
import './heroPath.scss';

export default function HeroPath() {
    return (
        <Fragment>
            <div className="container-wrap">
                <section className="masterContainer">

                    <div className="traingle"></div>

                    <div className="preventContentContainer">
                        <div className="contentContainer">
                            <div className="titulo">
                                <h2>
                                    somos una de las empresas de <br />
                                    <DecryptEffect /> <br />
                                    más efectivas
                            </h2>
                            </div>
                            <hr />
                            {/* <div className="content">
                                <p>Estamos comprometidos a producir soluciones integrales que impacten positivamente a sus clientes, su negocio y su empresa.</p>
                            </div> */}
                        </div>
                    </div>
                </section>
            </div>
        </Fragment>
    )
}