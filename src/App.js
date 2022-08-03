import { useEffect, useState } from "react";
import Filters from "./components/Filters/Filters";
import UserInfo from "./components/UserInfo/UserInfo";
import ReactPaginate from "react-paginate";
import UserListTile from "./components/UserListTile/UserListTile";

const PER_PAGE = 3;

function App() {
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [genderFilter, setGenderFilter] = useState("all");

  const [currentPage, setCurrentPage] = useState(0);

  const [tileView, setTileView] = useState(false);

  const filteredUsers = users.filter(
    (user) =>
      user.name.first.toLowerCase().includes(searchInput) ||
      user.name.last.toLowerCase().includes(searchInput) ||
      user.email.toLowerCase().includes(searchInput) ||
      user.login.username.toLowerCase().includes(searchInput)
  );

  const fetchGender =
    genderFilter === "male"
      ? "&gender=male"
      : genderFilter === "female"
      ? "&gender=female"
      : "";

  useEffect(() => {
    const fetchUser = async () => {
      const url = `https://randomuser.me/api/?results=50${fetchGender}`;

      console.log(url);

      const res = await fetch(url);
      const data = await res.json();

      setUsers(data.results);
    };

    fetchUser();
  }, [fetchGender]);

  // Pagination

  function handlePageClick({ selected: selectedPage }) {
    console.log("SelectPage", selectedPage);

    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;

  const currentPageDate = filteredUsers?.slice(offset, offset + PER_PAGE);

  const pageCount = Math.ceil(filteredUsers.length / PER_PAGE);

  return (
    <div className="px-10">
      <h1 className="text-2xl font-semibold py-5">User List</h1>

      <Filters
        setSearchInput={setSearchInput}
        setGenderFilter={setGenderFilter}
      />

      {!tileView ? (
        <UserInfo users={currentPageDate} />
      ) : (
        <UserListTile users={currentPageDate} />
      )}

      <ReactPaginate
        className="flex justify-end gap-10 my-10"
        breakLabel="..."
        nextLabel="»"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="«"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default App;
