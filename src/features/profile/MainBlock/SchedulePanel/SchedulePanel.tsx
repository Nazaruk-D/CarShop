import React, {useEffect, useState} from 'react';
import s from "./SchedulePanel.module.scss"
import {useAppDispatch, useAppSelector} from "../../../../app/store/store";
import {getUsersTC} from "../UsersList/users-reducer";

const users = [
    {
        model: 'Model Y',
        email: 'nikita.znak@mail.ru',
        firstName: 'Nikita',
        lastName: 'Znak',
        region: 'BLR',
        phoneNumber:'+375445316892',
        status: 'pending',
        contactPreference: 'Phone Number',
        updatedAt: '01.01.2023',
    },
]


const SchedulePanel = () => {
    const {currentPage, pageSize, totalUsersCount} = useAppSelector(s => s.users)
    const dispatch = useAppDispatch();

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let currentPageFirst = ((currentPage - 5) < 0 ? 0 : currentPage - 5);
    let currentPageLast = currentPage + 4;
    let slicedPages = pages.slice(currentPageFirst, currentPageLast);

    useEffect(() => {
        dispatch(getUsersTC({limit: pageSize, page: currentPage}))
    },[totalUsersCount])

    const onPageChange = (page: number) => {
        dispatch(getUsersTC({limit: pageSize, page: page}))
    }

    return (
        <div className={s.mainBlock}>
            <div className={s.titleBlock}>
                <h1 className={s.title}>Schedule List</h1>
            </div>
            <div className={s.contentBlock}>
                <div className={s.table}>
                    <div className={s.tableTitles}>
                        <div className={s.fieldSmall}>Model</div>
                        <div className={s.fieldBig}>Email</div>
                        <div className={s.fieldDefault}>Full Name</div>
                        <div className={s.fieldSmall}>Region</div>
                        <div className={s.fieldDefault}>Phone Number</div>
                        <div className={s.fieldDefault}>Contact Preference</div>
                        <div className={s.fieldDefault}>Updated At</div>
                        <div className={s.fieldSmall}>Status</div>
                    </div>
                    <div className={s.tableData}>
                        {users.map((u, i) => (
                            <div className={s.data} key={i}>
                                <div className={s.dataFieldRegion}>{u.model}</div>
                                <div className={s.dataFieldEmail}>{u.email}</div>
                                <div className={s.dataFieldHide}>{u.firstName} {u.lastName}</div>
                                <div className={s.dataFieldRegion}>{u.region}</div>
                                <div className={s.dataFieldHide}>{u.phoneNumber}</div>
                                <div className={s.dataFieldHide}>{u.contactPreference}</div>
                                <div className={s.dataFieldHide}>{u.updatedAt}</div>
                                <div className={s.dataFieldRegion}>{u.status}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={s.paginationBlock}>
                    {slicedPages.map((p, index) => <span key={index}
                                                         className={currentPage === p ? s.selectedPage : s.page}
                                                         onClick={() => {onPageChange(p)}}>{p + " "}</span>)}
                </div>
            </div>
        </div>
    )
};

export default SchedulePanel;