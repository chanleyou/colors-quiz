import React from 'react'
import { instructions } from '../../copy'

export const Instructions = () => (
  <div className="ui icon info attached message">
    <i className="question circle icon" />
    <div className="compact content">
      <div className="header">{instructions.header}</div>
      <p dangerouslySetInnerHTML={{ __html: instructions.body }} />
      <p dangerouslySetInnerHTML={{ __html: instructions.reset }} />
    </div>
  </div>
)

export default Instructions
