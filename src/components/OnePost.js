import React from 'react'

const OnePost = ({onePost, backToNull}) => {
  console.log(onePost)

  const handleClick = () => {
    backToNull()
  }
  return (
    <>
    <div>{onePost.title}</div>
    <button onClick={handleClick}>back</button>
    </>
  )
}

export default OnePost