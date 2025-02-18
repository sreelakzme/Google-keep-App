import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
const CreateNode=(props)=>{

    const [expand,setExpand] = useState(false);

    const[note,setNote]= useState({
        title:"",
        content:"",
    });

    const InputEvent=(event)=>{
        // const value = event.target.value;
        // const name = event.target.name;

        const{name,value}=event.target;

        setNote((prevData)=>{
            return{
                ...prevData,
                [name]: value,
                

            };
        });
    };
    const addEvent = ()=>{
        props.passNote(note);
        setNote({
            title:"",
            content:"",
        });

    }

const expandIt=()=>{
    setExpand(true);
}
const bktoNormal=()=>{
    setExpand(false);
}

    return(
        <>
            <div className="main_node" onDoubleClick={bktoNormal}>
            <form>
            {expand? 
                <input type='text' name= "title" value={note.title} onChange={InputEvent} placeholder='Title' />:null}
                <textarea rows='' column='' name= "content" value={note.content} onChange={InputEvent} placeholder='WriteNode' onClick={expandIt} />
                {expand?
                <Button onClick={addEvent}>
                <AddIcon className="plus_sign"/>
                </Button>:null}
            </form>

            </div>
        </>
    );
};

export default CreateNode;