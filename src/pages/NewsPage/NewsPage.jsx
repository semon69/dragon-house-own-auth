import React from 'react';
import { Button } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorInsight from '../EditorInsight/EditorInsight';

const NewsPage = () => {
    const newsData = useLoaderData();
    console.log(newsData)
    const { image_url, title, author, details, _id, category_id } = newsData;
    return (
        <div>
            <h1>news coming soon</h1>
            <div className='border p-4'>
                <img className='w-100' src={image_url} alt="" />
                <h3 className='my-4 fw-bold'>{title}</h3>
                <p>{details}</p>

                <Link to={`/category/${category_id}`}><Button className='bg-danger'><FaArrowLeft /> All news in this category</Button></Link>
            </div>

            <div className='my-4'>
                <h3 className='my-3'>Editors Insight</h3>
                <EditorInsight></EditorInsight>
            </div>
        </div>
    );
};

export default NewsPage;