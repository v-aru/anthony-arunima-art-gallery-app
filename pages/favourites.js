import styled from 'styled-components';
import ArtPiecesPreview from '@/components/ArtPiecesPreview/ArtPiecesPreview';
import Title from '@/components/Title/Title';
import { useFavourites } from '../components/Favourites/FavouritesContext.js'


const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const Message = styled.p`
  font-size: 1.5rem;
  color: gray;
`;

export default function FavouritesPage({ artPieceInfo = [], onToggleFavourite }) {
    const { favourites, toggleFavourite } = useFavourites();

    const favouritePieces = artPieceInfo?.filter(piece => piece.isFavourite);
  

  if (favouritePieces.length === 0) {
    return (
        <>
        <Title content={"F A V O U R I T E S"} />
        <Root>        
            <Message>No favourites yet</Message>
        </Root>
        </>
    );
  }

  return (
    <>
        <Title content={"F A V O U R I T E S"} />
        <Root>
            {favouritePieces.map( piece => {
                return (

                <ArtPiecesPreview
                    slug={piece.slug}
                    artist={piece.artist}
                    title={piece.title}
                    year={piece.year}
                    genre={piece.genre}
                    width={piece.width}
                    height={piece.height}
                    image={piece.imageSource}
                    artPieceInfo={favourites}
                    onToggleFavourite={(slug) => toggleFavourite(slug, piece.artist)}
                    isInFocus={false} 
                />

                );
            })}
        </Root>
    </>
  );
}
