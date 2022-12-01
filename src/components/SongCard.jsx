import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, isPlaying, activeSong, i, data }) => {
    const { images, title, subtitle, key, artists } = song;
    const dispatch = useDispatch();
    const handlePauseClick = () => {
        dispatch(playPause(false));
    };
    
    const handlePlayClick = () => {
        dispatch(setActiveSong({ song, data, i }));
        dispatch(playPause(true));
    };
    
    return (
        <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 
        backdrop-blur-sm animate-slideup ronded-lg cursor-pointer">
            <div className="relative w-full h-56 group">
                <div className={`absolute inset-0 justify-center items-center 
                    bg-black bg-opacity-50  group-hover:flex ${activeSong?.title === song.title ? 
                        "flex bg-black bg-opacity-70" : "hidden"}`}
                >
                    <PlayPause
                        isPlaying={ isPlaying }
                        activeSong={ activeSong }
                        song={ song }
                        handlePause={ handlePauseClick }
                        handlePlay={ handlePlayClick }
                    />
                </div>
                <img alt="song_img" src={ images?.coverart } />
            </div>
            <div className="mt-4 flex flex-col">
                <p className="text-lg truncate text-white font-semibold">
                    <Link to={`/songs/${ key }`}>
                        { title }
                    </Link>
                </p>
                <p className="text-sm truncate text-gray-300 mt-1">
                    <Link to={artists ? `/artists/${ artists[0]?.adamid }` : '/top-artists'}>
                        { subtitle }
                    </Link>
                </p>
            </div>
        </div>
)};

export default SongCard;
