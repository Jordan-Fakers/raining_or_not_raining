import React from 'react';
import { FC, useState } from 'react';

interface LocationSearchProps {
    onSearch: (search: string) => void;
}

export const LocationSearch: FC<LocationSearchProps> = ({onSearch}) => {
    const [locationSearch, setLocationSearch] = useState('');
    const disableSearch = locationSearch.trim() === '';
    const addLocation = () => {
        onSearch(locationSearch);
        setLocationSearch('');
    };

    return (
        <div className="search-bar">
            <label >
            <input type="text" placeholder="Add your location" value={locationSearch} onChange={e => setLocationSearch(e.target.value)}/>
            </label>
            <button className="search-btn" onClick={addLocation} disabled={disableSearch}>Raining Or Not ?</button>
        </div>
    );
}