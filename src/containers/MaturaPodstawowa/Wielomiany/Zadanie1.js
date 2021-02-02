
import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
// import './FunkcjaKwadratowa.css'
import Intro from '../../PageElements/Intro/Intro'
import NextPreviosButtons from '../../PageElements/NextPreviosButtons/NextPreviosButtons'

const Wielomiany = () => {
    return (
        <div>
            
            <div className='study-problem'>

                <Intro rok={'2015'} zadanie={'5'} punkty={'1'} />

                <div className='study-problem-content'>
                    Rozwiąż równanie:
                </div> 

                <div className='study-problem-formula'>
                    <BlockMath
                        math={'x^3 - 5x^2 - 9x + 45 = 0'}

                        errorColor={'#cc0000'}
                    />
                </div>
            </div>

            <div className='study-line' />
            
            <div className='study-content'>
                Pierszy sposób:
            </div> 

            <div className='study-content'>
                Szukamy calkowite dzielniki liczby 45. Będą to:
            </div> 

            <div className='study-formula'>
                <BlockMath
                    math={'1, -1, \\space 3, -3,\\space 5, -5,\\space 15, -15, \\space 45, -45'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-content'>
                Tera po kolei podstawiamy te liczby i ważne żebyśmy uzskali w sumie zero. W naszym przypadku to będzie 5. 
            </div> 

            <div className='study-formula'>
                <BlockMath
                    math={'5^3 - 5 \\cdot 5^2 - 9 \\cdot 5 + 45 = ?'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'125 - 125 - 45 + 45 = 0'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-content'>
                Z tabeli hornera uzyskiwamy resztę z dzielenia:
            </div> 

            <div className='study-table'>
                <div className='study-table-row first'>
                    <div className='study-table-row-element first'>
                        
                    </div>
                    <div className='study-table-row-element'>
                        1
                    </div>
                    <div className='study-table-row-element'>
                        -5
                    </div>  
                    <div className='study-table-row-element'>
                        -9
                    </div>
                    <div className='study-table-row-element'>
                        45
                    </div>
                </div>    
                <div className='study-table-row'>
                    <div className='study-table-row-element first'>
                        5
                    </div>
                    <div className='study-table-row-element'>
                        1
                    </div>
                    <div className='study-table-row-element'>
                        0
                    </div>  
                    <div className='study-table-row-element'>
                        9
                    </div>
                    <div className='study-table-row-element'>
                        0
                    </div>
                </div>
            </div>
            
            <div className='study-formula'>
                <BlockMath
                    math={'(x^2 - 9)(x-5)=0'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-content'>
                Odp: 3,-3, 5
            </div>

            

            <div className='study-line' />

            <div className='study-content'>
                Drugi sposób, grupowanko!!!
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'x^3 - 5x^2 - 9x + 45 = x^2 (x - 5) - 9(x - 5) = '}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'= (x - 5)(x^2 - 9)'}

                    errorColor={'#cc0000'}
                />
            </div>


            <div className='study-content'>
                Odp: 3,-3, 5, bo:
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'(3 - 5)(3^2 - 9) = -2 \\cdot (9 - 9) = -2 \\cdot 0 = 0'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'(3 - 5)(-3^2 - 9) = -2 \\cdot (9 - 9) = -2 \\cdot 0 = 0'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'(5 - 5)(5^2 - 9) = 0 \\cdot (5^2 - 9) = 0'}

                    errorColor={'#cc0000'}
                />
            </div>

            <NextPreviosButtons next={'/containers/MaturaPodstawowa/Wielomiany/Zadanie2'} previos={'/containers/MaturaPodstawowa/Wielomiany/Zadanie2'}/>

        </div>
    )
}

export default Wielomiany
