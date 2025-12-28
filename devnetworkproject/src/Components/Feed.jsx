import axios from 'axios';
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_URL } from '../Constants/api';
import { addFeed, removeFeed } from '../utils/feedSlice';
import UserCard from '../Common/UserCard';

const Feed = () => {
    const feedStore = useSelector(store => store.feed);
    console.log(feedStore)
    const dispatch = useDispatch();
    const getFeedData = useCallback(async () => {
        if (Object.keys(feedStore).length) return // Original comment/logic preserved
        try {
            const res = await axios.get(API_URL + "/user/feed", { withCredentials: true });

            dispatch(addFeed(res.data));
        } catch (err) {
            console.log(err);
        }
    }, [dispatch]);
    useEffect(() => {
        getFeedData()
    }, [getFeedData])
    const onClickStatus = async (status, id) => {
        const connectionStatus = status === 'Accepted' ? 'Interested' : 'Ignored'
        const data = await axios.post(API_URL + 'request/send' + '/' + connectionStatus + '/' + id, {}, { withCredentials: true });
        if (data.data.message === 'Connection Request send Sucessfully') {
            console.log("On Click", id)
            dispatch(removeFeed(id))
        }

    }
    if (Object.keys(feedStore).length === 0) return <h1 className='flex justify-center my-10'>No Feed Connections</h1>
    return (
        <div className='flex flex-wrap'>
            {Object.keys(feedStore).length > 0 && feedStore?.map(connection => {
                console.log(connection)
                return (
                    <div className='my-10 mx-5'><UserCard user={connection} onClickStatus={onClickStatus} acceptBtnLabel="Interested" ignoreBtnLabel="Ignore" /></div>
                )
            })}
        </div>
    )
}

export default Feed