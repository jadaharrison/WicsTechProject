import React, {useState, useRef} from 'react';
import './journal.css'

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

    const[allEntries, setAllEntries] = useState([]);
    
    function handleSubmit(event) {
        event.preventDefault();

        const newEntry = {
            title: titleRef.current.value,
            date: Date().toLocaleString(),
            body: bodyRef.current.value
        }

        const updatedEntries = [newEntry, ...allEntries];
        setAllEntries(updatedEntries);

        event.target.reset();

        console.log(allEntries);       
    }

    function deleteEntry(index) {
        const updatedEntries = [...allEntries.slice(0, index), ...allEntries.slice(index +1 )];
        setAllEntries(updatedEntries);
        console.log(allEntries);
    }

    function handleDelete(event) {
        const index = event.target.index;
        deleteEntry(index);
    }
    
    let id = 0;

    return (
        <div>
            <h2>What&apos;s on your mind?</h2>           
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <input type="text" name="title" placeholder="Title" spellCheck="true" 
                        ref={titleRef}/>
                    <br></br>
                    <textarea type="text" name="body" placeholder="Entry" spellCheck="true" 
                        ref={bodyRef}/>
                </fieldset>
                <button className="submit" type="submit"> Save </button>
            </form>
            <h2>All Entries</h2>
            <div className="singleEntry">
                {allEntries.map((entry, index) => <div key={id++}> 
                    <h3>{entry.title}</h3>
                    <p>{entry.date}</p>
                    <p>{entry.body}</p> 
                    <p>{index}</p>
                    <button>Edit</button>
                    <button type="button" onClick={handleDelete}>Delete</button>
                </div>)}
            </div>
        </div>
    );
}

export default Journal;