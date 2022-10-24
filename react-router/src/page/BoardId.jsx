import { useState } from "react";
import { useParams } from "react-router-dom";
const BoardId = () => {
    const {id} = useParams();
    const [memolist, setMemolist] = useState([
        {id : 1, memo : "첫번째 내용입니다"},
        {id : 2, memo : "두번째 내용입니다"},
    ])
    const memo = memolist[id-1];
    return (  
        <div>
            <h1>{memo.id}</h1>
            <p>{memo.memo}</p>
        </div>
    );
}

export default BoardId;