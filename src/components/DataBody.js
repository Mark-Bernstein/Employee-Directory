import React from "react";

function DataBody(props) {
    let newDateOfBirth = (dob) => {
        let date = dob;
        let replaced = date.split('T');
        let newDate = replaced[0];
        return newDate;
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Date of Birth</th>
                </tr>
            </thead>
            <tbody>
                {props.result.map(result => (
                    <tr key={result.login.uuid}>
                        <td>
                            <img alt={result.name.first} className="img-fluid" src={result.picture.thumbnail} />
                        </td>
                        <td>{result.name.first} {result.name.last}</td>
                        <td>{result.phone}</td>
                        <td>{result.email} </td>
                        <td>{newDateOfBirth(result.dob.date)}</td>  
                    </tr>
                ))}
            </tbody >
        </table>

    )
}

export default DataBody;