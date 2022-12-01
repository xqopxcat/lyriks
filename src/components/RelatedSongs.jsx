import SongBar from './SongBar';

const RelatedSongs = ({ data, isPlaying, activeSong, handlePauseClick, handlePlayClick, artistId }) => {
    return (
        <div className="flex flex-col">
            <h2 className="font-bold text-3xl text-white">
                Related Songs:
            </h2>
            <div className="mt-6 w-full flex flex-col">
                { data?.map((song, i) => (
                    <SongBar 
                        key={`${artistId === "" ? song.key : song.id }-${artistId}`}
                        song={song}
                        i={i}
                        artistId={artistId}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        handlePauseClick={handlePauseClick}
                        handlePlayClick={handlePlayClick}
                    />
                ))}
            </div>
        </div>
    )
}

export default RelatedSongs;
