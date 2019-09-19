import React from 'react';
import FeedForm from "./FeedForm";
import FeedList from "./FeedList";
import { withLayout } from 'routes/Layout';

const Dashboard = () => {

    const [ activeId, setActiveId ] = React.useState(null);

    return(
        <div>
            <FeedList handleItemClick={setActiveId} />
            <FeedForm itemId={activeId} />
        </div>
    )
}

export default withLayout(Dashboard, "Title");