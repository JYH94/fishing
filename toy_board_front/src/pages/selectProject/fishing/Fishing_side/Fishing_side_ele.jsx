import { whichPoint } from '../MapScript'
import './Fishing_side_ele.css'


const Fishing_side_ele = ({point}) => {
    
    const selectWhichPoint = () => {
        whichPoint(point);
    }

    return (
        <div className='point_ele' onClick={selectWhichPoint}>
            <div>포인트명</div>
            <div>설명</div>
            <div>주소</div>
            <div>{point.pointName}</div>
            <div>{point.pointDesc}</div>
            <div>{point.pointAddr}</div>
        </div>
    )
}

export default Fishing_side_ele;