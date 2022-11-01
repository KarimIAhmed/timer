import React, {Component,useState,useEffect} from 'react'

export default function Clock(){
    let currHour=new Date().getHours();
    let currMinute=new Date().getMinutes();
    let currSecond=new Date().getSeconds();
    const [hours,setHours] = useState(currHour);
    const [minutes,setMinutes] =useState(currMinute);
    const [seconds, setSeconds] = useState(currSecond);
    const [isActive, setIsActive] = useState(true);
    const [edit,setEdit] = useState(false);

    let input= () => <input type="text"/>
    function toggle() {
        setIsActive(!isActive);
        return form();

    }
    function form(){
        return (
            <div>
                <input name="hour" type="number" onKeyDown= "if (event.keyCode == 13) (e)=> setHours(e.target.valueAsNumber)" />
                <input name="minute" type="number" onKeyDown= "if (event.keyCode == 13) (e)=> setMinutes(e.target.valueAsNumber)" />
                <input name="second" type="number" onKeyDown= "if (event.keyCode == 13) (e)=> setSeconds(e.target.valueAsNumber)" />
            </div>
        )
    }

    function text(){
        if(currHour>12) return 'PM';
        else return 'AM';
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            if(seconds>59) setSeconds(0)
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
           // <input type="text" id="name"/>
            }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            if(minutes>59) setMinutes(0)
            interval = setInterval(() => {
                setMinutes(minutes => minutes + 1);
            }, 60000);
        } else if (!isActive && minutes !== 0) {
            clearInterval(interval);
            // <input type="text" id="name"/>
        }
        return () => clearInterval(interval);
    }, [isActive, minutes]);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            if(hours>23) setHours(0)
            interval = setInterval(() => {
                setHours(hours => hours + 1);
            }, 3600000);
        } else if (!isActive && hours !== 0) {
            clearInterval(interval);
           // <input type="text" id="name"/>
        }
        return () => clearInterval(interval);
    }, [isActive, hours]);








    return(
        <div className="clock" style={{border:'5px solid',borderBlockColor:'blue'}}>
            <h1 onClick={toggle}>{hours}:{minutes}:{seconds} {text()}</h1>
        </div>)
}



// class Clock extends Component{
//    state={}
//     render(){
//         return (
//             <div className="App" style={{border:'5px solid',borderBlockColor:'blue'}}>
//
//             </div>
//         )
//     }
// }
//
// export default Clock