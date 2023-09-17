import './MatrixButtons.css'

export const MatrixButtons = ({ handle }) => {
    return (
        <div className='matrix-buttons'>
            <button className='matrix-btn' title='description' onClick={() => handle(0)}><i className="fa-sharp fa-solid fa-file-lines"></i></button>
            <button className='matrix-btn' title='stats' onClick={() => handle(1)}><i className="fa fa-bar-chart"></i></button>
            <a href='https://www.linkedin.com/in/giovanni-caicedo-escorcia' target='_blank' rel='noreferrer'><span className='matrix-btn external'><i className="fa-brands fa-linkedin"></i></span></a>
            <a href='https://github.com/Giocerz' target='_blank' rel='noreferrer'><span className='matrix-btn external'><i className="fa-brands fa-github"></i></span></a>
            <button className='matrix-btn'>3</button>
            <button className='matrix-btn'>4</button>
            <button className='matrix-btn'>5</button>
            <button className='matrix-btn'>6</button>
            <button className='matrix-btn'>7</button>
            <button className='matrix-btn'>8</button>
        </div>
    )
}