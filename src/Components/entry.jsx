import React, { Component } from 'react';

class TableData extends Component {
    state = { 
        queue: 1,
        name: "Dela Cruz, Juan",
        age: 20,
        dateOfBirth: "05/09/1996",
        address: "Quezon city",
        passessment: ""
     };

    render() { 
        return (
            <table>
            <tbody>
            <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Date of Birth</th>
            <th scope="col">Address</th>
            <th scope="col">Pre-Assessment</th>
            </tr>
            <tr>  
            <td>{this.state.queue}</td>
            <td>{this.state.name}</td>
            <td>{this.state.age}</td>
            <td>{this.state.dateOfBirth}</td>
            <td>{this.state.address}</td>
            <td>{this.state.passessment}</td> 
            </tr>
            </tbody>
            </table>
        );
    }
}
 
export default TableData;