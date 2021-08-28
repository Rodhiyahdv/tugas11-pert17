import React, {useState,useEffect} from "react";

const ReactAsync = () => {
    const [pikachu, setPikachu] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://swapi.dev/api/films/?format=json");
            const data = await response.json();
            console.log (data.results);
            setPikachu(data.results);
        };
        fetchData();
    }, [])

    return (
        <div>
            <h3>React Async Star Wars Films</h3>
            <table className="TabelData">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Director</th>
                    <th>Producer</th>
                    <th>Release Date</th>
                    <th>Episode</th>
                </tr>
                </thead>
                <tbody>
            
            {pikachu.map((item,index) => (
                <tr key={index}>
                    <td>{item.title}</td>
                    <td>{item.director}</td>
                    <td>{item.producer}</td>
                    <td style={{textAlign:'center'}}>{item.release_date}</td>
                    <td style={{textAlign:'center'}}>{item.episode_id}</td>
                </tr>
                
            ))}
            </tbody>
            </table>
        </div>
    )
    

    
}

export default ReactAsync;