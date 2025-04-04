import { useNavigate } from "react-router-dom";
import "../../styles/SearchBar.css";

export default function SearchBar() {
  const navigate = useNavigate();
  const HandleSearch = (e) => {
    e.preventDefault();
    navigate(`/authed/rentals/${e.target[0].value}`);
  };
  return (
    <div className="search-bar">
      <form onSubmit={HandleSearch}>
        <div className="input-container">
          <i className="filter-icon"></i>
          <input type="text" placeholder="Search for your needs" />
          <i className="icon-center"></i>
          <i className="icon-right"></i>
        </div>
      </form>
    </div>
  );
}
