import React from 'react'

const Table = ({ content }) => {
    const headerRow = content ? Object.keys(content[0]) : null;
    const listOfValues = content ? content.map(item => Object.values(item)) : null;
  return (
    <div className='table__wrapper'>
        {content ? 
                (<table border="1">
                    <thead> 
                        <tr>
                            {headerRow.map((th, index) => (
                                <th key={index}>{th}</th>
                            ))}
                        </tr>
                    </thead>
                   <tbody>
                   {listOfValues.map((tr, index) => (
                    <tr key={index}>{tr.map((td, index)=> (
                        <td key={index}>{JSON.stringify(td, null, 2)}</td>
                    ))}</tr>
                        
                    ))}
                   </tbody>
                    
                </table>) :
                (<></>)
        }
    </div>
  )
}

export default Table