import { useRouter } from "next/router";
import { Root, Link } from './NavigationStyles.js';


export default function Navigation() {
  const router = useRouter();
  const isActive = (pathname) => router.pathname === pathname;
  return (
    <Root>
      <Link href="/" isActive={isActive("/")}>
        Spotlight
      </Link>
      <Link href="/art-pieces" isActive={isActive("/art-pieces")}>
        Art Pieces
      </Link>
      <Link href="/favourites" isActive={isActive("/favourites")}>
        Favourites
      </Link>
    </Root>
  );
}
