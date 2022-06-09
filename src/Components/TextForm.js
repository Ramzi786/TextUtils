import React, {useState} from 'react'

export default function TextForm(props) {
const handleUpClick = ()=>{
    console.log("Upper Case was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success")
    
}
const handleLoClick = ()=>{
    console.log("Lower Case was clicked"+text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success")
}

    const handleClear= ()=>{
        console.log("Lower Case was clicked"+text);
        let newText =(" ");
        setText(newText);
        props.showAlert("Clear !","success")}


const handleOnChange = (event)=>{
    setText(event.target.value);
}
const [text, setText] = useState('');

//text="newtext"; //Galat Tareeka!! to change the state of value.
//setText("newtext"); //Sahi Tareeka!! to change the state of value.

return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
   <h1>{props.heading}</h1>
    <div className="form-group">

      <textarea className="form-control my-3" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#042141':'white', color: props.mode==='dark'?'white':'black'}}id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-outline-primary mx-2 my-1" onClick={handleUpClick}>Capital</button>
    <button className="btn btn-outline-success mx-1 my-1" onClick={handleLoClick}>Small</button>
    <button className="btn btn-outline-danger mx-1 my-1" onClick={handleClear}>Clear</button>
  </div>
  <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h3>Text summary</h3>
      <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes </p>
      <h3>Preview</h3>
      <p>{text.length>0?text:<em>Enter Something to preview it here</em>}</p>
  </div>
  </>
  )
}
