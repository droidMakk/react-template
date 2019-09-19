import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'components';
import { withLayout } from 'routes/Layout';

const FeedForm = (props) => {

    const { itemId = null } = props;
    const [disablesubmit, setSubmit] = React.useState(false);

    return (
        <div>
            <div>
                <h1>Feed Form</h1>
                <h4>{itemId}</h4>
            </div>
            <hr />
            <div>
                <Input />
            </div>
            <div>
                <button disabled={disablesubmit} onClick={() => setSubmit(true)} >submit</button>
            </div>
        </div>
    )
}

FeedForm.propTypes = {
    itemId: PropTypes.string.isRequired
}

export default FeedForm;