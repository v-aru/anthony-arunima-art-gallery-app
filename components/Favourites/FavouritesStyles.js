import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem;
  overflow: auto;
  min-height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  width: 100%;
  gap: 1rem;
  justify-content: center;
`;

export const Message = styled.p`
  font-size: 1.5rem;
  color: gray;
`;
export const ItemContainer = styled.div`
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

export const FixedImage = styled.img`
  width: 200px; /* Set a fixed width */
  height: 280px; /* Set a fixed height */
  object-fit: cover; /* Maintain aspect ratio and cover the container */
`;

export const ArtInfo = styled.div`
  text-align: center;
  margin-top: 50px;
  padding: 1rem;
  font-size: 0.9rem;
  color: #555;
  background-color: #f9f9f9; 
  width: 100%; 
`;

export const ArtistGenreYear = styled.div`
  font-size: 0.8rem;
  color: #777;
`;

export const FavoriteButtonContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
`;