import React, { useState } from 'react';
import Course_Distance from '../Course_Distance.json';

const CourseSearchTable = () => {
    const [searchTerm, setSearchTerm] = useState( '' )

    return (
        <div className='container' style={ { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' } }>
            <input
                type='text'
                placeholder='Enter Search here'
                className='form-control'
                style={ { marginTop: 50, marginBottom: 20, width: '60%' } }
                onChange={ ( e ) => {
                    setSearchTerm( e.target.value );
                } }
            />
            <table className='table table-bordered' style={ { width: '60%' } }>
                <thead style={ { backgroundColor: "whitesmoke" } }>
                    <tr>
                        <th>Course Name</th>
                        <th>Course Zipcode</th>
                        <th>Distance to Course</th>
                    </tr>
                </thead>
                <tbody>
                    { Course_Distance.filter( ( val ) => {
                        if ( searchTerm === "" ) {
                            return val;
                        } else if (
                            val.name.toLowerCase().includes( searchTerm.toLowerCase() ) ||
                            val.zipcode.toLowerCase().includes( searchTerm.toLowerCase() )
                        ) {
                            return val;
                        }
                    } ).map( courseInfo => (
                        <tr key={ courseInfo.id }>
                            <td>{ courseInfo.name }</td>
                            <td>{ courseInfo.zipcode }</td>
                            <td>{ courseInfo.distance }</td>
                        </tr>

                    ) ) }
                </tbody>
            </table>
        </div>
    )
}

export default CourseSearchTable