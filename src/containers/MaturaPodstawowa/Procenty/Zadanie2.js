
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
                
                <Intro rok={'2017'} zadanie={'4'} punkty={'1'} />
                
                <div className='study-problem-content'>
                    Liczba osobników pewnego zagrożonego wyginięciem gatunku zwierząt wzrosła w stosunku do liczby tych zwierząt z 31 grudnia 2011r. o 120% i obecnie jest równa 8910. Ile zwierząt liczyła populacja tego gatunku w ostatnim dniu 2011 roku?
                </div>
                
                <div className='flex-row-arround'>
                    <div className='study-problem-formula'>
                        <BlockMath
                            math={'A) 4050'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                    <div className='study-problem-formula'>
                        <BlockMath
                            math={'B) 1782'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                    <div className='study-problem-formula'>
                        <BlockMath
                            math={'C) 7425'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                    <div className='study-problem-formula'>
                        <BlockMath
                            math={'D) 7128'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                </div>

            </div>

            <div className='study-line' />

            <div className='study-content'>
                Powiedzmy że w dniu 31 grudnia 2011 roku mieliśmy x zwierząt, obecnie ich liczba wzrosła o 120% czyli do x dodajemy
                120%x czyli x + 1.2x = 2.2x. No i mamy równanko
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'2,2x = 8910'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'x = \\frac{8910}{2,2}'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'x = 4050'}
                    errorColor={'#cc0000'}
                />
            </div>


            <NextPreviosButtons next={'/containers/MaturaPodstawowa/Procenty/Zadanie3'} previos={'/containers/MaturaPodstawowa/Procenty/Zadanie1'}/>

        </div>
    )
}

export default Zadanie








