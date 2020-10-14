import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import axios from 'axios'
import Header from './header'

const Text = () => {
  const [value, setValue] = useState()
  const { userName, repositoryName } = useParams()


  useEffect(() => {
    axios.get(`https://raw.githubusercontent.com/${userName}/${repositoryName}/master/README.md`).then((it) => {
      setValue(it.data)
    },[userName, repositoryName])
  })
  return (
    <div>
      <Header />
      <div id="description">
        <ReactMarkdown source={value} />
      </div>          
    </div>
  )
}

Text.propTypes = {}

export default React.memo(Text)
