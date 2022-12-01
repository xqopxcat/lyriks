import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { useGetArtistDetailsQuery } from '../redux/services/shazamCore';

const ArtistDetails = () => {
    const dispatch = useDispatch();
    const { id: artistId } = useParams();
    
    const { activeSong, isPlaying } = useSelector(state => state.player);
    
    const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(artistId);
    if(isFetchingArtistDetails) return <Loader title="Search artist details"/>;
    if(error) return <Error />;
    return (
        <div className="flex flex-col">
            <DetailsHeader artistId={ artistId } artistData={ artistData } />
            
            <RelatedSongs
                data={ Object.values(artistData?.songs) }
                isPlaying={ isPlaying }
                activeSong={ activeSong }
                artistId={ artistId }
            />
        </div>
    )
};

export default ArtistDetails;
