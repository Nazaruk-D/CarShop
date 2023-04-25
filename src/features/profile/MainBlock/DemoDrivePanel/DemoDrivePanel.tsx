import React, {useEffect} from 'react';
import s from "./DemoDrivePanel.module.scss"
import {useAppDispatch, useAppSelector} from "../../../../app/store/store";
import {changeDemoDriveStatusTC, getDemoDriveListTC} from "./demo-drive-reducer";

const DemoDrivePanel = () => {
    const {currentPage, pageSize, totalDemoDriveOrdersCount, orders} = useAppSelector(s => s.demoDrive)
    const {status} = useAppSelector(s => s.app)
    const dispatch = useAppDispatch();

    let pagesCount = Math.ceil(totalDemoDriveOrdersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let currentPageFirst = ((currentPage - 5) < 0 ? 0 : currentPage - 5);
    let currentPageLast = currentPage + 4;
    let slicedPages = pages.slice(currentPageFirst, currentPageLast);

    useEffect(() => {
        dispatch(getDemoDriveListTC({limit: pageSize, page: currentPage}))
    },[])

    const onPageChange = (page: number) => {
        dispatch(getDemoDriveListTC({limit: pageSize, page: page}))
    }

    const onStatusChange = (event: React.ChangeEvent<HTMLSelectElement>, id: number | null) => {
        const status = event.currentTarget.value
        const callback = dispatch(getDemoDriveListTC({limit: pageSize, page: currentPage}));
        dispatch(changeDemoDriveStatusTC({status, id, callback}));
    }

    const onSelectedModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(getDemoDriveListTC({limit: pageSize, page: currentPage, model: event.currentTarget.value}));
    }

    const onDownloadJSON = () => {
        const data = JSON.stringify(orders);
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'demo-drive-orders.json';
        link.click();
    }

    //зафиксить прием региона для загаза тут и в бэке
    return (
        <div className={s.mainBlock}>
            <div className={s.titleBlock}>
                <h1 className={s.title}>Demo Drive List</h1>
                <select className={s.modelSelect} onChange={(e) => {onSelectedModelChange(e)}}>
                    <option value="" label="All Models">All Models</option>
                    <option value="Model Y" label="Model Y">Model Y</option>
                    <option value="Model S" label="Model S">Model S</option>
                    <option value="Model 3" label="Model 3">Model 3</option>
                    <option value="Model X" label="Model X">Model X</option>
                </select>
                <button className={s.getJSON} onClick={onDownloadJSON} disabled={status !== 'succeeded'}>DOWNLOAD JSON FILE</button>
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
                                <div className={s.dataFieldDefault}>
                                    {o.contactPreference === "PN" && "Phone Number"}
                                    {o.contactPreference === "EA" && "Email Address"}
                                </div>
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

export default DemoDrivePanel;