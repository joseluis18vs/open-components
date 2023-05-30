"use client"

import { useEffect, useState } from "react"
import "../../../styles/components/functionals/_slider.scss"

export default function Slider(){

    // STATES
    const [transitionEffect, setTransitionEffect] = useState(false)

    // CYCLE
    useEffect(() => {
        
        

        // return () => {

        // };

    }, [transitionEffect])

    // FUNCTIONS
    function TransitionEffect() {
        setTransitionEffect(true)
        setTimeout(() => {
            setTransitionEffect(false)
        }, 1000);
    }


    return(
        <div className="slider">
            
            <ul className="slider--cards-container">
                <li className={`slider--card slider--1 ${transitionEffect ? "transition-effect" : ""}`}>1</li>
                <li className={`slider--card slider--3 ${transitionEffect ? "transition-effect" : ""}`}>1</li>
                <li className={`slider--card slider--2 ${transitionEffect ? "transition-effect" : ""}`}>1</li>
                {/*  slider--right-effect  slider--left-effect */}

            </ul>

            <div className="slider--prev" onClick={() => { TransitionEffect() }}>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg>

            </div>

            <div className="slider--next" onClick={() => { TransitionEffect() }}>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>

            </div>

        </div>
    )
}