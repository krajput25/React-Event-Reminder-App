import React from "react";

const List = ({events}) => {
    return (
        <>
        {events.map((eventInfo) => {
            const {id, name, time, venue} = eventInfo;
            return (
                <div key={id} className="event">
                        <h2>Event: {name}</h2>
                        <h3>At: {time}</h3>
                        <h3>Venue: {venue}</h3>
                </div>
            );
        })}
        </>
    );
};

export default List;