import { useEffect, useState } from "react";
import { Joke } from "../models/Joke";
import chuckNorris from '../assets/Chuck_Norris.jpg'

function ChuckNorris() {
    const [joke, setJoke] = useState<Joke | null>(null);

    /* Antra u�duotis palyginus daug lengvesn�. Tiesiog paimti pok�t� i� API u�krovimo metu ir kas 15 sekund�i�. */
    const GetJoke = () => {
        fetch('https://api.chucknorris.io/jokes/random?category=dev')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setJoke(data);
            })
    }

    useEffect(() => {
        GetJoke();
        const interval = setInterval(() => {
            GetJoke();
        }, 15000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            <div>
                <img src={chuckNorris} className="logo big react" alt="Chuck Norris, May 2015" />
            </div>
            <h1>{joke?.value}</h1>
        </div>
  );
}

export default ChuckNorris;