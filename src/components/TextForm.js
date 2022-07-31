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
        props.showAlert("Text Conver to UPPER-CASE Successfully.","primary");
    }
    const handleLowerClick=()=>{
        let txtvalues = text.toLowerCase();
        setText(txtvalues);
        props.showAlert("Text Conver To lower-case Successfully.","success");
    }
    const handleTCaseClick=()=>{
        let txtvalues = text.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
        setText(txtvalues);
        props.showAlert("Text converded to TitleCase Successfully.","info");
    }
    const handleCopyClick=()=>{
        let txtvalues = document.getElementById('txtBox');
        txtvalues.select();
        navigator.clipboard.writeText(txtvalues.value);
        props.showAlert("TextBox Text Copy Successfully.","dark");
    }
    const handleExtraSpeceClick=()=>{
        let newValues = text.split(/[ ]+/);
        setText(newValues.join(" "));
        props.showAlert("Extra Spaces has been removed!","warning");
    }
    const handleClearClick=()=>{
        let txtvalues = '';
        setText(txtvalues);
       props.showAlert("TextBox has been cleared!","danger");
    }
    return (
    <>
    <div className="container">
        <div className={`card my-1 border border-1 bg-${props.mode==='light'?'':'secondary'} text-${props.mode==='light'?'dark':'light'}`}>
        <div className="card-header">
        <strong>{props.heading}</strong>
        </div>
        <div className="card-body border border-1">
            <textarea className={`form-control bg-${props.mode==='light'?'':'secondary'} text-${props.mode==='light'?'':'light'}`} value={text} onChange={handleOnchange} id="txtBox" rows="8"></textarea>
        </div>
        <div className="card-footer text-muted">
        <button disabled={text.length===0} onClick={handleUpClick} className='btn btn-sm btn-primary mx-1 my-1'>Covert To UpperCase</button>
        <button disabled={text.length===0} onClick={handleLowerClick} className='btn btn-sm btn-success mx-1 my-1'>Covert To lowerCase</button>
        <button disabled={text.length===0} onClick={handleTCaseClick} className='btn btn-sm btn-info mx-1 my-1'>Covert To TitleCase</button>
        <button disabled={text.length===0} onClick={handleExtraSpeceClick} className='btn btn-sm btn-warning mx-1 my-1'>Remove Extra-Space</button>
        <button disabled={text.length===0} onClick={handleCopyClick} className='btn btn-sm btn-dark mx-1 my-1'>Copy Text</button>
        <button disabled={text.length===0} onClick={handleClearClick} className='btn btn-sm btn-danger mx-1 my-1'>Clear Text</button>
        </div>               
        </div>
        <div className={`card border border-1 bg-${props.mode==='light'?'':'secondary'} text-${props.mode==='light'?'dark':'light'}`}>
        <div className="card-header">
        <h5>Your Text Summary is:</h5>
        </div>
        <div className="card-body">
        <p className="card-title">Total Words: <strong>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</strong>, Total Characters: <strong>{text.length}</strong></p>
        <p className="card-title">Reading Time: <strong>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes</strong></p>
        <hr />
        <h3>Preview:</h3>   
        <pre className="card-text">{text.length>0?text:" No Preview please Enter somthing in the textbox above to preview it here."}</pre>
        </div>
        <div className="card-footer text-muted">
            Gohil DB
        </div>               
        </div>
    </div>
    </>
    )
}