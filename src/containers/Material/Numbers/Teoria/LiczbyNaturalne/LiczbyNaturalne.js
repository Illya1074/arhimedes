import React from 'react'

const LiczbyNaturalne = () => {
    return (
        <div>
            <h1 className='study-title'>Liczby&nbsp;Naturalne</h1>
            <div className='study-content'>
                Pewnie ciągle mylisz te pojęcia 😔😥😔 nie wiesz czym się różnią liczby naturalne i calkowite, wymierne oraz niewymierne.
                Dobra spróbójmy skorzystać ze skojarzeń. Mi szczerze slowo "naturalny" kojarzy się z naturą, odpowiednio z przyrodą. W przyrodzie
                wystepują drzewa🌲🌲🌲. Ilość drzew nie może być ujemna, i nie ma czegoś takiego jak pięć siódmych drzewa (oczywiście pod warunkiem
                jeśli PiS nie rządzi). Więc drzew może być 10, 20, 100 i nie ma czegoś takiego jak 0.564 drzewa albo -45 drzew... O to cała filozofia
                liczb naturalnych. 
            </div>
            <div className="study-pic" style={{background:'url(./nature.png)', width: '60%', height: '200px', margin: '30px auto 0'}}>

            </div>
        </div>
    )
}

export default LiczbyNaturalne
