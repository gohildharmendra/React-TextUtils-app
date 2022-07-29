import React,{useState} from 'react'

export default function TextForm(props) {   
    const [text,setText] = useState("");
    // text = "New values change";//Wronng way to Change values
    // setText("New values change");//right way to Change values
    const handleOnchange=(event)=>{
        setText(event.target.value);
    }
    const handleUpClick=()=>{
        let txtvalues = text.toUpperCase();
        setText(txtvalues);
    }
    const handleLowerClick=()=>{
        let txtvalues = text.toLowerCase();
        setText(txtvalues);
    }
    const handleTCaseClick=()=>{
        let txtvalues = text.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
        setText(txtvalues);
    }
    const handleCopyClick=()=>{
        let txtvalues = document.getElementById('txtBox');
        txtvalues.select();
        navigator.clipboard.writeText(txtvalues.value);
    }
    const handleExtraSpeceClick=()=>{
        let newValues = text.split(/[ ]+/);
        setText(newValues.join(" "));
    }
    const handleClearClick=()=>{
        let txtvalues = '';
        setText(txtvalues);
    }
    return (
    <>
        <div className="card my-2">
        <div className="card-header">
        {props.heading}
        </div>
        <div className="card-body">
            <textarea className="form-control" value={text} onChange={handleOnchange} id="txtBox" rows="8"></textarea>
        </div>
        <div className="card-footer text-muted">
        <button onClick={handleUpClick} className='btn btn-outline-primary mx-1'>Covert To UpperCase</button>
        <button onClick={handleLowerClick} className='btn btn-outline-success mx-1'>Covert To lowerCase</button>
        <button onClick={handleTCaseClick} className='btn btn-outline-info mx-1'>Covert To TitleCase</button>
        <button onClick={handleCopyClick} className='btn btn-outline-dark mx-1'>Copy Text</button>
        <button onClick={handleExtraSpeceClick} className='btn btn-outline-warning mx-1'>Remove Extra-Space</button>
        <button onClick={handleClearClick} className='btn btn-outline-danger mx-1'>Clear Text</button>
        </div>               
        </div>
        <div className="card">
        <div className="card-header">
        <h5>Your Text Summary is:</h5>
        </div>
        <div className="card-body">
        <p className="card-title">Total Words: <strong>{text.split(" ").length}</strong>, Total Characters: <strong>{text.length}</strong></p>
        <p className="card-title">Reading Time: <strong>{0.008*text.split(" ").length.toFixed(3)} Minutes</strong></p>
        <hr />
        <h3>Preview:</h3>   
        <pre className="card-text">{text}</pre>
        </div>
        <div className="card-footer text-muted">
            Gohil DB
        </div>               
        </div>
    </>
    )
}
