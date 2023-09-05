function UserIcon(props) {
  /* const randomColor = Math.floor(Math.random()*16777215).toString(16); */

  return (
    <span style={{
      backgroundColor: 'blue',
      borderRadius: '50%',
      color: 'white',
      fontSize: '15px',
      padding: '4px',
      marginTop: '5px',
      textAlign: 'center',
    }}>
      {props.name.substring(0,2)}
    </span>
  )
}

export {UserIcon}