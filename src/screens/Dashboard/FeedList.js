import React from 'react';
import PropTypes from 'prop-types';

const FeedList = (props) => {

    return (
        <div>
            <h1>Feed List</h1>
            <ul>
                
            </ul>
        </div>
    )
}

FeedList.propTypes = {
    handleItemClick: PropTypes.func.isRequired
}

export default FeedList;