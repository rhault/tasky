import {ReactComponent as DoneSVG} from './done.svg';
import {ReactComponent as DeleteSVG} from './delete.svg';
import './todoIcon.css';

const iconType = {
    'done': (color, state) => <DoneSVG className={state === true ? 'done' : ''} fill={color}/>,
    'delete': (color) => <DeleteSVG className='icon-delete' fill={color}/>
}

function TodoIcon({type, color, state}){
    return(
        <span className='icon-svg'>
            {iconType[type](color,state)}
        </span> 
    )
} 

export {TodoIcon}