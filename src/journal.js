import React, {useState, useRef} from 'react';
import './journal.css';
//import axios from 'axios';
import api from './api.js'

function Journal() {
    return (
        <div className = "Journal">
            <Header />
            <Form />
        </div>
    );
}

function Header() {
    return (
        <header>
            <h1>Journal</h1>
        </header>
    );
}

function Form() {
    const titleRef = useRef(null);
    const bodyRef = useRef(null);
    const updateTitleRef = useRef(null);
    const updateBodyRef = useRef(null);

    const[allEntries, setAllEntries] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();

        const newEntry = {
            title: titleRef.current.value,
            date: Date().toLocaleString(),
            body: bodyRef.current.value, 
            isEditing: 'false'
        }

        const updatedEntries = [newEntry, ...allEntries];
        setAllEntries(updatedEntries);

        event.target.reset();

        const payload = newEntry;

        api.insertJournal(payload).then(
            window.alert(`Journal inserted successfully`)
            // this.setState({
            //     name: '',
            //     rating: '',
            //     time: '',
            // })
        )
    }

    function deleteEntry(event) {
        allEntries.splice(event.target.value, 1);
        const updatedEntries = [...allEntries];
        setAllEntries(updatedEntries);
        console.log(allEntries);
    }

    function changeToEdit(index) {
        const updatedEntries = [...allEntries];
        const entryToUpdate = {...updatedEntries[index]};
        entryToUpdate.isEditing = 'true';
        updatedEntries[index] = entryToUpdate;
        setAllEntries(updatedEntries);
    }

    function handleUpdate(event, index) {
        event.preventDefault();

        const oldEntry = allEntries[index];

        const entry = {
            title: updateTitleRef.current.value,
            date: oldEntry.date,
            body: updateBodyRef.current.value,
            isEditing: 'false'
        }

        const updatedEntries = [...allEntries];
        updatedEntries[index] = entry;
        setAllEntries(updatedEntries);
    }

    let id = 0;

    return (
        <div>
            <h2>What&apos;s on your mind?</h2>           
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <input type="text" name="title" placeholder="Title" spellCheck="true" 
                        ref={titleRef} required/>
                    <br></br>
                    <textarea type="text" name="body" placeholder="Entry" spellCheck="true" 
                        ref={bodyRef} required/>
                </fieldset>
                <button className="submit" type="submit"> Save </button>
            </form>
            <h2>All Entries</h2>
            <div className="allEntries">
                {allEntries.map((entry) => <div key={id++}> 
                    <div className="singleEntry">
                        {(entry.isEditing === 'true') ? 
                            <div className="editing">
                                <form onSubmit={(event) => handleUpdate(event, allEntries.indexOf(entry))}>
                                    <fieldset>
                                        <input type="text" defaultValue={entry.title} ref={updateTitleRef} />
                                        <textarea type="text" defaultValue={entry.body} ref={updateBodyRef} />
                                    </fieldset>
                                    <button className="submit" type="submit"> Save </button>
                                </form>
                            </div>
                            : 
                            <div className="notEditing"> 
                                <h3>{entry.title}</h3>
                                <p>{entry.date}</p>
                                <p>{entry.body}</p> 
                                <button type="button" onClick={() => changeToEdit(allEntries.indexOf(entry))}>Edit</button>
                                <button type="button" onClick={deleteEntry} value={allEntries.indexOf(entry)}>Delete</button>   
                            </div>
                        }                                       
                    </div>
                </div>)}
            </div>
        </div>
    );
}

export default Journal;