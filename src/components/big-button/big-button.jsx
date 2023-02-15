import { useState } from "react";

const BigButton = () => {

    // Utilisation du state
    const [nb, setNb] = useState(1);
    console.log('Number val:', nb);

    const handleClickBtn = () => {
        console.log('Number avant:', nb);

        // Modification de la valeur du state => Dispo dans le prochain rendu
        setNb(nb => nb * 2);

        console.log('Number apres:', nb);
    }

    return (
        <button onClick={handleClickBtn}>{nb}</button>
    )
}

export default BigButton;