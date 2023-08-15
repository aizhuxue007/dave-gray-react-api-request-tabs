import React from 'react'

const Posts = () => {
  return (
    <ul>
        {posts.map(post => (
            <li className='data__item'>
                {JSON.stringify(post, null, 2)}
            </li>
        ))}
    </ul>
  )
}

export default Posts