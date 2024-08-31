import React, {useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState("");
    const [prevtext,setprevtext] = useState("");
    // Changing to UpperCase
    const handleUpClick = ()=>{
        setprevtext(text);
        let up = text.toUpperCase();
        setText(up);
        props.showAlert("Converted to Upper case","success");
    }

    // Writing of text
    const handleChange = (event) =>{
        setprevtext(text);
        setText(event.target.value);
    }

    // Changing to lowerCase
    const handleLowClick = ()=>{
        setprevtext(text);
        let low = text.toLowerCase();
        setText(low);
        props.showAlert("Converted to Lower case","success");
    }

    // Clearing the text field
    const handleClearClick = ()=>{
        setprevtext(text);
        let newtext = '';
        setText(newtext);
        props.showAlert("Cleared the textarea","success");
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    // reverting the previous text
    const handleBackClick = () =>{
        let newText = prevtext;
        setText(newText);
    }

    const handleCopy = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard","success");
    }
    
    return (
        <>
        <div className='container' style={{color:props.mode === 'dark'?'white':'black'}}>
            <div className="my-3">
                <h1 className='my-4'>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleChange} id="myBox" rows="8" style={{color:props.mode === 'dark'?'white':'black',backgroundColor:props.mode === 'dark'?'#adb5bd':'white'}}></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleUpClick}>UpperCase</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleLowClick}>LowerCase</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleBackClick}>Back</button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleCopy}>Copy</button>
            <button type="submit" onClick={speak} disabled={text.length===0} className="btn btn-warning mx-2">Speak</button>
        </div>
        <div className="container my-3" style={{color:props.mode === 'dark'?'white':'black'}}>
            <h2>Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Min to read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : "Enter text to preivew"}</p>
        </div>
        </>
    )
}
