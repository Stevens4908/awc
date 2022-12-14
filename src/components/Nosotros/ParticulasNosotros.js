import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";


import particlesOptions from "../../particles.json";

function ParticulasNosotros() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div className="App">
            <Particles options={particlesOptions} init={particlesInit}/>
           
        </div>
    );
}

export default ParticulasNosotros;