import React from 'react'

type Props = {
  color: string
  body: string
}

export const Explanation = ({ color, body }: Props) => {
  return (
    <div className={'ui icon message ' + color}>
      <i className="question circle icon" />
      <div className="compact content">
        <div className="header">{color.charAt(0).toUpperCase() + color.slice(1)}</div>
        <p dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    </div>
  )
}

export default Explanation
