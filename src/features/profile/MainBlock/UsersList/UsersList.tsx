import React, {useEffect} from 'react';
import s from "./UsersList.module.scss";
import { AiFillDelete } from "react-icons/ai";
import {useAppDispatch, useAppSelector} from "../../../../app/store/store";
import {getUsersTC} from "./users-reducer";


const UsersList = () => {
    const {currentPage, pageSize, users} = useAppSelector(s => s.users)
    const dispatch = useAppDispatch();

    let pagesCount = Math.ceil(10 / 10);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let currentPageFirst = ((currentPage - 5) < 0 ? 0 : currentPage - 5);
    let currentPageLast = currentPage + 4;
    let slicedPages = pages.slice(currentPageFirst, currentPageLast);

    useEffect(() => {
        dispatch(getUsersTC({limit: pageSize, page: currentPage}))
    },[pageSize, currentPage])

    return (
        <div className={s.mainBlock}>
            <div className={s.titleBlock}>
                <h1 className={s.title}>Users List</h1>
            </div>
            <div className={s.contentBlock}>
                <div className={s.table}>
                    <div className={s.tableTitles}>
                        <div className={s.field}>Email</div>
                        <div className={s.field}>Full Name</div>
                        <div className={s.field}>Role</div>
                        <div className={s.field}>Created At</div>
                        <div className={s.field}>Updated At</div>
                        <div className={s.field}>Operation</div>
                    </div>
                    <div className={s.tableData}>
                            {users.map((u, i) => (
                                <div className={s.data} key={i}>
                                    <div className={s.dataField}>{u.email}</div>
                                    <div className={s.dataField}>{u.firstName} {u.lastName}</div>
                                    <div className={s.dataField}>{u.role}</div>
                                    <div className={s.dataField}>{u.createdAt}</div>
                                    <div className={s.dataField}>{u.updatedAt}</div>
                                    <div className={s.dataFieldDelete}><AiFillDelete onClick={() => {}}/></div>
                                </div>
                            ))}
                    </div>
                </div>
                <div className={s.paginationBlock}>
                    {slicedPages.map((p, index) => <span key={index}
                                                         className={currentPage === p ? s.selectedPage : s.page}
                                                         onClick={() => {}}>{p + " "}</span>)}
                </div>
            </div>
        </div>
    );
};

export default UsersList;