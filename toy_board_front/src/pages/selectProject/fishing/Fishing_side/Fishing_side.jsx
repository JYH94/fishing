import { makeMarker } from '../MapScript';
import { api } from '../../../model';
import { useEffect, useState } from 'react';
import './Fishing_side.css';
import Fishing_side_ele from './Fishing_side_ele';
import { useLocation } from 'react-router-dom';

const Fishing_sideMenu = ({ setSelectOrInsert }) => {
    const [pointList, setPointList] = useState([]);
    const [whichPoint, setWhichPoint] = useState(null);
    const [searchForm, setSearchForm] = useState({
        column: 'pointName',
        keyword: ''
    });
    const [modal, setModal] = useState(false);

    useEffect(() => {
        api("/fishing/selectall", 'get')
            .then(res => {
                setPointList(res.data);
                makeMarker(res.data, null, setModal, setWhichPoint);
            })
            .catch(err => console.log(err.message));
    }, []);

    const searchPoint = async () => {
        api(`/fishing/selectwhere?column=${searchForm.column}&keyword=${searchForm.keyword}`, 'get')
            .then(res => {
                if (res.data.length > 0) {
                    setPointList(res.data);
                    makeMarker(res.data, null, setModal, setWhichPoint);
                } else {
                    if (window.confirm('등록된 포인트가 없습니다. 직접 포인트를 등록하시겠습니까?')) {
                        setSelectOrInsert(false);
                    } else {
                        setSelectOrInsert(true);
                    }
                }
            })
            .catch(err => console.log(err.message));
    };

    const changeKeyword = (e) => {
        setSearchForm(pre => ({
            ...pre,
            keyword: e.target.value
        }));

    };

    const changeSearchOption = (e) => {
        setSearchForm(pre => ({
            ...pre,
            column: e.target.value
        }));
    };

    const checkEnter = (e) => {
        if (e.key == 'Enter') searchPoint();
    }


    return (
        <>
            {modal && whichPoint &&
                <>
                    <div className='modal_back'>
                    </div>
                    <div className='modal_Fishing'>
                        <div className='xBtn' onClick={() => setModal(false)}>X</div>
                        <h2>{whichPoint.pointName}</h2>
                        <div>{whichPoint.pointDesc}</div>
                        <div>{whichPoint.pointAddr}</div>
                        <h3>관련게시글</h3>
                        <div></div>
                    </div>
                </>
            }

            <div className="insert_AddrBox">
                <div id='selectInsertOrSelect'>
                    <div onClick={() => setSelectOrInsert(true)}>포인트검색</div>
                    <div onClick={() => setSelectOrInsert(false)}>포인트입력</div>
                </div>
                <div id='searchBox'>
                    <select name="column" id='column' onChange={changeSearchOption}>
                        {
                            pointList.length > 0 &&
                            Object.keys(pointList[0]).slice(1).map((e, key) =>
                                <option key={key} value={e}>{e}</option>)
                        }
                    </select>
                    <input type="text" name='keyword' placeholder='등록된 포인트 기준으로 검색됩니다.' onChange={changeKeyword} onKeyDown={checkEnter} />
                    <button onClick={() => searchPoint()}>검색</button>
                </div>
                {pointList.map((point, key) => <Fishing_side_ele key={key} point={point} />)}
            </div>
        </>
    );
};

export default Fishing_sideMenu;
