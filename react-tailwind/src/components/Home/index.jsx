import React, { useEffect, useState } from "react";
import { GrSearch } from "react-icons/gr";
// import { RiSettings3Fill } from 'react-icons/ri'
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/asyncThunks";

import "./style.scss";
export const Home = () => {
  const dispatch = useDispatch();
  const { user, status } = useSelector((state) => state.user);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    dispatch(getUsers(pageNumber));
  }, []);

  return (
    <>
      <div>
        {console.log(user)}
        <h1 className="bg-red-400 p-4">hello</h1>
        <h1 className="bg-red-400 p-4">hello</h1>
      </div>
    </>
  );
};
