import {createContext} from "react";
import {useForm} from "./hooks/useForm";

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const dataProvider = useForm();

    return (
        <GlobalContext.Provider value={dataProvider}>
            {children}
        </GlobalContext.Provider>
    )
}