import React from 'react';
import s from "./SchedulePanel.module.scss"
import {AiOutlineEdit} from "react-icons/ai";

const users = [
    {
        email: 'nikita.znak@mail.ru',
        firstName: 'Nikita',
        lastName: 'Znak',
        createdAt: '01.01.2023',
        updatedAt: '01.01.2023'
    },
    {
        email: 'nazaruk-dima@mail.ru',
        firstName: 'Dima',
        lastName: 'Nazaruk',
        createdAt: '02.01.2023',
        updatedAt: '02.01.2023'
    },
    {
        email: 'eznak06@mail.ru',
        firstName: 'Katya',
        lastName: 'Nazaruk',
        createdAt: '03.01.2023',
        updatedAt: '03.01.2023'
    },
    {
        email: 'nikita.znak@mail.ru',
        firstName: 'Nikita',
        lastName: 'Znak',
        createdAt: '01.01.2023',
        updatedAt: '01.01.2023'
    },
    {
        email: 'nazaruk-dima@mail.ru',
        firstName: 'Dima',
        lastName: 'Nazaruk',
        createdAt: '02.01.2023',
        updatedAt: '02.01.2023'
    },
    {
        email: 'eznak06@mail.ru',
        firstName: 'Katya',
        lastName: 'Nazaruk',
        createdAt: '03.01.2023',
        updatedAt: '03.01.2023'
    },
    {
        email: 'nikita.znak@mail.ru',
        firstName: 'Nikita',
        lastName: 'Znak',
        createdAt: '01.01.2023',
        updatedAt: '01.01.2023'
    },
    {
        email: 'nazaruk-dima@mail.ru',
        firstName: 'Dima',
        lastName: 'Nazaruk',
        createdAt: '02.01.2023',
        updatedAt: '02.01.2023'
    },
]


const SchedulePanel = () => {


    let pagesCount = Math.ceil(100 / 8);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let currentPage = 5;
    let currentPageFirst = ((currentPage - 5) < 0 ? 0 : currentPage - 5);
    let currentPageLast = currentPage + 4;
    let slicedPages = pages.slice(currentPageFirst, currentPageLast);

    return (
        <div className={s.mainBlock}>
            <div className={s.titleBlock}>
                <h1 className={s.title}>Schedule List</h1>
            </div>
            <div className={s.contentBlock}>
                <div className={s.dataBlock}>
                    {users.map((u, i) => (
                        <div className={s.data} key={i}>
                            <div className={s.dataFieldEmail}>{u.email}</div>
                            <div className={s.dataFieldName}>{u.firstName} {u.lastName}</div>
                            <div className={s.dataField}>Model Y</div>
                            <div className={s.dataField}>{u.createdAt}</div>
                            <div className={s.dataField}>{u.updatedAt}</div>
                            <div className={s.dataFieldStatus}>
                                <span className={s.status}>pending</span>
                                <AiOutlineEdit/>
                            </div>
                        </div>
                    ))}
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

export default SchedulePanel;