import React from 'react'
import Quiz from './views/Quiz'
import { title } from './copy'

const App: React.FC = () => {
  return (
    <div className="ui container">
      <div className="ui padded grid">
        <div className="one column row">
          <div className="column">
            <h1 className="ui center aligned icon header">
              <i className="users icon grey" />
              <div className="content">{title}</div>
            </h1>
          </div>
          <Quiz />
        </div>
      </div>
    </div>
  )
}

export default App
