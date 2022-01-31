import React from 'react';

import './item-status-filter.css';


const ItemStatusFilter = ({onToggleFilter}) => {
    return (
        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
            <button onClick={() => onToggleFilter('all')}
                    type="button"
                    className="btn btn-outline-primary">All
            </button>

            <button onClick={() => onToggleFilter('active')}
                    type="button"
                    className="btn btn-outline-primary">Active
            </button>

            <button onClick={() => onToggleFilter('done')}
                    type="button"
                    className="btn btn-outline-primary">Done
            </button>

            <button onClick={() => onToggleFilter("important")} type="button"
                    className="btn btn-outline-primary">Important
            </button>
        </div>
    );
};

export default ItemStatusFilter;
