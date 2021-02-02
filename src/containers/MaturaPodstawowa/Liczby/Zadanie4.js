
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
                
                <Intro rok={'2015'} zadanie={'3'} punkty={'1'} />
                
                <div className='study-problem-content'>
                    Kwotę  1000  zł  ulokowano  w  banku  na  roczną  lokatę  oprocentowaną  w  wysokości  4%  w  stosunku  rocznym.  Po  zakończeniu  lokaty  od  naliczonych  odsetek  odprowadzany  jest  podatek w wysokości 19%. Maksymalna kwota, jaką po upływie roku będzie można wypłacić z banku, jest równa 
                </div> 

            </div>

           



            <div className='study-line' />

            <div className='study-content'>
                Bierzemy nasze 1000 zł i obliczamy 4% z tej kwoty:
            </div> 

            <div className='study-formula'>
                <BlockMath
                    math={'1000 \\cdot 4 \\% = 1000 \\cdot \\frac{4}{100} = \\frac{4000}{100} = 40'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-line' />

            <div className='study-content'>
                Teraz z tych 40 zł odejmujemy 19%:
            </div> 

            <div className='study-formula'>
                <BlockMath
                    math={'40 - 40 \\cdot 19 \\% = 40 - 40 \\cdot \\frac{19}{100}='}
                    errorColor={'#cc0000'}
                />
            </div>
            <div className='study-formula'>
                <BlockMath
                    math={'= 40 \\cdot (1 - \\frac{19}{100}) = 40 \\cdot (\\frac{100}{100}- \\frac{19}{100}) ='}

                    errorColor={'#cc0000'}
                />
            </div>
            <div className='study-formula'>
                <BlockMath
                    math={'= 40 \\cdot (\\frac{81}{100}) = \\frac{40 \\cdot 81}{100} = \\frac{3240}{100} = 32.4'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-line' />


            <div className='study-content'>
                Dodajemy tą kwotę do naszych 1000 zł i otrzymujemy naszą odpowiedź:
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'32.4 + 1000 = 1032.4'}

                    errorColor={'#cc0000'}
                />
            </div>

            <div className='study-line' />

            <div className='study-content'>
                Powyższe obliczenia można zapisać w krótszy sposób:
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'1000 \\cdot(1 + \\frac{81}{100} \\cdot \\frac{4}{100}) = 1032.4'}

                    errorColor={'#cc0000'}
                />
            </div>
           
            <NextPreviosButtons next={'/containers/MaturaPodstawowa/Liczby/Zadanie5'} previos={'/containers/MaturaPodstawowa/Liczby/Zadanie3'}/>

        </div>
    )
}

export default Zadanie2








