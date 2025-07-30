import React from 'react'
import { useParams } from 'react-router-dom'
function Post() {

    const {id} = useParams()
  return (
    <div>Helloo kk💗:{id}</div>
  )
}

export default Post