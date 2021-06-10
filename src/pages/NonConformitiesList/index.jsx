import React, { useEffect, useState } from 'react';

const NonConformitiesList = () => {
    const [ncrList, setNcrList] = useState([]);

    useEffect(() => {
        //fetchApi
        //setstate ncrlist
    });

    return (
        <div>
            <h1>
                NonConformities
            </h1>
            <table>
                <tr>
                    <th>
                        Id
                    </th>
                    <th>
                        Description
                    </th>
                    <th>
                        Ocurrence Date
                    </th>
                </tr>
                {ncrList.map(ncr => {
                    return <tr>
                        <td>
                            {ncr.id}
                        </td>
                        <td>
                            {ncr.description}
                        </td>
                        <td>
                            {ncr.ocurrenceDate}
                        </td>
                    </tr>
                })}
            </table>
        </div>
    );
}

export default NonConformitiesList;
