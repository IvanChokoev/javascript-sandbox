import { createContext, useContext } from 'react';

interface AppState {
    // Define your app state properties here
}

interface TranslationData {
    // Define your translation data properties here
}

interface AppContextType {
    state: AppState;
    translations: TranslationData;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ value: AppContextType }> = ({ value, children }) => {
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};