import React,{useState} from 'react'

export default function TextForm(props) {   
    const [text,setText] = useState("Enter the Values");
    // text = "New values change";//Wronng way to Change values
    // setText("New values change");//right way to Change values
    const handleOnchange=(event)=>{
        console.log('handleOnchange fire!');
        setText(event.target.value);
    }
    const handleUpClick=()=>{
        let txtvalues = text.toUpperCase();
        setText(txtvalues);
    }
    return (
        <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnchange} id="txtBox" rows="8"></textarea>
            <button onClick={handleUpClick} className='btn btn-primary my-2' >Covert To UpperCase</button>
        </div>
        </div>
    )
}
