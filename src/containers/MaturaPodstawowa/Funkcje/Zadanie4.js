
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
                
                <Intro rok={'2015'} zadanie={'18'} punkty={'1'} />
                
                <div className='study-problem-content'>
                    Prosta l o równaniu 
                </div> 

                <div className='study-problem-formula'>
                    <BlockMath
                        math={'y=m^2 x + 3'}
                        errorColor={'#cc0000'}
                    />
                </div>

                <div className='study-problem-content'>
                    jest  równoległa  do  prostej  k  o  równaniu 
                </div>

                 <div className='study-problem-formula'>
                    <BlockMath
                        math={'y=(4m-4)x-3'}
                        errorColor={'#cc0000'}
                    />
                </div>

                <div className='study-problem-content'>
                    zatem ile wynosi m?
                </div>
            </div>

            <div className='study-line' />

            <div className='study-content'>
                W funkcji liniowej to co stoi przed x nazywa się wspólczynikiem kierunkowym, który decyduje o kierunku prostej na wykresie. Na poniższym
                przykładzie tym współczynikiem kierunkowym jest (4m-4).
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'y=(4m-4)x-3'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-content'>
                Żeby proste l i k byly równoległe to ich wspólczyniki kierunkowe mają być coooo????
            </div>

            <div className='study-content'>
                Takie same, dokładnie!!! Jak mają ten sam kierunek to nie przecinają się i są równoległe.
            </div>

            <div className='study-content'>
                Wspólczynik kierunkowy to co stoi przed x czyli
            </div>
            
            <div className='flex-row-arround'>
                <div>
                    <div className='study-formula'>
                        <BlockMath
                            math={'y=(4m-4)x-3'}
                            errorColor={'#cc0000'}
                        />
                    </div>
            
                    <div className='study-formula'>
                        <BlockMath
                            math={'4m-4'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                </div>
                <div>
                    <div className='study-formula'>
                        <BlockMath
                            math={'y=m^2 x + 3'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                    
                    <div className='study-formula'>
                        <BlockMath
                            math={'m^2'}
                            errorColor={'#cc0000'}
                        />
                    </div>
                </div>
            </div>

            <div className='study-content'>
                Przyrównujemy to wszystko
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'m^2=4m-4'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'m^2=4m-4'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'m^2 - 4m + 4 = 0'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'\\Delta = 16 -16'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'m_0 = \\frac{4}{2}'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'m_0 = 2'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'Odp: m = 2'}
                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-line'/>

            <NextPreviosButtons next={'/containers/MaturaPodstawowa/Funkcje/Zadanie5'} previos={'/containers/MaturaPodstawowa/Funkcje/Zadanie3'}/>

        </div>
    )
}

export default Zadanie








