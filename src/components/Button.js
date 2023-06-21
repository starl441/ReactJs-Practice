import './Button.css'

function Buttonn(){
    function clickevent(){
        console.log('play')
    }

    return(
        <button onClick={clickevent} >Play</button>
    )
}

export default Buttonn