
import { useState } from 'react';
import { api } from '../model';

const Login = ({ modal, setModal, setUserInfo }) => {

    const [loginForm, setLoginForm] = useState(null);


    const changeLoginForm = (e) => {
        const { name, value } = e.target;
        setLoginForm(pre => ({
            ...pre,
            [name]: value
        }));
    }

    const requestLogin = () => {
        api('/user/login', 'post', loginForm)
            .then(res => {
                if (res.data.id == undefined) {
                    alert(res.data);
                } else {
                    console.log(res.data)
                    setUserInfo({
                        id: res.data.id,
                        nickname: res.data.nickname,
                        teamList: res.data.teamList,
                        login: true
                    })
                    sessionStorage.setItem('user', JSON.stringify({
                        id: res.data.id,
                        nickname: res.data.nickname,
                        teamList: res.data.teamList,
                        login: true
                    }))
                    setModal(!modal);
                    alert('로그인 성공!')
                }
            })
            .catch(err => console.log(err.message))
    }


    return (
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
                <button onClick={requestLogin}>로그인</button>
            </div>
        </>
    )
}

export default Login;