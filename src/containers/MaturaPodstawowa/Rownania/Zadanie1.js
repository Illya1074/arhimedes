
import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
// import './FunkcjaKwadratowa.css'
import Intro from '../../PageElements/Intro/Intro'
import NextPreviosButtons from '../../PageElements/NextPreviosButtons/NextPreviosButtons'
import Wzory from '../../Material/Wzory/Liczby/WzorySrkoconegoMnozenia'

const Zadanie = () => {
    return (
        <div>
       
            <div className='study-problem'>
                
                <Intro rok={'2016'} zadanie={'4'} punkty={'1'} />
                
                <div className='study-problem-content'>
                    Równość
                </div> 

                <div className='study-problem-formula'>
                    <BlockMath
                        math={'(2 \\sqrt{2} - a)^2 = 17 - 12 \\sqrt{2} '}
                        errorColor={'#cc0000'}
                    />
                </div>

                <div className='study-problem-content'>
                    jest prawdziwa dla:
                </div> 


                <div className='flex-row-arround'>
                    <div className='study-problem-formula'>
                        <BlockMath
                            math={'A) a = 3'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                    <div className='study-problem-formula'>
                        <BlockMath
                            math={'B) a = 1'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                    <div className='study-problem-formula'>
                        <BlockMath
                            math={'C)a = -2'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                    <div className='study-problem-formula'>
                        <BlockMath
                            math={'D) a = -3'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                </div>

                <div className='study-problem-content'>
                </div>

            </div>

            <div className='study-line' />

            <Wzory/>

            <div className='study-line' />

            <div className='study-content'>
                Ja bym radził po prostu po kolei podstawiać dane nam wartości pod a, wykorzystując wzory skróconego mnożenia, a dokładnie ten
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'(a-b)^2 = a^2 - 2ab + b^2'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'L = (2 \\sqrt{2} - a)^2'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'P = 17 - 12 \\sqrt{2}'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-content'>
                Lewa strona musi rownać się prawej.
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'L = P'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'A) \\space  L = (2 \\sqrt{2} - 3)^2 = 8 - 12 \\sqrt{2} + 9 = 17 - 12 \\sqrt{2}'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'B) \\space  L = (2 \\sqrt{2} - 1)^2 = 8 - 4 \\sqrt{2} + 1 = 9 - 4 \\sqrt{2}'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'C) \\space L = (2 \\sqrt{2} + 2)^2 = 8 + 8 \\sqrt{2} + 4 = 12 + 8 \\sqrt{2}'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'D) \\space  L = (2 \\sqrt{2} + 3)^2 = 8 + 12 \\sqrt{2} + 8 = 17 + 12 \\sqrt{2}'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-content'>
                Widzimy że lewa strona równa się prawej w przypadku A) czyli kiedy a = 3.
            </div>

            <NextPreviosButtons next={'/containers/MaturaPodstawowa/Rownania/Zadanie2'} previos={'/containers/MaturaPodstawowa/Rownania/Zadanie2'}/>

        </div>
    )
}

export default Zadanie








