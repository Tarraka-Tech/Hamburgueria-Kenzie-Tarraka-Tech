import button from './button.module.css'

function Button({className,id,onClick,children}){
    return(
        <button className={className && `${button[className]}`} id={id} onClick={onClick}>{children}</button>
    )
}

export {Button}