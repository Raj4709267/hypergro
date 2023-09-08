import React, { FC } from "react";
import { setVideo } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import * as types from "../Redux/actionTypes";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const Pagination = () => {
  const { page } = useSelector((store: any) => store);
  const dispatch = useDispatch();
  const handleChangePage = (newPage: number) => {
    dispatch({ type: types.CHANGE_PAGE, payload: newPage });
  };

  return (
    <div className="flex justify-center items-center p-4">
      <button
        className="flex text-white m-2 bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded"
        disabled={page === 0}
        style={{ cursor: page === 0 ? "no-drop" : "pointer" }}
        onClick={() => {
          handleChangePage(page - 1);
        }}
      >
        <HiChevronLeft fontSize={"1.2rem"} />
      </button>
      <div>{page + 1}</div>
      <button
        className="flex text-white m-2 bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded"
        disabled={page === 9}
        style={{ cursor: page === 9 ? "no-drop" : "pointer" }}
        onClick={() => {
          handleChangePage(page + 1);
        }}
      >
        <HiChevronRight fontSize={"1.2rem"} />
      </button>
    </div>
  );
};

export default Pagination;
