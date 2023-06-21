import './Button.css'

function Button({onsmash,text,onpause}){
    let state=0
    function clickevent(e){
        console.log(e)
        e.stopPropagation()//This will stop event propogation which took place in App.js container element
        if(state===0){
            onsmash()
            state=1
        }
        else if(state===1){
            onpause();
            state=0;
        }
        
        
    }

    return(
        <button onClick={clickevent} >{text}</button>
    )
}

export default Button