import React, { useState } from 'react'

function SearchBar () {
    const [query, setQuery] = useState('');

    const handleSearch = (event) => {
        setQuery(event.target.value);
    };
    return (
        <div class="input-group">
            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" value={query} onChange={handleSearch} />
            <button type="button" class="btn btn-outline-primary" data-mdb-ripple-init>search</button>
      </div>

    );
}
export default SearchBar