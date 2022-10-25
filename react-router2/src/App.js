import './App.css';
import Layout from './page/Layout';
import { Routes, Route} from 'react-router-dom'
import Home from './page/Home';
import Writeform from './page/Wirteform';
import BoardList from './page/BoardList';
import BoardContext from './page/BoardContext';
import { useEffect, useState } from 'react';
import { SetContext, StateContext } from './context/ContextComp';

function App() {
  const [boardlist, setBoard] = useState([]);
  // 실행하자 마자 ajax를 통해 값을 들고 올수 있다
  useEffect(()=>{
    // Fetch를 사용한 ajax
    async function getData(){
      // response로 값을 받아오는 시간이 걸림
      //  > 데이터가 없는동안에 어떻게 표현할지 작성필요
      const response = await fetch('boardlistdata.json');
      const data = await response.json();
      console.log(data);
      setBoard(data.boardlist)
    }
    getData();
  },[]);

  return (
    <div className="App">
      {/** 데이터를 전체적으로 관리하기 위해 Context사용 */}
      <StateContext.Provider value={boardlist}>
        <SetContext.Provider value={setBoard} >
          <Routes>
            <Route path='/' element={<Layout />}>
              {/** path='/'대신에 index사용 */}
              <Route index element={<Home />}/>
              <Route path='writeform' element={<Writeform />} />
              <Route path='boardlist' element={<BoardList />} >
                <Route path=':id' element={<BoardContext />} />
              </Route>
            </Route>
          </Routes>
        </SetContext.Provider>
      </StateContext.Provider>
      
    </div>
  );
}

export default App;
