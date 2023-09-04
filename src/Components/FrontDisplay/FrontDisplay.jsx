import './FrontDisplay.css'

export const FrontDisplay = ({ id, name, avatar }) => {
    return (
        <div className='view-section'>
            <div className='view-container'>
                <h3><span className='anim-name'>{`#${id} - It's ${name}`}</span></h3>
                <img alt={`This is an avatar ${name}`} className='avatar' src={avatar} />
            </div>
            <div className='view-section-bottom'>
                <div className='top-circle red' />
                <div className='bars-section'>
                    <div className='bars' />
                    <div className='bars' />
                    <div className='bars' />
                </div>
            </div>
        </div> 
    )
}