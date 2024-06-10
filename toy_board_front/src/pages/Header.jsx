import './Header.css';
import { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { api } from './model';


const Header = () => {
    const [openStatus, SetOpenStatus] = useState({
        point: false,
        board: false,
        aboutMe: false
    });
    const [modal, setModal] = useState({
        sign: false,
        login: false
    });

    const [signForm, setSignForm] = useState(null);
    const [loginForm, setLoginForm] = useState(null);

    const changeSignForm = (e) => {
        const { name, value } = e.target;
        setSignForm(pre => ({
            ...pre,
            [name]: value
        }));
    }

    const changeLoginForm = (e) => {
        const { name, value } = e.target;
        setLoginForm(pre => ({
            ...pre,
            [name]: value
        }));
    }

    const getLogin = () => {
        api('/user/login', 'post', loginForm)
            .then(res => console.log(res.data))
            .catch(err => console.log(err.message))
    }

    const getSign = () => {
        api('/user/sign', 'post', signForm)
            .then(res => console.log(res.data))
            .catch(err => console.log(err.message))
    }


    console.log(signForm);

    return (
        <div id='total_info'>
            {modal.sign &&
                <>
                    <div className='modal_back'>
                    </div>
                    <div className='modal_Fishing signModal'>
                        <div className='xBtn' onClick={() => setModal(false)}>X</div>
                        <h2>회원가입</h2>
                        <label>
                            <span className='subject'>*아이디</span>
                            <input type="text" name="id" id="id" onChange={changeSignForm} />
                        </label>
                        <label>
                            <span className='subject'>*비밀번호</span>
                            <input type="password" name="password" id="password" onChange={changeSignForm} />
                        </label>
                        <label>
                            <span className='subject'>*별명</span>
                            <input type="text" name="nickname" id="nickname" onChange={changeSignForm} />
                        </label>
                        <label id='emailBox'>
                            <span className='subject'>*이메일</span>
                            <div>
                                <input type="text" name="emailFront" id="emailFront" onChange={changeSignForm} />
                                <div>@</div>
                                <select name="emailBack" id="emailBack" onChange={changeSignForm}>
                                    <option value="">선택</option>
                                    <option value="naver.com">naver.com</option>
                                    <option value="google.com">google.com</option>
                                </select>
                            </div>
                        </label>
                        <button onClick={getSign}>회원가입</button>
                    </div>
                </>
            }
            {modal.login &&
                <>
                    <div className='modal_back'>
                    </div>
                    <div className='modal_Fishing loginModal'>
                        <div className='xBtn' onClick={() => setModal(false)}>X</div>
                        <h2>로그인</h2>
                        <label>
                            <span className='subject'>*아이디</span>
                            <input type="text" name="id" id="id" onChange={changeLoginForm} />
                        </label>
                        <label>
                            <span className='subject'>*비밀번호</span>
                        <input type="password" name="password" id="password" onChange={changeLoginForm} />
                        </label>
                        <button onClick={getLogin}>로그인</button>
                    </div>
                </>
            }
            <div id='privacy'>
                <div id='buttonBox'>
                    <button onClick={() => setModal(pre => ({ ...pre, login: true }))}>로그인</button>
                    <button onClick={() => setModal(pre => ({ ...pre, sign: true }))}>회원가입</button>
                </div>
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