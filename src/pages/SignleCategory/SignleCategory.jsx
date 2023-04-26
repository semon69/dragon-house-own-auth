import React from 'react';
import { Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import moment from 'moment/moment';
import Rating from 'react-rating';

const SignleCategory = ({ category }) => {
    const { image_url, title, author, details, _id, total_view, rating } = category;
    return (
        <div className='border my-4'>
            <div className='d-flex justify-content-between align-items-center bg-secondary fw-bold text-white'>
                <div className='d-flex justify-content-center align-items-center gap-2 ps-3'>
                    {/* <img style={{ width: '40px', borderRadius: '50%' }} src={author.img} alt="" /> */}
                    <Image style={{ width: '50px', height: '50px' }} src={author.img} roundedCircle />
                    <div className='py-2'>
                        <p>{author.name}</p>
                        {/* <p>{author.published_date.moment().format('dddd,')}</p> */}
                        <p>{moment(author.published_date).format('YYYY-MM-D')}</p>
                    </div>
                </div>
                <div className='pe-3 fs-5'>
                    <FaRegBookmark />
                    <FaShareAlt className='ms-2' />
                </div>
            </div>
            <div className=' p-4'>
                <h3>{title}</h3>
                <img className='my-4' style={{ width: '580px' }} src={image_url} alt="" />
                <p>{details.length < 250 ? details :
                    <>
                        {details.slice(0, 250)}...
                        <Link className='text-decoration-none' to={`/news/${_id}`}>Read More</Link>
                    </>
                }</p>

                <hr />

                <div className='d-flex justify-content-between text-secondary'>
                    <div className='d-inline-flex justify-content-center align-items-center gap-2'>
                        <p>
                            <Rating

                                placeholderRating={rating.number}
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaStar className='text-warning' />}
                                fullSymbol={<FaStar />}
                                readonly

                            />
                        </p>
                        <p>{rating.number}</p>

                    </div>
                    <div>
                        <p><FaEye /> <span>{total_view}</span></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignleCategory;