import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Card } from "../component/card.js";
import { CardPlanetas } from "../component/cardp.js";
import { CardVehicles } from "../component/cardv.js";
import "../../styles/home.css";


export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getAllCharacters();
    }, []);

    useEffect(() => {
        actions.getAllPlanets();
    }, []); 

    useEffect(() => {
        actions.getAllVehicles();
    }, []); 

    return (
        <div>
            <div className="cards-section">
                <h2 style={{ color: "red" }}>Characters</h2>
                <div className="cards-container">
                    <div className="row flex-nowrap overflow-auto">
                        {store.characters.map((character) => (
                            <div className="col" key={character.uid}>
                                <Card
                                    name={character.name}
                                    gender={character.gender}
                                    id={character.uid}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <div className="cards-section">
                    <h2 style={{ color: "red" }}>Planets</h2>
                    <div className="cards-container">
                        <div className="row flex-nowrap overflow-auto">
                            {store.planets.map((planet) => (
                                <div className="col" key={planet.uid}>
                                    <CardPlanetas
                                        name={planet.name}
                                        population={planet.population}
                                        terrain={planet.terrain}
                                        id={planet.uid}
                                    />
                                </div>
                                
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="cards-section">
                <h2 style={{ color: "red" }}>Naves Espaciales</h2>
                <div className="cards-container">
                    <div className="row flex-nowrap overflow-auto">
                        {store.vehicles.map((vehicle) => (
                            <div className="col" key={vehicle.uid}>
                                <CardVehicles
                                name={vehicle.name}
                                    model={vehicle.model}
                                    
                                    id={vehicle.uid}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Home;
