import React from 'react'
import Pin from './Pin'

const PintrestLayout = () => {
  return (
    <div style={styles.pin_container}>
        <Pin size="small"/>
        <Pin size="small"/>
        <Pin size="medium"/>
        <Pin size="large"/>
        <Pin size="medium"/>
        <Pin size="large"/>
        <Pin size="small"/>
        <Pin size="medium"/>
        <Pin size="large"/>
        <Pin size="small"/>
        <Pin size="small"/>
        <Pin size="medium"/>
        <Pin size="small"/>
        <Pin size="medium"/>
        <Pin size="large"/>
        <Pin size="large"/>
        <Pin size="medium"/>
        <Pin size="large"/>
    </div>
  )
}
const styles = {
    pin_container: {
        margin: 0,
        padding: 0,
        width: '80vw',
        backgroundColor: '#000',
        display: 'grid',
        placeContent: 'center',
        left:'50%',
        transform: 'translate(-50%, -50 %)',
        position: 'absolute',
        gridTemplateColumns:'repeat(auto-fill, 250px)',
        gridAutoRows: '10px'
    }
}

export default PintrestLayout