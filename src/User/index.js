import './User.css';
import mail from '../icon/mail.svg';
import notifications from '../icon/notifications.svg';
import settings from '../icon/settings.svg';

function User({taskAll, tasksCompleted, tasksPending}) {
  return (
    <div className='user'>
      <span className='icon'>Ra</span>
      <div className='user-info'>
          <p className='contact-name'>Raul Lloreda</p>
          <p className='contact-email'>raullloredagomez@gmail.com</p>
      </div>
      <div className='user-icon'>
        <img src={mail} alt='email'/>
        <img src={notifications} alt='notifications'/>
        <img src={settings} alt='settings'/>
      </div>
      <div className='task-progress'>progress</div>
      <div className='task-info'>
        <p className='number'>{tasksPending}</p>
        <p className='title'>To do</p>
        <p className='subtitle'>task</p>
      </div>
      <div className='task-info'>
        <p className='number'>{tasksCompleted}</p>
        <p className='title'>Completed</p>
        <p className='subtitle'>task</p>
      </div>
      <div className='task-info'>
        <p className='number'>{taskAll}</p>
        <p className='title'>All</p>
        <p className='subtitle'>Completed</p>
      </div>
    </div>
  );
}

export {User};
