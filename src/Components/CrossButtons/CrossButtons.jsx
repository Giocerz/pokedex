export const CrossButtons = ({ valueAdd, valueSubs }) => {
    return (
        <div className='cross-buttons'>
            <button className='cross-btn up' title='up' onClick={() => valueAdd(1)}>
                <i className="fa-solid fa-caret-up"></i>
            </button>
            <button className='cross-btn left' title='left' onClick={() => valueSubs(10)}>
                <i className="fa-solid fa-caret-left"></i>
            </button>
            <div className='cross-center' />
            <button className='cross-btn right' title='right' onClick={() => valueAdd(10)}>
                <i className="fa-solid fa-caret-right"></i>
            </button>
            <button className='cross-btn down' title='down' onClick={() => valueSubs(1)}>
                <i className="fa-solid fa-caret-down"></i>
            </button>
        </div>
    )
}