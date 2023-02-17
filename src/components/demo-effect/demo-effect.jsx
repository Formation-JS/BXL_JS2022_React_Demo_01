const { useState, useEffect } = require("react");

const DemoEffect = () => {

    const [count, setCount] = useState(0);
    const [day, setDay] = useState(true);

    useEffect(() => {
        document.title = `Compteur : ${count}`
        console.log(`La valeur est de ${count} !`);

        return () => {
            console.log(`Compteur clean => ${count} !`);
        }
    }, [count]);

    useEffect(() => {
        console.log(`Nous sommes en mode : ${day ? 'jour' : 'nuit'} !`);
    }, [day]);

    return (
        <>
            {console.log('Render !!!')}
            <div>
                <button onClick={() => setCount(c => c + 1)}>
                    +++
                </button>
                <span> {count} </span>
                <button onClick={() => setCount(c => c - 1)}>
                    ---
                </button>
            </div>
            <div>
                <button onClick={() => setDay(d => !d)}>
                    {day ? 'Jour ☀' : 'Nuit 🌙'}
                </button>
            </div>
        </>
    );
};

export default DemoEffect;