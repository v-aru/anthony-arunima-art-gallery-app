import Title from "@/components/Title/Title";
import { useFavourites } from "../components/Favourites/FavouritesContext.js";
import FavouritesButton from '@/components/Favourites/FavouritesButton.jsx'; 
import { Container, Content, Message, ItemContainer, FixedImage, ArtInfo, ArtistGenreYear, FavoriteButtonContainer } from "@/components/Favourites/FavouritesStyles.js"; 

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
