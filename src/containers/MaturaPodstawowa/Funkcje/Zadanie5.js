
import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
// import './FunkcjaKwadratowa.css'
import Intro from '../../PageElements/Intro/Intro'
import NextPreviosButtons from '../../PageElements/NextPreviosButtons/NextPreviosButtons'
import Prostopadlosc from '../../Material/Wzory/Funkcja/ProstapodlosKierunkowa'
import WspolczynikKierunkowy from '../../Material/Wlasciwosci/Funkcje/WspolczynikKierunkowy'


const Zadanie = () => {
    return (
        <div>
                        
            <div className='study-problem'>
                
                <Intro rok={'2015'} zadanie={'19'} punkty={'1'} />
                
                <div className='study-problem-content'>
                    Proste o równaniach:
                </div> 

                <div className='study-problem-formula'>
                    <BlockMath
                        math={'y=2mx-m^2-1'}
                        errorColor={'#cc0000'}
                    />
                </div>

                <div className='study-problem-content'>
                    oraz
                </div>

                <div className='study-problem-formula'>
                    <BlockMath
                        math={'y=4m^2 x+m^2+1'}
                        errorColor={'#cc0000'}
                    />
                </div>

                <div className='study-problem-content'>
                    są prostopadłe dla jakiej wartości m???
                </div>  
            </div>

            <div className='study-line' />

            <Prostopadlosc/>

            <div className='study-content'>
                Czyli żeby proste były prostopadłe musimy znaleść takie <i>m</i> dla którego iloczyn wspólczynikow kierunkowych naszych prostych będzie wynosić -1.
            </div>

            <WspolczynikKierunkowy/>

            <div className='study-content'>
                Bierzemy to co mamy przed x
            </div>

            <div className='flex-row-arround'>
                <div>
                    <div className='study-formula'>
                        <BlockMath
                            math={'y=2mx-m^2-1'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                    <div className='study-formula'>
                        <BlockMath
                            math={'czyli \\space \\space 2m'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                </div>
                <div>
                    <div className='study-formula'>
                        <BlockMath
                            math={'y=4m^2 x +m^2+1'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                    <div className='study-formula'>
                        <BlockMath
                            math={'czyli \\space \\space 4m^2'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                </div>
            </div>
            
            <div className='study-content'>
                Iloczyn przyrównujemy do -1
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'4m^2 \\cdot 2m = -1'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'8m^3 = -1'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'m^3 = \\frac{-1}{8}'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'m = - \\frac{1}{2}'}
                    errorColor={'#cc0000'}
                />
            </div>
            
            <div className='study-line' />

            <NextPreviosButtons next={'/containers/MaturaPodstawowa/Funkcje/Zadanie1'} previos={'/containers/MaturaPodstawowa/Funkcje/Zadanie4'}/>

        </div>
    )
}

export default Zadanie








