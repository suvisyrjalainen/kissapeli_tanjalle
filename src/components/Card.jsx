import '../App.css';

export default function Card({card, selected, handleSelect, tila}) {
    if (!card) return <div className="card" />;
    if (tila == false) return <div className="card" />;

    return(
        <div className="card">
            <img className="kortinKuva" src={card.image} />
            <ul className="kissalista">
                {card.ominaisuudet.map((listaelementti, index) => (
                    <li 
                    className={`kissanOminaisuus${selected === index ? ' valittu' : ''}`} 
                    onClick={() => handleSelect && handleSelect(index)} key={index}>
                        <span> {listaelementti.name} </span>
                        <span> {listaelementti.value} </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

