import React, { useState, useEffect } from 'react'
import './index.css'

type Props = {
  choices: { [key: string]: string }
  rowIndex: number
  updateRow: (answer: string[], index: number) => void
}

export const Row = ({ choices, rowIndex, updateRow }: Props) => {
  const [answer, setAnswer] = useState<string[]>([])

  useEffect(() => {
    updateRow(answer, rowIndex)
  }, [answer])

  return (
    <tr>
      {Object.entries(choices).map(([color, label]) => (
        <td key={color}>
          <div className="ui fluid labeled button">
            <div className="ui basic right pointing label">
              {answer.includes(color) && 4 - answer.indexOf(color)}
            </div>
            <button
              onClick={() => setAnswer([...answer, color])}
              disabled={answer.includes(color)}
              className="ui fluid button"
              type="button"
            >
              {label}
            </button>
          </div>
        </td>
      ))}
      <td>
        <button
          type="button"
          className="ui small compact basic icon button"
          onClick={() => setAnswer([])}
        >
          <i className="undo icon" />
        </button>
      </td>
    </tr>
  )
}

export default Row
