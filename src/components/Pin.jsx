import React from 'react'

const Pin = (props) => {
  return (
    <div style={{...styles.pin,...styles[props.size]}}>

    </div>
  )
}
const styles = {
    pin:{
        margin: '15px 10px',
        padding: 0,
        borderRadius: '16px',
        backgroundColor: 'red',
    },
    small:{
        gridRowEnd: 'span 26'
    },
    medium:{
        gridRowEnd: 'span 33'
    },
    large:{
        gridRowEnd: 'span 45'        
    }
}

export default Pin