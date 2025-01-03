import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useParams, useSearchParams } from 'react-router-dom';

const WatchPage = () =>{

    const [searchParams, setSearchParam] = useSearchParams()

    console.log(searchParams.get('v'));

    const dispatch = useDispatch();
    useEffect(()=>{

        dispatch(closeMenu());
    },[])

    return (
        <div className='px-5'>
           <iframe width="700" height="450" src={`https://www.youtube.com/embed/${searchParams.get('v')}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
           
        </div>
    )

}

export default WatchPage;