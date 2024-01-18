import React from "react";
import axios from "axios";
import { GlobalContext } from "./GlobalContext";

const apiSoccer = axios.create({
    baseURL: "https://free-football-soccer-videos.p.rapidapi.com/",
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'X-RapidAPI-Key': 'ff9ffd5791msh6da170c435b05cap15c41djsnb9ef3b60b095',
        'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
    }
})

function SoccerApi(){
    const {
        setViewData,
        searchResult,
        setLoading
    } = React.useContext(GlobalContext)

    React.useEffect(()=>{ // De esta forma toda la informacion se renderiza en la pagina sin tener que agregar un boton para que lo haga
        setTimeout(()=>{
            const soccerView = async () => {
                try {
                    const { data, status } = await apiSoccer.get();
        
                    if (status === 200 || status === 201) {
                        setViewData(data);
                    }
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
            setLoading(false)
            soccerView()
        }, 2000)
    }, [])

    return(
        <div className="container-data">
            {searchResult.map((item, index) =>( // Lo estoy haciendo bien, solo necesitaba cambiar el estado de viewData por el estado derivado pra buscar y filtrar los resultados
                <div 
                key={index}
                className="container-return"
                >
                    <h2 className="container-name">{item.competition.name}</h2>
                    <h3>{item.title}</h3>
                    <div>
                        <img
                        src={item.thumbnail}
                        width={300}
                        height={300}
                        ></img>
                        {/* <video className="video-soccer">
                            <source src={item.videos.embed}/>
                        </video> */}
                    </div>
                    <a href={item.url}>Resumen</a>
                </div>
            ))} 
        </div>
    )
}

export { SoccerApi }
