import { useGlobalContext } from "./AppContext";

const SearchForm = () => {
    const {searchTerm, setSearchTerm} = useGlobalContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        const searchValue = e.target.elements.search.value;

        if (!searchValue) {return;}

        setSearchTerm(searchValue);
    };
  console.log(searchTerm);

    return (
        <section>
            <h1 className="title">Unsplash galéria</h1>
            <form className="search-form" onSubmit={handleSubmit}>
                <input type="text" name="search" className="form-input search-input" placeholder="cat" />
                <button type="submit" className="btn">Keresés</button>
            </form>
        </section>
    )
}
export default SearchForm;