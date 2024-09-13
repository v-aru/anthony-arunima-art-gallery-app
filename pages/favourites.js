import styled from 'styled-components';
import ArtPiecesPreview from '@/components/ArtPiecesPreview/ArtPiecesPreview';
import Title from '@/components/Title/Title';
import { useFavourites } from '../components/Favourites/FavouritesContext.js'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px; /* Adjust the width as needed */
  margin: 1rem; /* Adjust margin as needed */
  border: 1px solid #ddd; /* Optional: Add a border for better visual separation */
  border-radius: 8px; /* Optional: Add border-radius for rounded corners */
  overflow: hidden; /* Ensure children don't overflow the container */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: Add shadow for a card-like appearance */
`;

const ArtInfo = styled.div`
  text-align: center;
  padding: 1rem;
  font-size: 0.9rem;
  color: #555;
  background-color: #f9f9f9; /* Optional: Add background color for better contrast */
  width: 100%; /* Make sure this takes the full width of the container */
`;
const ArtistName = styled.div`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const GenreYear = styled.div`
  font-size: 0.8rem;
  color: #777;
`;

const FavouritesPage = () => {
  const { favourites, toggleFavourite } = useFavourites();

  if (favourites.length === 0) {
    return (
        <>
        <Title line1="B R U S H &nbsp; 'N' &nbsp; B Y T E " line2="F A V O U R I T E S" />
        <Container>
            <Message>No favourites yet</Message>
        </Container>
        </>
    );
  }
  console.log(favourites);

  return (
    <>
        <Title line1="B R U S H &nbsp; 'N' &nbsp; B Y T E " line2="F A V O U R I T E S" />
        <Container>        
          <Content>
            {favourites.map( piece => {
              const dimensions = { width: piece.width, height: piece.height };
              return(
                <ItemContainer key={piece.slug}>
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
                    <ArtInfo>
                      <GenreYear>{piece.genre} | {piece.year}</GenreYear>
                  </ArtInfo>
                </ItemContainer>

              );
              })}
          </Content>
        </Container>
    </>
  );
}

export default FavouritesPage;