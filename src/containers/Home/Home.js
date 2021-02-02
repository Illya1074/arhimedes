import React from 'react'
import './Home.css'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';


const Home = () => {
    return (
        <div className="home">
            <h1 className="home-title">Arhimedes</h1>
            <div className="home-content">Matematyka to przede wszystkim praktyka i rozwiązywania zadań. Arhimedes to strona gdzie wyjaśniamy zadania maturalne z matematyki podstawowej
                w bardzo zrozumialy sposób.
            </div>
            {/* <div className="my-block">
                <BlockMath
                    math={'\\sqrt{\\smash[b]{y}}\\left(x^{\\smash{2}}\\right)+\\color{#631b6b}{34}{\\pi=\\frac c d}\\cdot e^\\frac c d'}
                    errorColor={'#cc0000'}
                />
            </div> */}

            <div className='home-logo'>
                <div/>
                <div/>
                <div/>
            </div>
        </div>
    )
}

export default Home
