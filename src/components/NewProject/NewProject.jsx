import Input from "../Input/Input";
import { useRef } from "react";
import Modal from "../Modal";

export default function NewProject({onAdd, onCancel}){
    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        // validation part comes here.
        if(enteredTitle.trim() === '' || 
        enteredDescription.trim() === '' || 
        enteredDueDate.trim() === '') {
            // show the Error Modal
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }

    return(
        <>
            <Modal ref={modal} buttonCaption="Okay">
                <h2>Invalid Input</h2>
                <p>Oops... looks like you forgot to enter a value</p>
                <p>please make sure you enter a valid value for every field</p>
            </Modal>
            <menu>
                <li>
                    <button onClick={onCancel}>Cancel</button>
                    <button onClick={handleSave}>Save</button>
                </li>
                <div>
                    <Input ref={title} label="Title" type="text"/>
                    <Input ref={description} label="Description" type="text" textarea />
                    <Input ref={dueDate} label="Due Date" type="date" />
                </div>
            </menu>
        </>

        
    );
}