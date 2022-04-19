import { createContext, useEffect, useState } from "react";

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const decryption = {
        orientation_integration: 'Hội nhập định hướng',
        cn: 'Công nghệ',
        ht: 'Ban hiền tài',
        ks: 'Ban kiểm soát'
    }
    const [data, setData] = useState([])
    const [cates, setCates] = useState([])
    const [current, setCurrent] = useState()
    const [currentList, setCurrentList] = useState([])
    useEffect(() => {
        fetch('http://192.168.1.121:15000/api/v1/slide_channel')
            .then(result => result.json())
            .then(data => {
                setData(data.data)
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
    }
    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}