import './App.css';
import React, {useState, useMemo} from "react"

  const SearchResult = React.memo(() => {
    console.log(`render`)
    // return <h1>Hello World</h1>

    return <>
    <ul>
      <li></li>
    </ul>
    </>
  }, (preProps, nextProps) => {
    return true
  })

function App() {

  const [arr, setArr] = useState([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1])
  const [count, setCount] = useState(0)

  // const diffFunc = () =>{
  //   console.log(`run`)
  //   let kq = 0
  //   let newArr = [...arr]
  //   newArr.forEach(item => {
  //     kq += item
  //   });
  //   return kq
  // }

  const diffFunc = useMemo(() => {
      console.log(`run`)
      let kq = 0
      let newArr = [...arr]
      newArr.forEach(item => {
        kq += item
      });
      return kq
    }, [])


  return (
    <div className="App">
      <SearchResult count={count}/>
      {/* ket qua la {diffFunc()} */}
      ket qua la {diffFunc}
      <h1>count is: {count}</h1>
      <button onClick={() =>setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default App;
