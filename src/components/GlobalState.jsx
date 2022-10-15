import {createContext} from "react";
import {useForm} from "./hooks/useForm";

export const GlobalContext = createContext();

export const GlobalProvider = ({children, task}) => {
    const dataProvider = useForm(task);

    return (
        <GlobalContext.Provider value={dataProvider}>
            {children}
        </GlobalContext.Provider>
    )
}