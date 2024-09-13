import styled from "styled-components";

const Button = styled.button`
    width: 20px;
    height: 20px;
    background-color: transparent;
    border: none;
    position: absolute;
    right: 10px;
    top: 10px;

    svg {
        display: block;
        height: 1.5rem;
        width: 1.5rem;
        color: ${({ isFavourite }) => (isFavourite ? 'red' : 'black')};
        object-fit: contain;
    }
`;

const SVGWrapper = styled.span`
    font-size: 2rem
    object-fit: contain;
`;

const FavouritesButton = ({ slug, artistName, artPieceInfo, onToggleFavourite}) => {

    const { isFavourite } = artPieceInfo?.find((piece) => piece.slug === slug) ?? { 
        isFavourite: false
    };

    return (
        <Button type="button" onClick={() => onToggleFavourite(slug, artistName)} isFavourite={isFavourite} >
            <SVGWrapper>
                <svg
                    stroke="currentColor"
                    fill={isFavourite ? "currentColor" : "transparent"}
                    viewBox="0 0 24 24"
                >
                    <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z" />
                </svg>
            </SVGWrapper>
        </Button>
    )
}

export default FavouritesButton;