import { createContext, useEffect, useState } from "react";

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const decryption = {
        orientation_integration: 'Hội nhập định hướng',
        cn: 'Công nghệ',
        ht: 'Ban hiền tài',
        ks: 'Ban kiểm soát',

    }
    const department = [
        {
            short: "bcu",
            name: "Ban cung ứng",
        },
        {
            short: "cn",
            name: "Ban công nghệ",
        },
        {
            short: "ks",
            name: "Ban kiểm soát",
        },
        {
            short: "ht",
            name: "Ban hiền tài",
        },
        {
            short: "ptkh",
            name: "Ban PTKH",
        },
        {
            short: "sp",
            name: 'Ban PTTH và SP',
        },
        {
            short: "tckt",
            name: "Ban tài chínn kế toán",
        },

    ]
    const [data, setData] = useState([])
    const [cates, setCates] = useState([])
    const [current, setCurrent] = useState()
    const [currentList, setCurrentList] = useState([])
    const [depart, setDepart] = useState()
    const [dataAtribute, setDataAtribute] = useState("all")
    useEffect(() => {
        fetch('http://hrm.diligo.vn/api/v1/slide_channel')
            .then(result => result.json())
            .then(data => {
                console.log(data);
                setData(data.data)
                console.log(data.data)
            })
    }, [])
    useEffect(() => {
        const root = data.map(val => val.department)
        setCates([...new Set(root)].map(val => decryption[val]))
    }, [data])
    useEffect(() => {
        setCurrentList(data.filter(val => val.department === current))
    }, [current])
    const value = {
        data,
        cates,
        currentList,
        depart,
        setDepart,
        dataAtribute,
        setDataAtribute,
        department

    }
    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}