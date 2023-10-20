interface ResultsProps {
    song: string;
    artist: string;
    onBack: any;
}


const Results: React.FC<ResultsProps> = (props) => {

    const resultSection = (label: string, body: any) => {
        return (
        <div className="bg-slate-700 p-4 my-3 rounded-md">
            <div className="text-slate-400 font-bold mb-4">                    
                {label}
            </div>
            <div>{body}</div>
        </div>
        )
    }

    return ( 
        <>  
            <div className="mb-6">
                {resultSection("Your Artist", <div className="text-xl font-bold">{props.artist}</div>)}
                {resultSection("Song Recommendation", props.song)}
            </div>
            <button className={"bg-gradient-to-r from-teal-500 to-blue-500 disabled:opacity-50 w-full p-2 rounded-md text-lg"} onClick={props.onBack}>Back</button>
        </> 
        
    );
}

export default Results;