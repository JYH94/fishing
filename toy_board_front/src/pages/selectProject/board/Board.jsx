import './Board.css';
import { useEffect } from "react";
import { api } from "../../model";
import { useState } from "react";
import Board_side from './board_side/Board_side';
import Album from '../../album/Album';


const Board = () => {

    const [articleList, setArticleList] = useState([]);
    const [whichArticle, setWhichArticle] = useState(null);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        api('/board/selectall')
            .then(res => {
                setArticleList(res.data);
            })
            .catch(err => console.log(err.message));
    }, [])

    const changeArticle = (article) => {
        setWhichArticle(article);
        setModal(!modal);
    }




    return (
        <div className="container">
            <div className="contentBox">
                {modal &&
                    <Album setModal={setModal} whichArticle={whichArticle} />
                }
                <div className="topTitle">
                </div>
                <div className='board_contentBox'>
                    {articleList.map((article, index) => (
                        <div key={index} onClick={() => changeArticle(article)}>
                            <div>{article.seq}</div>
                            <div>{article.title}</div>
                            <div>{article.writer}</div>
                            <div>{article.regdate}</div>
                            <div>{article.views}</div>
                        </div>
                    ))}
                </div>
            </div>
            <Board_side />
        </div>
    )
}

export default Board;