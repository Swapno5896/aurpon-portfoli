import React from 'react';
// import './BlogSearch.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const BlogSearch = () => {
    return (
        <div className='container blogSearch-container'>
            {/* <div
                class="form-floating input-container w-60">
                <textarea class="form-control blogSearch-input" placeholder="Leave a comment here" id="floatingTextarea">
                    <button>sdflsdk</button>
                </textarea>
                <label for="floatingTextarea">  <FontAwesomeIcon icon={faMagnifyingGlass} /></label>

            </div> */}
            {/* <div className="serch-options">
                <button>All <span>10</span></button>
                <button>IELTS<span>3</span></button>
                <button>SAT<span>3</span></button>
                <button>University<span>2</span></button>
                <button>Visa<span>1</span></button>
                <button>Pasport<span>0</span></button>
            </div> */}
            <form>
                <div class="form-row">
                    <div class="col-7 text-center">
                        <input type="text" class="form-control" placeholder="City" />
                    </div>
                </div>
            </form>
            <div>
                <button className='py-2 px-3 rounded-4 m-3'>All <span>10</span></button>
                <button className='py-2 px-3 rounded-4 m-3'>IELTS<span>3</span></button>
                <button className='py-2 px-3 rounded-4 m-3'>SAT<span>3</span></button>
                <button className='py-2 px-3 rounded-4 m-3'>University<span>2</span></button>
                <button className='py-2 px-3 rounded-4 m-3'>Visa<span>1</span></button>
                <button className='py-2 px-3 rounded-4 m-3'>Pasport<span>0</span></button>
                {/* <button className='p-3 rounded-4 m-3'>All <span>10</span> </button>
                <button className='p-3 rounded-4 m-3'>All </button>
                <button className='p-3 rounded-4 m-3'>All </button>
                <button className='p-3 rounded-4 m-3'>All </button>
                <button className='p-3 rounded-4 m-3'>All </button> */}
            </div>
        </div>
    );
};

export default BlogSearch;