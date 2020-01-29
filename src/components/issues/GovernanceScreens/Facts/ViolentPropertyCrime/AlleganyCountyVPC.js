import React, { Component } from 'react'

export default class AlleganyCountyVPC extends Component {
    render() {
        return (
        <div className="pdf-container">
            <iframe 
                src="https://drive.google.com/file/d/1COJN-9M_WPdzRnb_l_6hHKahs_iL0Ccx/preview" 
                title="Allegany County VPC"
                frameborder="0" 
                height="800px" 
                width="100%">
                <p>
                    This PDF could not be displayed, please download or view it 
                    <a href="https://drive.google.com/file/d/1COJN-9M_WPdzRnb_l_6hHKahs_iL0Ccx">
                        here.
                    </a>
                </p>
            </iframe>
        </div>
        )
    }
}
