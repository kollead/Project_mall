import React from 'react'
import {Collapse, Checkbox} from 'antd'

const {Panel} = Collapse;

function CheckBox(props) {

    const [Checked, setChecked] = useState([])
    const handleToggle = (value) => {
        //누른 것의 index를 구하고
        const currentIndex = Checked.indexOf(value) //부존재 시 -1
        //전체 Checked된 State에서 현재 누른 Checkbox가 이미 있다면

        //빼주고 

        //State 넣어준다
    }

    const renderCheckboxLists = () => props.list && props.list.map((value, index)=>(
        <React.Fragment key={index}>
            <Checkbox onChange={()=>handleToggle(value._id)}/>
                <span>{value.name}</span>
        </React.Fragment>
    ))
    
    return (
        <div>
            <Collapse defaultActiveKey={['1']} >
                <Panel header="Continents" key="1">
                    {renderCheckboxLists()}
                </Panel>
            </Collapse>
        </div>
    )
}

export default CheckBox
