'use client'
import React from "react"
import { useEffect } from "react";
import Form from "./form";
import Results from "./results";

const Songrec: React.FC = () => {
    const CHARACTER_LIMIT = 32;
    const ENDPOINT: string = "https://2ae01178l4.execute-api.us-east-2.amazonaws.com/prod/generate_song"
    const [artist, setArtist] = React.useState("");
    const [song, setSong] = React.useState("");
    const [hasResult, setHasResult] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    

    const onSubmit = () => {
        console.log("Submiting: " + artist);
        setIsLoading(true);
        fetch(`${ENDPOINT}?artist=${artist}`).then((res) => res.json()).then(onResult);
    };

    const onResult = (data: any) => {
        setSong(data.song);
        setHasResult(true);
        setIsLoading(false);

    };

    const onReset = () => {
        setArtist("");
        setHasResult(false);
        setIsLoading(false);
    };

    let displayedElement = null;

    if (hasResult){
        displayedElement = <Results song={song} onBack={onReset} artist={artist} />
    }
    else{
        displayedElement = <Form artist={artist} setArtist={setArtist} onSubmit={onSubmit} isLoading={isLoading} characterLimit={CHARACTER_LIMIT} />
    }

    return ( 
        <>
            <h1>Songrec!</h1>
            {displayedElement}
        </>
    );
}

export default Songrec;