import React, {useState} from 'react';
import data from './data.js';
import List from './list.js';

function App() {
    const[event, setEvent] = useState(data);
    return (
             <div className = "container">
                <h1 className="heading">Have a look at your {event.length} events for today!</h1>
                <List events = {event} />
                <button onClick={() => setEvent([])}>Clear your events for today</button>
           </div>
    );
};

export default App;