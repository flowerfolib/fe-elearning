
import { useState, createContext, useRef } from 'react'

const Context = createContext();

function Provider({ children }) {

  const [index, setIndex] = useState(0)
  const api = [
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
  let list = useRef(new Array(api.length).fill(undefined))


  const data = {
    api,
    index,
    setIndex,
    list,

  }

  // console.log(data.api.map(e=>e.answerChecked))
  return (
    <Context.Provider value={data}>
      {children}
    </Context.Provider>
  )
}
export { Context }
export default Provider