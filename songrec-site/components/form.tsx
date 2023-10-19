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
    }

    return (
        <>
            <p>
                Tell me an artist you like so I can generate a song recommndation!
            </p>
            <input type="text" placeholder="Ariana Grande" value={props.artist} onChange={(e) => updateArtistValue(e.currentTarget.value)}></input>
            <div>
                {props.artist.length}/{props.characterLimit}
            </div>
            <button onClick={props.onSubmit} disabled={props.isLoading || !isArtistValid}>Submit</button>
        </>
    );
}

export default Form;