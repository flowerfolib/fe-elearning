
import { useState, createContext, useRef } from 'react'

export const api = [
  {
    question: 'Chữ “Phật” nghĩa là gì?',

    answers: ['Bậc hoàn toàn giác ngộ', 'Người giác ngộ chân chánh', 'Bậc tự giác, giác tha, giác hạnh viên mãn', 'Bậc cao hơn thượng đế'],
    correct: 2,

  },
  {
    question: 'Thái Tử Tất Đạt Đa là con của ai?',

    answers: ['Vua Tịnh Phạm', 'Vua Bimbisara', 'Vua Tịnh Phạm và Hoàng Hậu Ma Da', 'Vua Bimbisara và Hoàng Hậu Vadehi'],
    correct: 2,

  },
  {
    question: 'Ai là người được giao nuôi nấng Thái Tử?',

    answers: ['Em của mẹ Ngài', 'Ma Ha Ba Xà Ba Đề', 'Dì ruột của Thái Tử', 'Cả ba đều đúng'],
    correct: 2,

  },
  {
    question: 'Con của Thái Tử tên là gì?',

    answers: ['Ma Hầu La', 'La Hầu La', ' Tịnh Hầu La', 'Tất Hầu La'],
    correct: 2,

  }]
export const listQ=[
    {
      name: "Đường về xứ Phật",
      time: "60 phút",
      questionsLength: 4,
      isComplete:false
     },{
      name: "Phải làm sao, phải làm sao",
      time: "60 phút",
      questionsLength: 40,
      isComplete:true
     },{
      name: "Tìm đường về nhà",
      time: "60 phút",
      questionsLength: 20,
      isComplete:true
     },{
      name: "Những thằng khác ngại tán em",
      time: "60 phút",
      questionsLength: 10,
      isComplete:false
     },{
      name: "Tại ngán anh",
      time: "60 phút",
      questionsLength: 50,
      isComplete:true
     },{
      name: "Đường về xứ Phật",
      time: "60 phút",
      questionsLength: 10,
      isComplete:false
     }
  ]
const Context = createContext();

function Provider({ children }) {

  const [index, setIndex] = useState(0)
  const [listChecked, setListChecked] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isDisable, setIsDisable] = useState(false)
  

  let list = useRef(new Array(api.length).fill(undefined))

  const data = {
    api,
    index,
    setIndex,
    list,
    listChecked,
    setListChecked,
    isVisible,
    setIsVisible,
    isDisable,
    setIsDisable
  }

  return (
    <Context.Provider value={data}>
      {children}
    </Context.Provider>
  )
}
export { Context}
export default Provider