import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <form action="" className="search">
        <input className="search-input" type="text" />

        <button className="search-button">
          <img
            src="https://www.svgrepo.com/show/532555/search.svg"
            alt="search"
          />
        </button>
      </form>
    </div>
  );
}
