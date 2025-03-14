import React from "react";
import arrow1 from "../assets/arrow1.png";

const Loading = () => {
  return (
    <>
      <style>
        {`
                .loader {
                    width: 60px;
                    height: 60px;
                    display: grid;
                    overflow: hidden;
                    position: relative;
                    background-size: cover;
                    
                    background-repeat: no-repeat;
                    background-position: center;
                    transform: scale(3.5);
                    animation: moveArrow 1s infinite linear;
                }
                     @keyframes circleanimation {
                    0% {
                        background: radial-gradient(circle, #42f5bf,#80DDF7);
                    }
                      25%{
                      background: radial-gradient(circle, #74ffd5,#8ce6ff);
                      }
                      50%{
                      background: radial-gradient(circle, #86ffdb,#a0eaff);
                      }
                    75%{
                      background: radial-gradient(circle, #74ffd5,#8ce6ff);
                      }
                    100% {
                        background: radial-gradient(circle, #42f5bf,#80DDF7);
                    }
                }
                
                @keyframes moveArrow {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }
                    body {  
    display: flex;  
    justify-content: center;  
    align-items: center;  
    height: 100vh;  
    margin: 0;  
    background-color: #f0f0f0; 

.circle {  
    width: 60px;                /* Diameter of the circle */  
    height: 85px;               /* Diameter of the circle */  
    border-radius: 50%;          /* Makes the div a circle */  
    background: radial-gradient(circle, #42f5bf,#80DDF7); /* Gradient colors */  
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Optional shadow for effect */  
    // animation: circleanimation 2s ease-in  infinite  ;
}  
                `}
      </style>
      <div className="flex flex-row items-center">
        <div
          className="loader mr-4"
          style={{
            backgroundImage: `url(${arrow1})`, // Dynamically add the image
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div class="circle inset-shadow-sm"></div>
      </div>
    </>
  );
};

export default Loading;
