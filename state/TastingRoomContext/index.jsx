import React, { useState } from 'react';

export const TastingRoom = React.createContext();

const TastingRoomProvider = ({children }) => {
    const [ tastingRoom, setTastingRoom ] = useState(null);
    return (
        <TastingRoom.Provider
            value={{
                tastingRoom: tastingRoom,
                setTastingRoom: tastingRoom => setTastingRoom(tastingRoom)
            }}
        >
            {children}
        </TastingRoom.Provider>
    );
}

export default TastingRoomProvider;