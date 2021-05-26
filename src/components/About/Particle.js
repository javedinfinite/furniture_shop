import React from "react";
import Particles from "react-particles-js";
const particleClass = {
    width: '100%',
    height: '100%',
    position: 'fixed',
    backgrobackgroundColor: 'black',
    zIndex: '-1'
   
  }

const MyParticleElement = props => {
  return (
    <div>
      <Particles
        style={{particleClass}}
        params={{
          particles: {
            number: {
              value: 10,
              density: {
                enable: true,
                value_area: 100
              }
            },
            color: {
              value: "#ffb3ff"
            },
            size: {
              value: 10,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
              }
            },
            repulse: {
              distance: 500,
              duration: 0.5
            },
            bubble: {
              distance: 600,
              size: 60,
              duration: 0.1,
              opacity: 1
            },
            line_linked: {
              enable: false,
              shadow: {
                enable: false,
                color: "#e72c30",
                blur: 5
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onclick: {
                enable: true
              },
              resize: false
            }
          },
          retina_detect: true
        }}
      />
    </div>
  );
};
export default MyParticleElement; //returning the element

//below 'myinput' is ES6 function equivalent to a normal function created with function keyword
//ES6 function holds advantages like using 'this'
// const myinput = (props) => {//a constant component is a funtion which returns an element written in jsx designed by javed(user) for using in view.
//   //props is nothing but object name which is receiving properties/attributes of the element 'input' which we will create
//   return (
//     <div className="Input_Div">
//       <FontAwesomeIcon className="Input_Icon" icon={props.icon} />
//       <input className="Input_Element" type={props.type} value={props.value} onChange={props.changed} name={props.name} placeholder={props.placeholder} />
//     </div>
//   )
// };
