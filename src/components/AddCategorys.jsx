import { useState } from "react"

export const AddCategorys = ({ onNewCategory }) => {

const [inputValue, setinputValue] = useState('');

const onInputChange = ({ target })=>{
    setinputValue(target.value);
}

const onSubmit= (event)=>{
    event.preventDefault();
    if ( inputValue.trim().length <=1 ){ 
      return 
    };
  onNewCategory(inputValue.trim())
  setinputValue('');
  
}
return (
<form onSubmit = { onSubmit }> {/*(event)=> onSubmit(event)*/}

  <input
    type="text"
    placeholder = "Buscar gifs"
    value = {inputValue}
    onChange = { onInputChange }//el event va implicito
  />

</form>
  )
}
