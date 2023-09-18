import './FrontDisplay.css'

export const FrontDisplay = ({ id, name, avatar, error }) => {
    return (
        <div className='view-section'>
            <div className='view-container'>
                {!error
                    ?
                    <>
                        <h3><span className='anim-name'>{`#${id} - It's ${name}`}</span></h3>
                        <img key={`avatar-${id}`} alt={`This is an avatar ${name}`} className='avatar' src={avatar} />
                    </>
                    :
                    <>
                        <h3><span className='anim-name'>Could not find</span></h3>
                        <span className='error-icon'>?</span>
                    </>
                }
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