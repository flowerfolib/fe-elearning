import React,{useContext} from 'react'
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { DataContext } from '../../../Context/Context'



function Introduce() {
  const { data } = useContext(DataContext)
  const currCate = useLocation().hash.split('#')[1]
  const currLab = useLocation().hash.split('#')[2]
  const id = useLocation().search.replace('?', '')
  const introduce = data[id]?.lesson[currCate].slides[currLab].description

  return (
    <div dangerouslySetInnerHTML={{__html:introduce}}></div>
  )
}

export default Introduce