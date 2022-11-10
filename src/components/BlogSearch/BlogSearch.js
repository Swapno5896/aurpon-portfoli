import React from 'react';
// import './BlogSearch.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const BlogSearch = () => {
    const btns = [
        { text: 'All', count: 3 },
        { text: 'IELTS', count: 1 },
        { text: 'SAT', count: 1 },
        { text: 'University', count: 0 },
        { text: 'Visa', count: 0 },
        { text: 'Pasport', count: 1 },
    ]
    return (
        <div className='container blogSearch-container pt-5 mt-3'>


            {/* <form>
                <div class="form-row">
                    <div class="col-7 ">
                        <input type="text" class="form-control" placeholder="City" />
                    </div>
                </div>
            </form> */}
            <div class="form-floating mx-auto w-75 pb-4">
                <textarea class="form-control " placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Type To Search</label>
            </div>
            <div>
                {
                    btns?.map(btn => <button className='py-2 px-3 rounded-4 m-3 btn-outline-primary btn'>{btn.text} <span className='badge text-bg-warning'>{btn.count}</span></button>
                    )
                }
            </div>
        </div>
    );
};

export default BlogSearch;