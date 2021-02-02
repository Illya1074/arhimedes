
import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
// import './FunkcjaKwadratowa.css'
import Intro from '../../PageElements/Intro/Intro'
import NextPreviosButtons from '../../PageElements/NextPreviosButtons/NextPreviosButtons'
import Twiedzenia from '../../Material/Twierdzenia/Logarytmy/DzialaniaLogarytmow'

const Zadanie = () => {
    return (
        <div>
       
            <div className='study-problem'>
                
                <Intro rok={'2017'} zadanie={'3'} punkty={'1'} />
                
                <div className='study-problem-content'>
                    Liczba
                </div> 

                <div className='study-problem-formula'>
                    <BlockMath
                        math={'2 \\space log_2 \\space 3 - 2 \\space log_2 \\space 5'}
                        errorColor={'#cc0000'}
                    />
                </div>

                <div className='study-problem-content'>
                    jest równa:
                </div>

                <div className='flex-row-arround'>
                    <div className='study-problem-formula'>
                        <BlockMath
                            math={'A) log_2 \\space \\frac{9}{25}'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                    <div className='study-problem-formula'>
                        <BlockMath
                            math={'B) log_2 \\space \\frac{3}{5}'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                    <div className='study-problem-formula'>
                        <BlockMath
                            math={'C) log_2 \\space \\frac{9}{5}'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                    <div className='study-problem-formula'>
                        <BlockMath
                            math={'D) log_2 \\space \\frac{6}{25}'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                </div>

            </div>

            <div className='study-line' />

            <Twiedzenia/>

            <div className='study-line' />


            <div className='study-formula'>
                <BlockMath
                    math={' 2 \\space log_2 \\space 3 - 2 \\space log_2 \\space 5 = log_2 \\space 9 - log_2 \\space 25 = log_2 \\space \\frac{9}{25}'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'Odp: A)'}
                    errorColor={'#cc0000'}
                />
            </div>

            

            <NextPreviosButtons next={'/containers/MaturaPodstawowa/Logarytmy/Zadanie1'} previos={'/containers/MaturaPodstawowa/Logarytmy/Zadanie2'}/>

        </div>
    )
}

export default Zadanie








