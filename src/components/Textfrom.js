
import React,{ useState }  from 'react'



export default function Textfrom(props) {
  const handleUpClick = ()=>{  // To change text into uppercase
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");

  }
  const handleCapClick = ()=>{  // To change text into uppercase
    const words=text.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }
  setText(words.join(" "));
  props.showAlert("Captilised has been done!","success");

  }
  const handleLoClick = ()=>{  // To change text into uppercase
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success");
  }

  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!","success");
  }
  const handleClearClick = ()=>{  // To change text into uppercase
    setText("");
    props.showAlert("All clear","success");
  }

  const handleExtraSpaces=()=>{
    const newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!","success");

  }
  const handleOnChange = (event)=>{
    setText(event.target.value);// right way to change
    // text="new text" wring way to change
  }
  const [text,setText] = useState('');
  return (
    <>
    <div>
        <h1 style={{color:props.mode==='dark'?'white':'#053B50'}}>{props.heading}</h1>
     <div className="mb-3">
     <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#053B50':'white',color:props.mode==='dark'?'white':'#08083a'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCapClick}>Captalised</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3 " style={{color:props.mode==='dark'?'white':'#08083a'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} Characters</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
      </>
  )
}
