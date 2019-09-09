import React, { Component } from 'react'

export default class AnExaminationResourceAllocationDemographicsCapacityUtilizationMontgomeryCountyPublicSchools extends Component {
    render() {
        return (
            // Make pdf wrapper with padding on top for mobile and a different height as well
            <div className="pdf-container">
                <iframe 
                    src="https://drive.google.com/file/d/11frnIUAbvjRojl2NURU4HKox25zTIcCp/preview" 
                    title="An Examination of Resource Allocation, Demographics and Capacity Utilization in Montgomery County Public Schools"
                    frameborder="0" 
                    height="800px" 
                    width="100%">
                    <p>
                        This PDF could not be displayed, please download or view it 
                        <a href="https://drive.google.com/file/d/11frnIUAbvjRojl2NURU4HKox25zTIcCp/">
                            here.
                        </a>
                    </p>
                </iframe>
            </div>
        )
    }
}
