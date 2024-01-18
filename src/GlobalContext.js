import React from "react";

const GlobalContext = React.createContext()

function ContainerContext({children}){
    const [viewData, setViewData] = React.useState([])
    const [inputSearchResult, setInputSearchResult] = React.useState('')
    const [loading, setLoading] = React.useState(true)

    const searchResult = viewData.filter(item =>{
        return item.title.toLocaleLowerCase().includes(inputSearchResult.toLocaleLowerCase())
    })

    return(
        <GlobalContext.Provider value={{
            viewData,
            setViewData,
            inputSearchResult, 
            setInputSearchResult,
            loading, 
            setLoading,
            searchResult
            // Espacio para agregar las funciones, estados, estados derivados... etc
        }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalContext }
export { ContainerContext }