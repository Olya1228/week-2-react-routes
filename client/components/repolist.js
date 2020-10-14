import React, { useEffect, useState }from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom' 
import Header from './header'

const Repolist = () => {
  const {userName} = useParams()
  const [value, setValue] = useState([])

  useEffect(() => {
    axios.get(`https://api.github.com/users/${userName}/repos`).then(it => {
      setValue(it.data.map((item) => item.name))
    })
  }, [userName])
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <ul>
            {value.map((names) => {
              return (
                <li key={names}>
                  <Link to={`${userName}/${names}`}>{names}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

Repolist.propTypes = {}

export default React.memo(Repolist)
