
import { useState } from 'react';
import { api } from '../model';


const Sign = ({ modal, setModal }) => {
    const [signForm, setSignForm] = useState(null);

    const requestSign = () => {
        api('/user/sign', 'post', signForm)
            .then(res => {
                alert(res.data);
                setModal(!modal);
            })
            .catch(err => console.log(err.message))
    }

    console.log(signForm);

    const duplicate = () => {
        if (!signForm || !signForm.id) {
            alert('아이디를 입력 후 중복확인 해주세요.');
        } else {
            api(`/user/duplicate?id=${signForm.id}`, 'get')
                .then(res => alert(res.data))
                .catch(err => console.log(err.message))
        }
    }

    const changeSignForm = (e) => {
        const { name, value } = e.target;
        setSignForm(pre => ({
            ...pre,
            [name]: value
        }));
    }


    return (
        <>
            <div className='modal_back'>
            </div>
            <div className='modal_Fishing signModal'>
                <div className='xBtn' onClick={() => setModal(false)}>X</div>
                <h2>회원가입</h2>
                <label htmlFor='id'>
                    <span className='subject'>*아이디<button onClick={duplicate}>중복확인</button></span>
                    <input type="text" name="id" id="id" onChange={changeSignForm} placeholder='4~15자 영어로 작성해주세요.' />
                </label>
                <label htmlFor='password'>
                    <span className='subject'>*비밀번호</span>
                    <input type="password" name="password" id="password" onChange={changeSignForm} placeholder='4~11자 영문,숫자,특수문자 2가지 이상 조합' />
                </label>
                <label htmlFor='nickname'>
                    <span className='subject'>*별명</span>
                    <input type="text" name="nickname" id="nickname" onChange={changeSignForm} placeholder='15자 미만으로 작성해주세요.' />
                </label>
                <label htmlFor='emailFront' id='emailBox'>
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
                <button onClick={requestSign}>회원가입</button>
            </div>
        </>
    )
}

export default Sign;