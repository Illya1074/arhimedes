
import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
// import './FunkcjaKwadratowa.css'
import Intro from '../../PageElements/Intro/Intro'
import NextPreviosButtons from '../../PageElements/NextPreviosButtons/NextPreviosButtons'

const Zadanie = () => {
    return (
        <div>
       
            <div className='study-problem'>
                
                <Intro rok={'2017'} zadanie={'2'} punkty={'1'} />
                
                <div className='study-problem-content'>
                    Liczba
                </div> 

                <div className='study-problem-formula'>
                    <BlockMath
                        math={'\\sqrt[3]{54} - \\sqrt[3]{2}'}
                        errorColor={'#cc0000'}
                    />
                </div>

                <div className='study-problem-content'>
                    jest rowna:
                </div> 

                <div className='flex-row-arround'>
                    <div className='study-problem-formula'>
                        <BlockMath
                            math={'A) \\space \\sqrt[3]{52}'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                    <div className='study-problem-formula'>
                        <BlockMath
                            math={'B) \\space 3'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                    <div className='study-problem-formula'>
                        <BlockMath
                            math={'C) \\space 2 \\sqrt[3]{2}'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                    <div className='study-problem-formula'>
                        <BlockMath
                            math={'D) \\space 2'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                </div>

                <div className='study-problem-content'>
                    
                </div> 
            </div>

            <div className='study-line' />

            <div className='study-content'>
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'\\sqrt[3]{54} - \\sqrt[3]{2} = \\sqrt[3]{27 \\cdot 2} - \\sqrt[3]{2} = 3 \\sqrt[3]{2} - \\sqrt[3]{2} = 2 \\sqrt[3]{2}'}
                    errorColor={'#cc0000'}
                />
            </div>


            <div className='flex-row-arround'>
                <div>

                </div>
                <div>
                    
                </div>
            </div>

            <NextPreviosButtons next={'/containers/MaturaPodstawowa/Logarytmy/Zadanie3'} previos={'/containers/MaturaPodstawowa/Logarytmy/Zadanie1'}/>

        </div>
    )
}

export default Zadanie








