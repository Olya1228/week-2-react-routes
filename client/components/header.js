import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Header = () => {
  const { userName, repositoryName } = useParams()

  return (
    <nav className="flex items-center justify-between flex-wrap bg-indigo-800 p-6">
      <div className="text-white font-bold flex flex-shrink-0 text-white mr-6" id="repository-name">
        {userName}
      </div>
      {repositoryName && (
        <Link id="go-repository-list" className="justify-between" to={`/${userName}`}>
          Go Repository List
        </Link>
      )}
      <Link id="go-back" className="justify-between" to="/">
        Go Back
      </Link>
    </nav>
  )
}

export default React.memo(Header)
