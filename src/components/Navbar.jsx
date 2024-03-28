import React, { useEffect, useState } from "react";

function Navbar() {
  const [isChecked, setIsChecked] = useState(() => {
    return localStorage.getItem("theme") === "true";
  });
  const svg = document.querySelectorAll("*");

  useEffect(() => {
    if (isChecked) {
      document.body.classList.add("dark");
      svg.forEach((item) => {
        item.classList.add("white");
      });
    } else {
      document.body.classList.remove("dark");
      svg.forEach((item) => {
        item.classList.remove("white");
      });
    }
    localStorage.setItem("theme", isChecked);
  }, [isChecked]);

  function toggleTheme() {
    setIsChecked(!isChecked);
  }
  return (
    <div>
      <nav>
        <ul className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="hamburger"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <div className="youtube">
            <svg
              id="Layer_1"
              style={{ enableBackground: "new 0 0 512 512" }}
              version="1.1"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <style type="text/css">
                {`
          .st0{fill:#25D366;}
          .st1{fill:#FFFFFF;}
          .st2{fill:#FF0000;}
          .st3{fill:#3D5A98;}
          .st4{fill:url(#SVGID_1_);}
          .st5{fill:url(#SVGID_2_);}
          .st6{fill:#55ADEE;}
          .st7{fill:#1E96C8;}
          .st8{fill:#A9C9DD;}
          .st9{fill:#C8DAEA;}
          .st10{fill:none;}
          .st11{fill:#4787F3;}
          .st12{fill:#DC483C;}
          .st13{fill:#FFCE43;}
          .st14{fill:#149F5C;}
          .st15{fill:#CE1E5B;}
          .st16{fill:#72C5CD;}
          .st17{fill:#DFA22F;}
          .st18{fill:#3CB187;}
          .st19{fill:#248C73;}
          .st20{fill:#392538;}
          .st21{fill:#BB242A;}
          .st22{fill:none;stroke:#3CB187;strokeMiterlimit:10;}
          .st23{fill:#009A57;}
          .st24{fill:#FCCD37;}
          .st25{fill:#2771F0;}
        `}
              </style>
              <g>
                <path
                  className="st2"
                  d="M423.6,81.5c-54.9-2-111.7-3.1-170.1-3c-56.7,0-111.8,1.1-165.2,3C42.4,83.2,6,120.9,6,166.9v178.2   c0,46,36.4,83.7,82.4,85.4c54.7,2,111.1,3.1,169.2,3c57,0,112.4-1.1,166.1-3c46-1.7,82.3-39.4,82.3-85.4V166.9   C506,120.9,469.6,83.2,423.6,81.5z"
                />
                <polygon
                  className="st1"
                  points="205.7,181 205.7,332.2 335.8,256.6  "
                />
              </g>
            </svg>
            <h1>YouTube</h1>
          </div>
        </ul>
        <ul className="search">
          <input type="search" placeholder="Search" />
          <button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mice"
          >
            <path d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" />
            <path d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z" />
          </svg>
        </ul>
        <ul className="profile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z" />
            <path
              fillRule="evenodd"
              d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z"
              clipRule="evenodd"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z"
              clipRule="evenodd"
            />
          </svg>

          <label className="ui-switch">
            <input checked={isChecked} onChange={toggleTheme} type="checkbox" />
            <div className="slider">
              <div className="circle"></div>
            </div>
          </label>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
