import { useState } from "react"

const TextFrom = (props) => {
  const clickUpButton = () => {
    let upperCase = text.toUpperCase();
    console.log("Click Up Button " + text);
    setText(upperCase);
  }
  const clickDownButton = () => {
    console.log("Click Down Button " + text);
    let lowerCase = text.toLowerCase();
    setText(lowerCase);
  }
  const clickToClear = () => {
    console.log("Clear text " + text);
    let clearText = "";
    setText(clearText);
  }
  const OnChange = (event) => {
    console.log("Click Up Button");
    setText(event.target.value);
  }

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const [text, setText] = useState("");
  return (
    <>
    <div className='container' style={{color: props.mode=== 'dark'?'white':'black'}}>
      <div className="mb-3 py-5">
        <h3>{props.heading}</h3>
        <textarea className="form-control" onChange={OnChange} value={text} style={{
          background: props.mode==='dark'?'gray':"white", color: props.mode=== 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        <button id="UpButton" className='btn btn-primary my-3' onClick={clickUpButton}>Convert to Uppercase</button>
        <button className='btn btn-primary my-3 ms-3' onClick={clickDownButton}>Convert to Lowercase</button>
        <button className='btn btn-primary my-3 ms-3' onClick={clickToClear}>Clear text</button>
        <button className='btn btn-primary my-3 ms-3' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary my-3 ms-3' onClick={handleExtraSpaces}>Remove extra spaces</button>
      </div>
    </div>
    <div className="container my-2" style={{color: props.mode=== 'dark'?'white':'black'}}>
      <h3>{props.textCount}</h3>
      <p>{text.split(" ").length} Words and {text.length} Character</p>
      <p>{0.008 * text.split(" ").length}Read Words</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the box above to preview it here"}</p>
    </div>
    </>
  )
}

export default TextFrom
