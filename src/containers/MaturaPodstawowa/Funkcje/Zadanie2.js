import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
// import './FunkcjaKwadratowa.css'
import Intro from '../../PageElements/Intro/Intro'
import NextPreviosButtons from '../../PageElements/NextPreviosButtons/NextPreviosButtons'
import MiejsceZerowe from '../../Material/Twierdzenia/Funkcja/MiejsceZerowe'

const Zadanie = () => {
    return (
        <div>
            
            
            
            <div className='study-problem'>
                
                <Intro rok={'2015'} zadanie={'10'} punkty={'1'} />
                
                <div className='study-problem-content'>
                    Funkcja liniowa f określona wzorem
                </div> 

                <div className='study-problem-formula'>
                    <BlockMath
                        math={'f(x) = 2x + b'}

                        errorColor={'#cc0000'}
                    />
                </div>

                <div className='study-problem-content'>
                    ma takie samo miejsce zerowe, jakie ma funkcja liniowa
                </div>

                <div className='study-problem-formula'>
                    <BlockMath
                        math={'g(x)=-3x+4'}
                        errorColor={'#cc0000'}
                    />
                </div>

                <div className='study-problem-content'>
                    Ile wynosi b?
                </div>

            </div>

            <div className='study-line' />

            <MiejsceZerowe/>

            <div className='study-content'>
                Mamy dwa rownania. Wiadomo ze mają takie same miejsca zerowe.
            </div>

            <div className='flex-row-arround'>
                <div>
                    <div className='study-formula'>
                        <BlockMath
                            math={'f(x)= 2x + b'}

                            errorColor={'#cc0000'}
                        />
                    </div>
                </div>
                <div>
                    <div className='study-formula'>
                        <BlockMath
                            math={'g(x)=-3x+4'}

                            errorColor={'#cc0000'}
                        />
                    </div>
                </div>
            </div>

            <div className='study-content'>
                czyli kiedy te funkcję przyjmują wartość zero oni mają taki sam argument (x). 
            </div>

            <div className='flex-row-arround'>
                <div>
                    <div className='study-formula'>
                        <BlockMath
                            math={'gdy \\space \\space f(x_1) = 0'}

                            errorColor={'#cc0000'}
                        />
                    </div>
                </div>
                <div>
                    <div className='study-formula'>
                        <BlockMath
                            math={'oraz'}

                            errorColor={'#cc0000'}
                        />
                    </div>
                </div>
                <div>
                    <div className='study-formula'>
                        <BlockMath
                            math={'gdy \\space \\space g(x_2) = 0'}

                            errorColor={'#cc0000'}
                        />
                    </div>
                </div>
            </div>

            <div className='study-formula'>
                        <BlockMath
                            math={'x_1 = x_2'}

                            errorColor={'#cc0000'}
                        />
                    </div>

            <div className='study-content'>
                Obliczmy miejszce zerowe równania. Żeby to zrobić musimy znaleść argument (x) dla którego wartość (czyli f(x) albo y) równa się 0.
                Czyli przyrównujemy funkcję do zera. Weźmiemy równanie które ma tylko jedną niewiadomą czyli g(x), bo tam to co z dwoma niewiadomymi to nic nie obliczymy. 
            </div>

            <div>
                <div className='study-formula'>
                    <BlockMath
                        math={'g(x)=-3x+4'}

                        errorColor={'#cc0000'}
                    />
                </div>
            </div>

            <div>
                <div className='study-formula'>
                    <BlockMath
                        math={'0 =-3x+4'}

                        errorColor={'#cc0000'}
                    />
                </div>
            </div>

            <div>
                <div className='study-formula'>
                    <BlockMath
                        math={'-4=-3x'}

                        errorColor={'#cc0000'}
                    />
                </div>
            </div>

            <div>
                <div className='study-formula'>
                    <BlockMath
                        math={'\\frac{4}{3}=x'}

                        errorColor={'#cc0000'}
                    />
                </div>
            </div>

            <div className='study-content'>
                No i mamy miejsce zerowe, skoro w jednym i drugim równaniu miejsca zerowe są takie same, możemy obliczyć b.
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'f(x)= 2x + b'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'0 = 2x + b'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-content'>
                Przyrównaliśmy funkcję do zera, czyli w tym momencie x to miejsce zerowe i jest ono takie same jak i w poprzednim równaniu.
                Odpowiednio podstawiamy pod x to nam wyszło w poprzednim równaniu.
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'0 = 2 \\cdot \\frac{4}{3} + b'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'-b = 2 \\cdot \\frac{4}{3}'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'-b = \\frac{ 2 \\cdot 4}{3}'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'-b = \\frac{8}{3}'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'b = - \\frac{8}{3}'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-line'/>

            <NextPreviosButtons next={'/containers/MaturaPodstawowa/Funkcje/Zadanie3'} previos={'/containers/MaturaPodstawowa/Funkcje/Zadanie1'}/>

        </div>
    )
}

export default Zadanie








