import Navbar from "../Navbar";
import HeaderStyle from "./style";

function Header() {
  return (
    <>
      <HeaderStyle>
        <div className="header-background">
          <div className="header-icon">
            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.49997 19.5C10.3 16.7 11 16 11 16M7.49997 19.5L19 30M7.49997 19.5C7.49997 19.5 6.49998 18.5 5.49997 17.5C4.49995 16.5 5.49997 15 5.99997 14.5C6.49997 14 7.49997 13.5 8.49997 14C9.49997 14.4999 11 16 11 16M11 16L22 26.5M22 26.5L27 34.5L19 30M22 26.5L19 30" stroke="white" stroke-width="1.2"/>
              <path d="M27.5 18.5C28.3879 19.8318 28.9062 20.6093 29.1918 21.0376C29.3566 21.2849 29.6991 21.3341 29.9275 21.1438L35.5 16.5" stroke="white"/>
              <path d="M34.5 15H25.5C25.2239 15 25 15.2239 25 15.5V23.5C25 23.7761 25.2239 24 25.5 24H34C34.2761 24 34.5 23.7761 34.5 23.5V20.5" stroke="white"/>
              <path d="M5.5 41.5H31.5" stroke="white"/>
              <circle cx="44" cy="37" r="5" stroke="white"/>
              <path d="M53 53H35.5C35.5 53 34.5 44.5 40 44.5H48.5C54 44.5 53 53 53 53Z" stroke="white" stroke-width="1.2"/>
              <path d="M17.5 35.5H5.5" stroke="white" stroke-width="1.2"/>
              <path d="M5.5 47H31.5" stroke="white"/>
              <path d="M31.5 53C31.5 53 4.5 53 3 53C1.5 53 1 51.5 1 50.5C1 49.5 1 11.5 1 10C1 8.5 2 8.5 3.5 8.5C5 8.5 10 8.5 10 8.5M10 8.5V7C10 6.44772 10.4477 6 11 6H14M10 8.5V11C10 11.5523 10.4477 12 11 12H28.5C29.0523 12 29.5 11.5523 29.5 11V8.50001M39 30.5C39 30.5 39 10.5 39 10C39 9.5 38.5 8.5 37 8.5C36.507 8.5 33.421 8.50001 29.5 8.50001M29.5 8.50001V7C29.5 6.44772 29.0523 6 28.5 6H26M14 6H19.75H26M14 6C14 6 14 3.50002 14 2.5C14 1.49999 14.5 0.999999 16.5 1C18.5 1.00001 23 1.00001 23.5 1C24 1 26 1 26 2.5C26 4 26 6 26 6" stroke="white"/>
            </svg>
          </div>
          <div className="header-title">
            <h1>MyLab</h1>
          </div>
        </div>
        <Navbar />
      </HeaderStyle>
    </>
  )
};

export default Header;