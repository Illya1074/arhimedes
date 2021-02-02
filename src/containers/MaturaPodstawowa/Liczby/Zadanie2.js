
import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
// import './FunkcjaKwadratowa.css'
import WartoscBezwzgledna from '../../Material/Numbers/Teoria/SpojnikiWartosciBezwglednej/SpojnikiWartosciBezwglednej'
import Intro from '../../PageElements/Intro/Intro'
import NextPreviosButtons from '../../PageElements/NextPreviosButtons/NextPreviosButtons'

const Zadanie2 = () => {
    return (
        <div>
            
            
            <div className='study-problem'>
                <Intro rok={'2015'} zadanie={'2'} punkty={'1'} />
                
                <div className='study-problem-content'>
                    Rozwiąż nierówność
                </div>

                <div className='study-problem-formula'>
                <BlockMath
                        math={'\\space \\space -4 \\leqslant x-1 \\leqslant 4'}
                        errorColor={'#cc0000'}
                    />                
                </div>
            

            </div>
            

            <div className='study-line' />

           

            <div className='study-content'>
                Zapiszmy tą nierówność w innej postaci
            </div> 

            <div className='study-formula'>
                <BlockMath
                    math={'\\space \\space -4 \\leqslant x-1 \\land   x-1  \\leqslant 4'}

                    errorColor={'#cc0000'}
                />
            </div>

            <WartoscBezwzgledna/>

            <div className='study-line' />

            <div className='study-content'>
                Tera po kolei rozwiazujemy nierowności
            </div> 
           
            <div className="flex-row-arround">
                <div>
                    <div className='study-formula'>
                        <BlockMath
                            math={'-4 \\leqslant x-1'}

                            errorColor={'#cc0000'}
                        />
                    </div>
                    <div className='study-formula'>
                        <BlockMath
                            math={'-4 + 1 \\leqslant x'}

                            errorColor={'#cc0000'}
                        />
                    </div>
                    <div className='study-formula'>
                        <BlockMath
                            math={'-3 \\leqslant x'}

                            errorColor={'#cc0000'}
                        />
                    </div>
                </div>

                <div>
                    <div className='study-formula'>
                        <BlockMath
                            math={'\\land'}

                            errorColor={'#cc0000'}
                        />
                    </div>
                </div>

                <div>
                    <div className='study-formula'>
                        <BlockMath
                            math={'x-1  \\leqslant 4'}

                            errorColor={'#cc0000'}
                        />
                    </div>
                    <div className='study-formula'>
                        <BlockMath
                            math={'x  \\leqslant 4 + 1'}

                            errorColor={'#cc0000'}
                        />
                    </div>
                    <div className='study-formula'>
                        <BlockMath
                            math={'x  \\leqslant 5'}

                            errorColor={'#cc0000'}
                        />
                    </div>
                    
                </div>
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'-3 \\leqslant x \\land x  \\leqslant 5 '}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-content'>
                Ze względu na spójnik "i" szukamy częśći wspólnej, odpowiedzią będzie:
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'x \\in ⟨ -3, 5 ⟩'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-content'>
                Gdyby był spojnik "lub"
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'-3 \\leqslant x \\lor x  \\leqslant 5 '}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-content'>
                W tedy odpowiedzią bylaby każda liczba, no bo każda liczba jest albo większa od -3 albo mniejsza od 5😊😊😊
            </div>

            <NextPreviosButtons next={'/containers/MaturaPodstawowa/Liczby/Zadanie3'} previos={'/containers/MaturaPodstawowa/Liczby/Zadanie1'}/>

        </div>
    )
}

export default Zadanie2








