import React from 'react';
import './BlogSearch.css'
const BlogSearch = () => {
    return (
        <div className='container blogSearch-container'>
            {/* <input className='blogSearch-input form-control ' se type="text" placeholder="Search Blog" aria-label="default input example"></input> */}
            <input className='blogSearch-input' placeholder='Type To Search' type="text" size="70"/>
            <div className="serch-options">
                <button>All <span>10</span></button>
                <button>IELTS<span>3</span></button>
                <button>SAT<span>3</span></button>
                <button>University<span>2</span></button>
                <button>Visa<span>1</span></button>
                <button>Pasport<span>0</span></button>

                <button>Carrier In Canada<span>2</span></button>


            </div>
        </div>
    );
};

export default BlogSearch;