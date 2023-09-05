import add from '../../icon/add.svg'
import './CreateTaskButton.css'

function CreateTaskButton(props) {
  return (
    <div className='taskButton-container' onClick={props.onCreate}>
      <span className='taskButton-content'>
        <img src={add} alt='add'/>
        <p>
          Add new task
        </p>
      </span>
    </div>
  )
}

export {CreateTaskButton}