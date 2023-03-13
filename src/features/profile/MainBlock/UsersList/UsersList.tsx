import React from 'react';
import s from "./UsersList.module.scss";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";


const users = [
    {userId: '1', email: 'nikita.znak@mail.ru', firstName: 'Nikita', lastName: 'Znak', role: 'admin', createdAt: '01.01.2023', updatedAt: '01.01.2023'},
    {userId: '2', email: 'nazaruk-dima@mail.ru', firstName: 'Dima', lastName: 'Nazaruk', role: 'admin', createdAt: '02.01.2023', updatedAt: '02.01.2023'},
    {userId: '3', email: 'eznak06@mail.ru', firstName: 'Katya', lastName: 'Nazaruk', role: 'user', createdAt: '03.01.2023', updatedAt: '03.01.2023'},
    {userId: '4', email: 'nikita.znak@mail.ru', firstName: 'Nikita', lastName: 'Znak', role: 'admin', createdAt: '01.01.2023', updatedAt: '01.01.2023'},
    {userId: '5', email: 'nazaruk-dima@mail.ru', firstName: 'Dima', lastName: 'Nazaruk', role: 'admin', createdAt: '02.01.2023', updatedAt: '02.01.2023'},
    {userId: '6', email: 'eznak06@mail.ru', firstName: 'Katya', lastName: 'Nazaruk', role: 'user', createdAt: '03.01.2023', updatedAt: '03.01.2023'},
    {userId: '7', email: 'nikita.znak@mail.ru', firstName: 'Nikita', lastName: 'Znak', role: 'admin', createdAt: '01.01.2023', updatedAt: '01.01.2023'},
    {userId: '8', email: 'nazaruk-dima@mail.ru', firstName: 'Dima', lastName: 'Nazaruk', role: 'admin', createdAt: '02.01.2023', updatedAt: '02.01.2023'},
    {userId: '9', email: 'eznak06@mail.ru', firstName: 'Katya', lastName: 'Nazaruk', role: 'user', createdAt: '03.01.2023', updatedAt: '03.01.2023'},
    {userId: '10', email: 'nikita.znak@mail.ru', firstName: 'Nikita', lastName: 'Znak', role: 'admin', createdAt: '01.01.2023', updatedAt: '01.01.2023'},
]

const UsersList = () => {
    let pagesCount = Math.ceil(10 / 10);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let currentPage = 1;
    let currentPageFirst = ((currentPage - 5) < 0 ? 0 : currentPage - 5);
    let currentPageLast = currentPage + 4;
    let slicedPages = pages.slice(currentPageFirst, currentPageLast);

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