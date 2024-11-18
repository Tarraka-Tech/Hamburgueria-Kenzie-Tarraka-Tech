import input from './input.module.css'
import {Button} from '../Button/Button'

function InputSearch({onChange,id,type,className,value,placeholder,setFiltro}){

    function sendSearch(event){
        event.preventDefault()
        setFiltro(event.target.children[0].value)
        event.target.children[0].value=''
    }

    return(
        <form onSubmit={sendSearch}>
            <Label htmlFor={id}></Label>
            <input onChange={onChange} id={id} type={type} className={className} value={value} placeholder={placeholder}></input>
            <Button type={'submit'}>Pesquisar</Button>
        </form>
    )
}

function Label({htmlFor,children}){
    <label htmlFor={htmlFor}>{children}</label>
}

export{InputSearch}