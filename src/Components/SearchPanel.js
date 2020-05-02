import React from 'react';
import { Input} from 'antd';

const Search = Input.Search;

const searchbar = () => {

    return (
        <div>
                <Search
                    placeholder="Search by keywords(PHP,.NET,graphic design,etc.)"
                    enterButton="Search"
                    size="large"
                />
            </div>
    );
};

export default searchbar;