const SearchSvg = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}  // Ajusta el tamaño según tus necesidades
      height={20} // Ajusta el tamaño según tus necesidades
      viewBox="0 0 24 24" // Asegúrate de que el viewBox cubra todo el contenido del SVG
      fill="none"
      color="var(--icon-color)"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.5 17.5 22 22"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 11a9 9 0 1 0-18 0 9 9 0 0 0 18 0Z"
      />
    </svg>
  );
  
  export default SearchSvg;