import './Header.css';
import { useEffect, useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { api } from './model';
import Login from './login/Login';
import Sign from './sign/Sign';


const Header = () => {
    const [userInfo, setUserInfo] = useState(JSON.parse(sessionStorage.getItem('user')));
    const [openStatus, SetOpenStatus] = useState({
        aboutMe: false
    });
    const [modal, setModal] = useState({
        sign: false,
        login: false
    });

    const logout = () => {
        setUserInfo(null);
        sessionStorage.removeItem('user')
        alert('로그아웃 성공');
    }


    return (
        <div id='total_info'>
            {modal.sign &&
                <Sign modal={modal} setModal={setModal} />
            }
            {modal.login &&
                <Login modal={modal} setModal={setModal} setUserInfo={setUserInfo} />
            }
            <div id='privacy'>
                {!userInfo ?
                    <div id='buttonBox'>
                        <button onClick={() => setModal(pre => ({ ...pre, login: true }))}>로그인</button>
                        <button onClick={() => setModal(pre => ({ ...pre, sign: true }))}>회원가입</button>
                    </div>
                    : <div id='greeting'>
                        {userInfo && userInfo.nickname}님 환영합니다! <button onClick={logout}>로그아웃</button>
                    </div>
                }
            </div>
            <div id='menu_bar'>
                <div>
                    <Link to='/'>HOME</Link>
                </div>
                <div>
                    <Link to='/aboutme'>About Me</Link>
                </div>
                <div onClick={() => SetOpenStatus(pre => ({ ...pre, point: !openStatus.point }))}>
                    <Link to='/fishing'>포인트</Link>
                </div>
                <div>
                    <Link to='/board'>게시판</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;