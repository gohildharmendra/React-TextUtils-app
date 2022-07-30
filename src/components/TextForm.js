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
        <div className={`card my-2 border border-1 bg-${props.mode==='light'?'':'secondary'} text-${props.mode==='light'?'dark':'light'}`}>
        <div className="card-header">
        {props.heading}
        </div>
        <div className="card-body border border-1">
            <textarea className={`form-control bg-${props.mode==='light'?'':'secondary'}`} value={text} onChange={handleOnchange} id="txtBox" rows="8"></textarea>
        </div>
        <div className="card-footer text-muted">
        <button onClick={handleUpClick} className='btn btn-primary mx-1'>Covert To UpperCase</button>
        <button onClick={handleLowerClick} className='btn btn-success mx-1'>Covert To lowerCase</button>
        <button onClick={handleTCaseClick} className='btn btn-info mx-1'>Covert To TitleCase</button>
        <button onClick={handleCopyClick} className='btn btn-dark mx-1'>Copy Text</button>
        <button onClick={handleExtraSpeceClick} className='btn btn-warning mx-1'>Remove Extra-Space</button>
        <button onClick={handleClearClick} className='btn btn-danger mx-1'>Clear Text</button>
        </div>               
        </div>
        <div className={`card border border-1 bg-${props.mode==='light'?'':'secondary'} text-${props.mode==='light'?'dark':'light'}`}>
        <div className="card-header">
        <h5>Your Text Summary is:</h5>
        </div>
        <div className="card-body">
        <p className="card-title">Total Words: <strong>{text.split(" ").length}</strong>, Total Characters: <strong>{text.length}</strong></p>
        <p className="card-title">Reading Time: <strong>{0.008*text.split(" ").length.toFixed(3)} Minutes</strong></p>
        <hr />
        <h3>Preview:</h3>   
        <pre className="card-text">{text.length>0?text:"Enter somthing in the textbox above to preview it here."}</pre>
        </div>
        <div className="card-footer text-muted">
            Gohil DB
        </div>               
        </div>
    </>
    )
}
