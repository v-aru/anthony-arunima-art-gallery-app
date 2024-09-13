import styled from 'styled-components';
import ArtPiecesPreview from '@/components/ArtPiecesPreview/ArtPiecesPreview';
import Title from '@/components/Title/Title';
import { useFavourites } from '../components/Favourites/FavouritesContext.js'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  overflow: auto;
  min-height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  width: 100%;
  gap: 1rem;
  justify-content: center;
`;

const Message = styled.p`
  font-size: 1.5rem;
  color: gray;
`;

const FavouritesPage = () => {
  const { favourites, toggleFavourite } = useFavourites();

  if (favourites.length === 0) {
    return (
        <>
        <Title content={"F A V O U R I T E S"} />  
        <Container>
            <Message>No favourites yet</Message>
        </Container>
        </>
    );
  }
  console.log(favourites);

  return (
    <>
        <Title content={"F A V O U R I T E S"} />
        <Container>        
          <Content>
            {favourites.map( piece => {
              const dimensions = { width: piece.width, height: piece.height };
                return (
                  <ArtPiecesPreview
                      key={piece.slug}
                      slug={piece.slug}
                      artist={piece.artist}
                      title={piece.title}
                      year={piece.year}
                      genre={piece.genre}
                      width={piece.width}
                      height={piece.height}
                      image={piece.imageSource}
                      artPieceInfo={favourites}
                      onToggleFavourite={() => toggleFavourite(piece.slug, piece.artist, piece.title, piece.imageSource, dimensions)}
                      isInFocus={false} 
                      isFavourite={true}
                  />
                );
            })}
          </Content>
        </Container>
    </>
  );
}

export default FavouritesPage;