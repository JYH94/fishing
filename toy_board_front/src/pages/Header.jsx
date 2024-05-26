import { useState } from 'react';
import './Header.css';
import { Link, Routes, Route } from 'react-router-dom';
import Fishing from './selectProject/fishing/Fishing';
import Board from './selectProject/board/Board';
import SelectProject from './selectProject/SelectProject';


const Header = () => {
    const [openStatus, SetOpenStatus] = useState({
        point: false,
        board: false,
        aboutMe: false
    });
    return (
        <div id='total_info'>
            <div id='privacy'>
                <span className='info_title'>Name</span>
                <p>테스트 </p>
                <span className='info_title'>Github</span>
                <p>https://github.com/JYH94</p>
                <span className='info_title'>velog</span>
                <p>https://velog.io/@dydgusc66/posts</p>
            </div>
            <div id='menu_bar'>
                <div>
                    <Link to='/'>HOME</Link>
                </div>
                <div>
                    <Link to='/aboutme'>About Me</Link>
                </div>
                <div onClick={() => SetOpenStatus(pre => ({ ...pre, point: !openStatus.point }))}>
                    <Link to='/fishing'>Fishing</Link>
                </div>
                <div onClick={() => SetOpenStatus(pre => ({ ...pre, board: !openStatus.board }))}>Board
                    {openStatus.board &&
                        <ul>
                            <li>자유게시판</li>
                            <li>조행기</li>
                        </ul>
                    }
                </div>
            </div>
        </div>
    );
}

export default Header;