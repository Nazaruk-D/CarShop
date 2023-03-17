import React, {useEffect, useState} from 'react';
import s from "./SchedulePanel.module.scss"
import {useAppDispatch, useAppSelector} from "../../../../app/store/store";
import {changeScheduleStatusTC, getScheduleListTC} from "./schedule-reducer";

const SchedulePanel = () => {
    const {currentPage, pageSize, totalScheduleCount, orders} = useAppSelector(s => s.schedule)
    const dispatch = useAppDispatch();
    // const [shouldFetchData, setShouldFetchData] = useState(false);


    let pagesCount = Math.ceil(totalScheduleCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let currentPageFirst = ((currentPage - 5) < 0 ? 0 : currentPage - 5);
    let currentPageLast = currentPage + 4;
    let slicedPages = pages.slice(currentPageFirst, currentPageLast);

    useEffect(() => {
        dispatch(getScheduleListTC({limit: pageSize, page: currentPage}))
    },[])

    // useEffect(() => {
    //     if (shouldFetchData) {
    //         dispatch(getScheduleListTC({limit: pageSize, page: currentPage}));
    //         setShouldFetchData(false);
    //     }
    // }, [shouldFetchData, currentPage, pageSize, dispatch]);

    const onPageChange = (page: number) => {
        dispatch(getScheduleListTC({limit: pageSize, page: page}))
    }

    const onStatusChange = (event: React.ChangeEvent<HTMLSelectElement>, id: number | null) => {
        const status = event.currentTarget.value
        dispatch(changeScheduleStatusTC({status, id}));
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
                        <div className={s.fieldDefault}>Status</div>
                    </div>
                    <div className={s.tableData}>
                        {orders.map((o, i) => (
                            <div className={s.data} key={i}>
                                <div className={s.dataFieldRegion}>{o.model}</div>
                                <div className={s.dataFieldBig}>{o.email}</div>
                                <div className={s.dataFieldDefault}>{o.firstName} {o.lastName}</div>
                                <div className={s.dataFieldRegion}>BLR</div>
                                <div className={s.dataFieldDefault}>{o.phoneNumber}</div>
                                <div className={s.dataFieldDefault}>{o.contactPreference}</div>
                                <div className={s.dataFieldDefault}>{o.updatedAt}</div>
                                <div className={s.dataFieldDefault}>
                                    <select value={o.status!} onChange={(e) => {onStatusChange(e, o.id)}}>
                                        <option value="pending" label="pending">pending</option>
                                        <option value="received" label="received">received</option>
                                        <option value="completed" label="completed">completed</option>
                                    </select>
                                </div>
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