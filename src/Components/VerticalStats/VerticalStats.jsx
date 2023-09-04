import './VerticalStats.css'

export const VerticalStats = ({ hp, at, def, specialDefense, specialAttack, speed }) => {
    const generateListItems = (value) => {
        const items = [];
        items.push(<span>{value}</span>)
        value = Math.ceil(value * (15 / 255));
        for (let i = 0; i < value; i++) {
            items.push(<li key={i}></li>);
        }
        return items;
    };

    return (
        <div className='stats-grid'>
            <div className='stat hp'>
                <ul>
                    {generateListItems(hp)}
                </ul>
            </div>
            <div className='stat attack'>
                <ul>
                    {generateListItems(at)}
                </ul>
            </div>
            <div className='stat defense'>
                <ul>
                    {generateListItems(def)}
                </ul>
            </div>
            <div className='stat special-attack'>
                <ul>
                    {generateListItems(specialAttack)}
                </ul>
            </div>
            <div className='stat special-defense'>
                <ul>
                    {generateListItems(specialDefense)}
                </ul>
            </div>
            <div className='stat speed'>
                <ul>
                    {generateListItems(speed)}
                </ul>
            </div>
            <span>PS</span>
            <span>Attack</span>
            <span>Defense</span>
            <span>Special Attack</span>
            <span>Special Defense</span>
            <span>Speed</span>
        </div>
    )
}