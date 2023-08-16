import React from 'react'

const ContentList = ({ content }) => {
  return (
    <ul>
          {content.map(item => (
            <li key={item.id} className='data__item'>{JSON.stringify(item, null, 2)}</li>
          ))}
    </ul>
  )
}

export default ContentList