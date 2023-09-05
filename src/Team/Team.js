import { UserIcon } from '../UserIcon/UserIcon'
import './Team.css'

function Team() {
  return (
    <div className='team'>
      <h3>Team</h3>
      <div className='team-icon'>
        <UserIcon className='icon' name='Raul'/>
        <UserIcon className='icon' name='Raul'/>
        <UserIcon className='icon' name='Raul'/>
      </div>
    </div>
  )
}

export {Team}