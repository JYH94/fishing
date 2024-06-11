import { useState } from "react";
import './Board_side.css';
import { api } from "../../../model";



const Board_side = () => {

    const [articleForm, setarticleForm] = useState({
        title: '',
        contents: '',
        writer: '',
        images: [] // 이미지 파일을 저장할 배열
    });
    const userInfo = JSON.parse(sessionStorage.getItem('user'))

    console.log(userInfo);

    const changeBoardForm = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            const updatedImages = [...articleForm.images, ...Array.from(files)];
            setarticleForm(prevState => ({
                ...prevState,
                images: updatedImages
            }));
        } else {
            setarticleForm(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    }

    console.log(articleForm);

    const insertArticle = () => {
        const formData = new FormData();
        formData.append('title', articleForm.title);
        formData.append('contents', articleForm.contents);
        formData.append('writer', articleForm.writer);

        for (let i = 0; i < articleForm.images.length; i++) {
            formData.append('images', articleForm.images[i]);
        }

        api('/board/insert', 'post', formData)
            .then(res => console.log('Success!'))
            .catch(err => console.log(err.message))
            
    }


    return (
        <div className="insert_AddrBox">
            <div id="board_insertBox">
                <label htmlFor="title"><p>제목</p>
                    <input type="text" name="title" id="title" onChange={changeBoardForm} />
                </label>
                <label htmlFor="contents"><p>내용</p>
                    <textarea name="contents" id="contents"></textarea>
                </label>
                <label htmlFor=""><p>작성자</p>
                    <input type="text" name="writer" id="writer" onChange={changeBoardForm} value={userInfo && userInfo.id} readOnly/>
                </label>
                <label htmlFor=""><p>이미지 업로드</p>
                    <input type="file" multiple name="image" id="image" onChange={changeBoardForm} />
                </label>
                <button onClick={insertArticle}>등록</button>
            </div>
        </div>
    )
}

export default Board_side;