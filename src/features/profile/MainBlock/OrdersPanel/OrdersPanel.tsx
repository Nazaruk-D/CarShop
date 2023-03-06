import React from 'react';
import s from "./OrdersPanel.module.scss"

const users = [
    {userId: '1', email: 'nikita.znak@mail.ru', firstName: 'Nikita', lastName: 'Znak', role: 'admin', createdAt: '01.01.2023', updatedAt: '01.01.2023'},
    {userId: '2', email: 'nazaruk-dima@mail.ru', firstName: 'Dima', lastName: 'Nazaruk', role: 'admin', createdAt: '02.01.2023', updatedAt: '02.01.2023'},
    {userId: '3', email: 'eznak06@mail.ru', firstName: 'Katya', lastName: 'Nazaruk', role: 'user', createdAt: '03.01.2023', updatedAt: '03.01.2023'},
]


const OrdersPanel = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.titleBlock}>
                <h1 className={s.title}>Orders List</h1>
            </div>
            <div className={s.contentBlock}>
                <div className={s.tableTitles}>
                    <div className={s.fieldId}>ID</div>
                    <div className={s.field}>Email</div>
                    <div className={s.field}>First Name</div>
                    <div className={s.field}>Last Name</div>
                    <div className={s.field}>Role</div>
                    <div className={s.field}>Created At</div>
                    <div className={s.field}>Updated At</div>
                </div>
                <div className={s.dataBlock}>
                    {users.map((u, i) => (
                        <div className={s.data} key={i}>
                            <div className={s.dataFieldId}>{u.userId}</div>
                            <div className={s.dataField}>{u.email}</div>
                            <div className={s.dataField}>{u.firstName}</div>
                            <div className={s.dataField}>{u.lastName}</div>
                            <div className={s.dataField}>{u.role}</div>
                            <div className={s.dataField}>{u.createdAt}</div>
                            <div className={s.dataField}>{u.updatedAt}</div>
                        </div>
                    ))}
                </div>
            </div>        </div>
    );
};

export default OrdersPanel;