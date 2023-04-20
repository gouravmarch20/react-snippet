import React, { useEffect, useState } from 'react'
import { GrSearch } from 'react-icons/gr'
// import { RiSettings3Fill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../redux/asyncThunks'

import './style.scss'
export const Home = () => {
    const dispatch = useDispatch()
    const { user, status } = useSelector(
        state => state.user
    )
    const [pageNumber, setPageNumber] = useState(1)

    useEffect(() => {
        dispatch(getUsers(pageNumber))
    }, [])

 return (
        <>
            <div>
                {
                    console.log(333, user)
                }
                <h1>hello</h1>
            </div>
        </>
    )
}
