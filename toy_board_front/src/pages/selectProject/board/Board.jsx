import './Board.css';
import { useEffect } from "react";
import { api } from "../../model";
import { useState } from "react";
import Board_side from './board_side/Board_side';


const Board = () => {

    const [articleList, setArticleList] = useState([]);
    const [whichArticle, setWhichArticle] = useState(null);
    const [checkStatus, setCheckStatus] = useState({
        all: true,
        members: true,
        nonMembers: true,
    });
    const [modal, setModal] = useState(false);


    useEffect(() => {
        api('/board/selectall')
        .then(res => {
            setArticleList(res.data);
        })
        .catch(err => console.log(err.message));
    },[])

    const changeCheckBox = (e) => {
        const whichBox = e.target.id;
        console.log(e.target.id);
        switch (whichBox) {
            case 'all':
                if (checkStatus.members && checkStatus.nonMembers) {
                    setCheckStatus({
                        all: false,
                        members: false,
                        nonMembers: false
                    })
                } else {
                    setCheckStatus({
                        all: true,
                        members: true,
                        nonMembers: true
                    })
                }
                break;
            case 'members':
                setCheckStatus(pre => {
                    return {
                        ...pre,
                        members: !pre.members,
                        all: !pre.members && pre.nonMembers,
                    }
                })
                break;
            case 'nonMembers':
                setCheckStatus(pre => {
                    return {
                        ...pre,
                        nonMembers: !pre.nonMembers,
                        all: !pre.nonMembers && pre.members,
                    }
                })
                break;
        }
    }

    const changeArticle = () => {
        
    }

    console.log(articleList[0]);



    return (
        <div className="container">
            <div className="contentBox">
                {modal &&
                    <>
                        <div className='modal_back'>
                        </div>
                        <div className='modal_Fishing'>
                            <div className='xBtn' onClick={() => setModal(false)}>X</div>
                            <h2></h2>
                            <div></div>
                            <div></div>
                            <h3>관련게시글</h3>
                            <div></div>
                        </div>
                    </>
                }
                <div className="topTitle">
                    <div>
                        <label htmlFor="all">모두보기&nbsp;
                            <input type="checkbox" id='all' checked={checkStatus.all} onChange={changeCheckBox} />
                        </label>
                        <label htmlFor="members">회원&nbsp;
                            <input type="checkbox" id='members' checked={checkStatus.members} onChange={changeCheckBox} />
                        </label>
                        <label htmlFor="nonMembers">비회원&nbsp;
                            <input type="checkbox" id='nonMembers' checked={checkStatus.nonMembers} onChange={changeCheckBox} />
                        </label>
                    </div>
                </div>
                <div className='board_contentBox'>
                    {articleList.map((article, index) => (
                        <div key={index} onClick={() => setModal(true)}>
                            <div>{article.seq}</div>
                            <div>{article.title}</div>
                            <div>{article.writer}</div>
                            <div>{article.regdate}</div>
                            <div>{article.views}</div>
                        </div>
                    ))}
                </div>
                {/* <div className='board_contentBox'>
                    <div onClick={() => setModal(true)}>
                        <div>1</div>
                        <div>조행기</div>
                        <div>고기 잘 나옵니다.</div>
                        <div>주용현</div>
                        <div>2024-06-06</div>
                        <div>2</div>
                    </div>
                    <div>
                        <div>2</div>
                        <div>조행기</div>
                        <div>여기 가지마세요.</div>
                        <div>테스트</div>
                        <div>2024-03-09</div>
                        <div>8</div>
                    </div>
                    <div>
                        <div>1</div>
                        <div>조행기</div>
                        <div>6월 6일 금사지 조행기.</div>
                        <div>런커</div>
                        <div>2024-02-02</div>
                        <div>111</div>
                    </div>
                    <div>
                        <div>1</div>
                        <div>조행기</div>
                        <div>날씨 덥습니다.</div>
                        <div>낚시꾼</div>
                        <div>2024-01-11</div>
                        <div>222</div>
                    </div>
                </div> */}
            </div>
            <Board_side />
        </div>
    )
}

export default Board;