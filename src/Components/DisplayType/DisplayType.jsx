import './DisplayType.css'

export const DisplayType = ({ children }) => {
    return (
        <div className={`display-type ${children}`}>
            <span>{children}</span>
        </div>
    )
}