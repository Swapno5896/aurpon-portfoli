import React from 'react';
import './BlogSearch.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const BlogSearch = () => {
    return (
        <div className='container blogSearch-container'>
            <div
                class="form-floating input-container">
                <textarea class="form-control blogSearch-input" placeholder="Leave a comment here" id="floatingTextarea">
                    {/* <button>sdflsdk</button> */}
                </textarea>
                <label for="floatingTextarea">  <FontAwesomeIcon icon={faMagnifyingGlass} /></label>

            </div>
            <div className="serch-options">
                <button>All <span>10</span></button>
                <button>IELTS<span>3</span></button>
                <button>SAT<span>3</span></button>
                <button>University<span>2</span></button>
                <button>Visa<span>1</span></button>
                <button>Pasport<span>0</span></button>
            </div>
        </div>
    );
};

export default BlogSearch;