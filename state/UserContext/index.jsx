import React, { useState } from 'react';

export const UserContext = React.createContext();

const UserProvider = ({children }) => {
    const [ user, setUser ] = useState(null);
    return (
        <UserContext.Provider
            value={{
                user: user,
                setUser: user => setUser(user)
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;