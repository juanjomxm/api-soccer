import React from "react";
import axios from "axios";

const apiSoccer = axios.create({
    baseURL: "https://free-football-soccer-videos.p.rapidapi.com/",
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'X-RapidAPI-Key': 'ff9ffd5791msh6da170c435b05cap15c41djsnb9ef3b60b095',
        'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
    }
})

function SoccerApi(){
    const [viewData, setViewData] = React.useState([]);

    React.useEffect(()=>{
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
        soccerView()
    }, [])

    return(
        <div className="container-data">
            {viewData.map((item, index) =>(
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
