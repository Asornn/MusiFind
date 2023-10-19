interface ResultsProps {
    song: string;
    artist: string;
    onBack: any;
}


const Results: React.FC<ResultsProps> = (props) => {
    return ( 
        <>
            <div>
                <div>
                    <b>Artist</b>
                </div>
                <div>{props.artist}</div>
            </div>
            <div>
                <div>
                    <b>Song</b>
                </div>
                <div>{props.song}</div>
            </div>
            <button onClick={props.onBack}>Back</button>
        </> 
        
    );
}

export default Results;