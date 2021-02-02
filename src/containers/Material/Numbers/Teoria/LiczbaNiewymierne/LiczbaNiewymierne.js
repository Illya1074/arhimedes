import React from 'react'
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const LiczbyNiewymierne = () => {
    return (
        <div>
            
            <h1 className='study-title'>Liczby&nbsp;Niewymierne</h1>
            
            <div className='study-content'>
                Taka w matmie jest zasada, 
                jesli liczba jest pod pierwiastkiem,
                 
                a w postaci ułamku tego nie da rady zapisać, to jest to liczba niewymierna. Najcześciej takie liczby są pod pierwiastkiem √,
                albo jakieś konstanty np jak pi. 
                
            </div>

            <div className='study-formula'>
                <BlockMath
                    math={'np. \\space \\sqrt{\\smash[b]{3}}, \\space \\sqrt{\\smash[b]{2}}, \\space \\sqrt{\\smash[b]{5}}, \\space \\pi' }
                    errorColor={'#cc0000'}
                />
            </div>
            
            <div className='study-content'>
                Jak byś się nie staral pierwiastek z 2 nie zapiszesz w postaci ułamku. A skąd mamy wiedzić jakie liczby nie możemy zapisać w postaci ułamku???
                To jest dobre pytanie. Nie wiem.
                
            </div>

        </div>
    )
}

export default LiczbyNiewymierne
