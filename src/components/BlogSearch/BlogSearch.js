import React from 'react';
import './BlogSearch.css'
const BlogSearch = () => {
    return (
        <div className='container blogSearch-container'>
            {/* <input className='blogSearch-input form-control ' se type="text" placeholder="Search Blog" aria-label="default input example"></input> */}

            {/* now comment */}
            {/* <input className='blogSearch-input' placeholder='Type To Search' type="text" size="70"/> */}

            {/* new added */}
            <div
                class="form-floating input-container">
                <textarea class="form-control blogSearch-input" placeholder="Leave a comment here" id="floatingTextarea">
                    <button>sdflsdk</button>
                </textarea>
                <label for="floatingTextarea">Comments</label>
                <button>dkfls</button>
            </div>
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