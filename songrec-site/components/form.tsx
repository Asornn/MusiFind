interface FormProps {
    artist: string;
    setArtist: any;
    onSubmit: any;
    isLoading: boolean;
    characterLimit: number;
}

const Form: React.FC<FormProps> = (props) => {
    const isArtistValid = props.artist.length < props.characterLimit;
    const updateArtistValue = (text: string) => {
        if (text.length <= props.characterLimit){
            props.setArtist(text);
        }
    };
    
    let statusColor = "text-slate-500"
    let statusText = null
    if (!isArtistValid) {
        statusColor = "text-red-400"
        statusText = `Input must be less than ${props.characterLimit} characters.`
    }

    return (
        <>
            <div className="mb-6 text-slate text-slate-400">
                <p>
                    Tell me an artist you like and I will generate a song recommendation for you.
                </p>
            </div>
            
            <input
                className="p-2 w-full rounded-md focus:outline-teal-400 focus:outline text-slate-700" 
                type="text" placeholder="Ariana Grande" value={props.artist} onChange={(e) => updateArtistValue(e.currentTarget.value)}></input>
            <div className={statusColor + " flex justify-between my-2 mb-6 text-sm"}>
                <div>{statusText}</div>
                <div>
                    {props.artist.length}/{props.characterLimit}
                </div>
            </div>
            <button className={"bg-gradient-to-r from-teal-500 to-blue-500 disabled:opacity-50 w-full p-2 rounded-md text-lg mb-6"} 
            onClick={props.onSubmit} disabled={props.isLoading || !isArtistValid}>Submit</button>
        </>
    );
}

export default Form;