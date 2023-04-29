import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SignleCategory from '../SignleCategory/SignleCategory';

const Category = () => {
    const {id} = useParams();
    const newsCategories = useLoaderData();
    return (
        <div>
            {id && <h1>Total news in this category {newsCategories.length}</h1>}
            <div className=''>
                {
                    newsCategories.map(category => <SignleCategory
                        
                        key = {category._id}
                        category = {category}
                    >

                    </SignleCategory>)
                }
            </div>
        </div>
    );
};

export default Category;