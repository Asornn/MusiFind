'use client'
import React from "react"
import { useEffect } from "react";
import Form from "./form";
import Results from "./results";
import Image from "next/image"
import logo from "../public/songreclogo.svg";

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

    const gradientTextStyle = "text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 w-fit mx-auto";

    return ( 
        <div className="h-screen flex">
            <div className="max-w-md m-auto">
                <div className="bg-slate-800 p-10 rounded-md text-white">
                    <div className="text-center my-6">
                        <Image className="mx-auto mb-4" src={logo} width={80} height={80} alt={""} />
                        <h1 className={gradientTextStyle + " text-3xl font-light"}>MusiFind</h1>
                        <div className={gradientTextStyle}>Find AI-based song recommendations</div>
                    </div>
                    {displayedElement}
                </div>
            </div>
        </div>
            
        
    );
}

export default Songrec;