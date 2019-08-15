import React from 'react';

export function Input(props){
    return(
        <div className= "form group">
            <input className="form-control" {...props} />
        </div>
    );
}

export function TextArea(props){
    return(
        <div className= "form group">
            <input className="form-control" rows="30" {...props} />
        </div>
    );
}

export function FormBtn(props){
    return(
        <button {...props} style={{ floats: "right", marginBottom: 10 }} className="btn btn-success">
            {props.children}
        </button>
    );
}