import React, {useState} from 'react';
import "./Header.css"


let Header = ({ButtonClick }) => {
    let Clicked = () => {
        ButtonClick(1);
    }

    const time = new Date().toLocaleTimeString();
    const [timec, setcount] = useState(time);

    const updatedate = () => {
        const time = new Date().toLocaleTimeString();
        setcount(time);
    };

    // set interval function run automatic in given time iffinitaly 
    // it take a funtion and a time 

    setInterval(updatedate, 1000);
    return (
        <div className="Header">
                <div className="brand">NAMAN</div>
                <div className="time">{timec}</div>
                {/* <button onClick={Clicked}className="button btn"><h4>GetUsers</h4></button> */}
        </div>
        
    )
}
export default Header;