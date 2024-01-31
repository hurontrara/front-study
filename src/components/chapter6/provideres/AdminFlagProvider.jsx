import { createContext, useState } from "react";

export const AdminFlagContext = createContext({});

export const AdminFlagProvider = props => {
    const { children } = props;

    const [isAdmin, SetIsAdmin] = useState(false);

    return (
        <AdminFlagContext.Provider value={{ isAdmin, SetIsAdmin }}>
            {children}
        </AdminFlagContext.Provider>
    );

};