import React from 'react'
import {Icon} from 'antd';

function Footer() {
    return (
        <div style={{
            height: '40px', display: 'flex',
            background: '#e1dfdd', 
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'10px'

        }}>
           <h2>Ingredients Cake Shop  <Icon type="copyright" /></h2>
        </div>
    )
}

export default Footer
