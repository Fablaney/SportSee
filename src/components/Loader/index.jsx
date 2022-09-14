import React from 'react';
import "./style.scss";

/**
 * @component
 * @description Component Loader who appears when the datas are not fetched yet
 */
function Loader()
{
	return (
        <div className="loader-box">
            <div className="loader"></div>
        </div>
	)
}

export default Loader;