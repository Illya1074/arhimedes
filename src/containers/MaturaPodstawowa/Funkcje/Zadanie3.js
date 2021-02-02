
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
                
                <Intro rok={'2015'} zadanie={'11'} punkty={'1'} />
                
                <div className='study-problem-content'>
                    Funkcja kwadratowa określona jest wzorem
                </div> 

                <div className='study-problem-formula'>
                    <BlockMath
                        math={'f(x)=x^2+x+c'}
                        errorColor={'#cc0000'}
                    />
                </div>

                <div className='study-problem-content'>
                    jeżeli
                </div> 

                <div className='study-problem-formula'>
                    <BlockMath
                        math={'f(3)=4'}
                        errorColor={'#cc0000'}
                    />
                </div>

                <div className='study-problem-content'>
                    to ile wynosi
                </div> 

                <div className='study-problem-formula'>
                    <BlockMath
                        math={'f(1)=?'}
                        errorColor={'#cc0000'}
                    />
                </div>

            </div>

            <div className='study-line' />

            <div className='study-content'>
                No ciekawe zadanie, nie poweim. Spróbojmy odrazu podstawić 1 pod nasz x.
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'f(x)=x^2+x+c'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'f(1)=1^2+1+c'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'f(1)=2+c'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-content'>
                Ups i nie wiadomo co robić. Coż skoro nam jest dane że f(3) = 4 możemy z tego skorzystać i sprobować odnaleść nasze c.
            </div>


            <div className='study-formula'>
                <BlockMath
                    math={'f(3)=3^2+3+c'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'f(3)=12+c'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'f(3)=4'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'4=12+c'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'4-12=c'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'c=-8'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-content'>
                Yeahhhhh mamy to, odnaleźliśmy nasze c, zostalo tylko podstawić wszystko 
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'f(1)=2+c'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'f(1)=2+(-8)'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'f(1)=-6'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-line' />

            <NextPreviosButtons next={'/containers/MaturaPodstawowa/Funkcje/Zadanie4'} previos={'/containers/MaturaPodstawowa/Funkcje/Zadanie2'}/>

        </div>
    )
}

export default Zadanie








