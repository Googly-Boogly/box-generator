import React, { useState } from  'react';
import StyledBox from './box'
    
const CreateBoxx = (props) => {
    
    const [boxcolor, setboxcolor] = useState("");
    const [boxheight, setboxheight] = useState("");
    const [boxes, setboxes] = useState([]);
    // console.log(boxes)
    const createbox2 = (e) => {
    e.preventDefault();
        console.log(boxes)
        let temp = boxes
        temp.push([boxcolor, boxheight])
        console.log(typeof temp)
        setboxes(temp)
        setboxheight(boxheight)
        // setboxheight("")
        // setboxcolor("")
    };

    return (
        <>

        <div className='bodyy'>
            <div>
            <form onSubmit={ createbox2 }>
                <div>
                    <label>Color: </label>
                    <input type="text" onChange={ (e) => setboxcolor(e.target.value) } />
                </div>
                <div>
                    <label>Height: </label>
                    <input type="text" onChange={ (e) => setboxheight(e.target.value) } />
                </div>
                <input type="submit" value="Create Box" />
            </form>
        </div>
<div className="flex">
        { boxes.map( (item, i) => 
        <div className='box1' key={i}>
                     <StyledBox key={i} bgColor={item[0]} height={item[1]} width={item[1]}/></div>
                    )}
</div>
    </div></>);
}
export default CreateBoxx;