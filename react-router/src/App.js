import logo from './logo.svg';
import './App.css';
// 3. Routes와 Route를 가져와서 사용
import {Routes, Route, Link} from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Test from './page/Test';
import KoreanPage from './page/KoreanPage';
import NonFound from './page/NonFound';
import Number from './page/Number';
import { useState } from 'react';
import NumberId from './page/NumberId';
import Board from './page/Board';
import BoardId from './page/BoardId';

function App() {
  const [list, setList] = useState([1,2,3,4,5]);
  
  return (
    <div className="App">
      <h1>리액트라우터를 사용하게 된것을 환영합니다</h1>
      <div>
        {/** Link를 통해서컴포넌트간의 이동을 할수있다. */}
        {/** a태그도 가능하지만 새로고침이 일어나면 맨처음 화면으로 돌아간다(데이터리셋) */}
        <Link to="/about">about</Link> <br></br>
        <Link to="/Test"><button>TestLink</button></Link> <br></br>  
        <Link to="/number/1"> 1</Link>    
        <Link to="/number/문자">문자</Link> <br></br>  
        {
          list.map((item)=>(
            <Link  to={"/number/"+ item} ><button>{item}</button></Link>
          ))
        }

      </div>
      {/** 주소마다 하나의 화면을 가지게됨
       * Route에 보여질 화면을 Routes로 묶어줌
       */}
      <Routes>
        {/** path를 통해 주소를 연결, element를 통해 컴포넌트 연결 */}
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}/> {/**주소창에 /about추가하면나옴 */}
        {/** Route 를 통해서 test입니다를 출력하는 Test 페이지를 만들고 
         * 링크를 통해서 들어갈수 있도록 작성해주세요 (버튼으로)
        */}
        <Route path='Test' element={<Test />}/>

        {/** 여러 주소로 하나에 컴포넌트에 연결 가능, 원하는 주소작성가능 */}
        <Route path="test/ko" element={<KoreanPage />}/>
        <Route path="test/es" element={<KoreanPage />}/>
        <Route path="test/fr" element={<KoreanPage />}/>
        {/** 지정한 주소 이외에 들어갔을때 *을 통해 모든 주소접근을 확인할수 있다 */}
        {/* 존재하는 페이지가 없다고 알려주는데 사용 */}
        <Route path='*' element={<NonFound />}/>

        {/* :id 는 변수이름 id를 찾는 값을 주소를 통해 전달할수 있다. */}
        {/* id 위치에 값을 적어주면 그 값이 id:값 과 같은 형태로 params에 전달 */}
        <Route path="number/:id" element={<Number />}>
          {/* Outlet을 통해 NumberId를 출력한다 */}
          {/* 중첩 : 페이지안에 바뀌는 페이지가 있는것 */}
          <Route path=':id' element={<NumberId/>} />
        </Route>
        {/* Board페이지를 만들어서 BoardId 페이지에 params값을 출력하세요
          Board 페이지에는 /board/1과 같이 1~10까지 로 접근할수 있는 Link있음
          BoardId 페이지에는 params를 가져와서 출력*/}
          <Route path='board' element={<Board />}>
            <Route path=':id' element={<BoardId />}/>
          </Route>
      </Routes>

    </div>
  );
}

export default App;
