import React from "react";
import { LoadingComponent } from "@gooddata/sdk-ui";
import { ShipsContext } from "../../hooks/shipsList";
import { focusShipContext } from "../../hooks/focusShip";

export const AllShipsSection = () => {
    const {ships, status} = React.useContext(ShipsContext);
    const focusShip = React.useContext(focusShipContext);

    if (status === "loading") 
        return <LoadingComponent/>;

    if (status === "error")
        return <p>Something went wrong</p>;

    return <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Length, m</th>
                <th>Firepower</th>
                <th>Speed, mglt</th>
                <th>Crew & passengers</th>
                <th>Cost, credits</th>
            </tr>
        </thead>
        <tbody>
            {ships.map(ship => (
                <tr key={ship.name} className={focusShip === ship.name ? "focused" : undefined}>
                    <td>{ship.name}</td>
                    <td>{ship.length}</td>
                    <td>{ship.firepower}</td>
                    <td>{ship.speed}</td>
                    <td>{ship.crew}</td>
                    <td>{ship.cost}</td>
                </tr>
            ))}
        </tbody>
    </table>;
};
