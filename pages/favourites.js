
import styled from "styled-components";
import ArtPiecesPreview from "@/components/ArtPiecesPreview/ArtPiecesPreview";
import Title from "@/components/Title/Title";
import { useFavourites } from "../components/Favourites/FavouritesContext.js";
import FavouritesButton from '@/components/Favourites/FavouritesButton.jsx'; 

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
  width: 300px; 
  height: 400px;
  margin: 1rem; 
  border: 1px solid #ddd; 
  border-radius: 8px; 
  overflow: hidden; /* Ensure children don't overflow the container */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: Add shadow for a card-like appearance */
  position: sticky;
`;

const FixedImage = styled.img`
  width: 200px; /* Set a fixed width */
  height: 280px; /* Set a fixed height */
  object-fit: cover; /* Maintain aspect ratio and cover the container */
`;

const ArtInfo = styled.div`
  text-align: center;
  margin-top: 50px;
  padding: 1rem;
  font-size: 0.9rem;
  color: #555;
  background-color: #f9f9f9; 
  width: 100%; 
`;

const ArtistGenreYear = styled.div`
  font-size: 0.8rem;
  color: #777;
`;

const FavoriteButtonContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
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

  return (
    <>
        <Title line1="B R U S H &nbsp; 'N' &nbsp; B Y T E " line2="F A V O U R I T E S" />
        <Container>        
          <Content>
            {favourites.map( piece => {
              const dimensions = { width: piece.width, height: piece.height };
              const isFavourite = favourites.some(fav => fav.slug === piece.slug);
              return(
                <ItemContainer key={piece.slug}>
                  <FavoriteButtonContainer> 
                    <FavouritesButton 
                      isFavourite={isFavourite} 
                      onToggleFavourite={() => toggleFavourite( piece.slug, piece.artist, piece.title, piece.imageSource, dimensions)}
                    />
                    </FavoriteButtonContainer>
                  <FixedImage src={piece.imageSource} alt={piece.src}/>
                    <ArtInfo>
                      <ArtistGenreYear>{piece.artist} | {piece.genre} | {piece.year}</ArtistGenreYear>
                  </ArtInfo>
                </ItemContainer>
              );
              })}
          </Content>
        </Container>
    </>
  );
};

export default FavouritesPage;
