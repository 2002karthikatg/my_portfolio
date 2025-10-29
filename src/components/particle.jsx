import React from 'react'
import Particles from 'react-tsparticles';
function Particle() {
    return (
//             <Particles
//                 id="tsparticles"
//                 params={{
//                     particles: {
//                         number: {
//                             value: 160, density: { enable: true, value_area: 1500 }, //value: 160: Sets the total number of particles...density: { enable: true, value_area: 1500 }: Activates density-based scaling to ensure the number of particles adjusts to the canvas size.
//                         },
//                         line_linked: {
//             //Determines if lines between particles should be displayed.
//             //enable: false: Disables linking lines.
//             // opacity: 0.03: Sets the opacity of lines if they were enabled.
//                             enable: false,
//                             opacity: 0.03,
//                         },
//                         move: {
//                             direction: "right",
//                             speed: 0.05,
//                         },
//                         size: {
//                             value: 1, //value: 1: Specifies the size of each particle.
//                         },
//                         opacity: {
//                             anim: {
//             //                     anim: Animation settings for particle opacity.
//             //                         enable: true: Enables animation for opacity changes.
//             // speed: 1: Sets the speed of opacity change.
//             // opacity_min: 0.05: Sets the minimum opacity level.


//                                 enable: true,
//                                 speed: 1,
//                                 opacity_min: 0.05,

//                             },
//                         },

//                     },
//                     interactivity: {
//             //interactivity: Controls user interactions with particles.
//             //events:
//             // onclick: {enable: true, mode: "push" }: Enables particle interaction when the user clicks, adding more particles.
//             // modes:
//             // push: {particles_nb: 1 }: Specifies that 1 particle should be added on each click.

//                         events: {
//                             onclick: {
//                                 enable: true,
//                                 mode: "push",
//                             },
//                         },
//                         modes: {
//                             push: {
//                                 particles_nb: 1,
//                             },
//                         },
//                     },
//                     retina_detect: true,
// //retina_detect: true: Enhances rendering quality on high-resolution (Retina) screens.

//                 }}
//             />




        <Particles
            id="tsparticles"
            params={{
                particles: {
                    number: {
                        value: 160,
                        density: {
                            enable: true,
                            value_area: 1500,
                        },
                    },
                    line_linked: {
                        enable: false,
                        opacity: 0.03,
                    },
                    move: {
                        direction: "right",
                        speed: 0.05,
                    },
                    size: {
                        value: 1,
                    },
                    opacity: {
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.05,
                        },
                    },
                },
                interactivity: {
                    events: {
                        onclick: {
                            enable: true,
                            mode: "push",
                        },
                    },
                    modes: {
                        push: {
                            particles_nb: 1,
                        },
                    },
                },
                retina_detect: true,
            }}
        />
    );
}

export default Particle;
// Summary:
// This component displays a particle animation where:

// Particles are small and sparse, moving slowly to the right.
// On click, a new particle is added.
// The settings optimize rendering for Retina displays.
















// import React from 'react';
// import Particles from 'react-tsparticles';
// import { loadSlim } from 'tsparticles-slim';
// import type { Engine } from 'tsparticles-engine';

// function Particle() {
//     const particlesInit = async (engine: Engine) => {
//         await loadSlim(engine);
//     };

//     return (
//         <Particles
//             id="tsparticles"
//             init={particlesInit}
//             options={{
//                 particles: {
//                     number: {
//                         value: 80,
//                         density: {
//                             enable: true,
//                             value_area: 800,
//                         },
//                     },
//                     background:{
//                         color:"transparent",

//                     },
//                     color: {
//                         value: "#ffffff",
//                     },
//                     shape: {
//                         type: "circle",
//                     },
//                     opacity: {
//                         value: 0.5,
//                         random: true,
//                         anim: {
//                             enable: true,
//                             speed: 1,
//                             opacity_min: 0.1,
//                             sync: false,
//                         },
//                     },
//                     size: {
//                         value: 3,
//                         random: true,
//                         anim: {
//                             enable: true,
//                             speed: 2,
//                             size_min: 0.1,
//                             sync: false,
//                         },
//                     },
//                     line_linked: {
//                         enable: false,
//                     },
//                     move: {
//                         enable: true,
//                         speed: 0.5,
//                         direction: "right",
//                         random: true,
//                         straight: false,
//                         out_mode: "out",
//                         bounce: false,
//                         attract: {
//                             enable: false,
//                             rotateX: 600,
//                             rotateY: 1200,
//                         },
//                     },
//                 },
//                 interactivity: {
//                     detect_on: "canvas",
//                     events: {
//                         onhover: {
//                             enable: true,
//                             mode: "repulse",
//                         },
//                         onclick: {
//                             enable: true,
//                             mode: "push",
//                         },
//                         resize: true,
//                     },
//                     modes: {
//                         push: {
//                             particles_nb: 4,
//                         },
//                         repulse: {
//                             distance: 100,
//                             duration: 0.4,
//                         },
//                     },
//                 },
//                 retina_detect: true,
//             }}
//         />
//     );
// }

// export default Particle;