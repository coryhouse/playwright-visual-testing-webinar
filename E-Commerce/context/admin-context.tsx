import { createContext } from 'react';

export const AdminContext = createContext({
    showIcon: false,
    toggleIcon: () => {},
});
