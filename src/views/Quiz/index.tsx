import React, { useState } from 'react'
import { assessment } from '../../constants'
import Instructions from '../../components/Instructions'
import Explanation from '../../components/Explanation'
import Row from '../../components/Row'
import ResultsChart from '../../components/ResultsChart'
import { shuffleObjectKeys } from '../../utils/'

const shuffledAssessment = assessment.map(shuffleObjectKeys)

export const Quiz = () => {
  const [answers, setAnswers] = useState<string[][]>([])
  const [showResults, setShowResults] = useState(false)

  const updateRow = (answer: string[], index: number) => {
    const updatedAnswers = [...answers]
    updatedAnswers[index] = answer
    setAnswers(updatedAnswers)
  }

  const results = () => {
    const output: { [key: string]: number } = {
      blue: 0,
      green: 0,
      yellow: 0,
      red: 0,
    }

    answers.forEach(answer => {
      if (answer != null && answer.length === 4) {
        answer.forEach((color, index) => {
          output[color] = output[color] + (4 - index)
        })
      }
    })

    return output
  }

  const canShowResults = () => {
    return Object.values(results()).reduce((a, b) => a + b) === assessment.length * 10
  }

  return (
    <div className="column">
      {!showResults && (
        <>
          <Instructions />
          <div className="ui attached segment">
            <table className="ui very basic table">
              <tbody>
                {shuffledAssessment.map((choices, index) => (
                  <Row key={choices.red} choices={choices} rowIndex={index} updateRow={updateRow} />
                ))}
              </tbody>
            </table>
            <div style={{ textAlign: 'center' }}>
              <button
                className="ui large labeled icon primary button"
                disabled={!canShowResults()}
                onClick={() => setShowResults(!showResults)}
              >
                <i className="check icon" />
                All Done
              </button>
            </div>
          </div>
        </>
      )}
      {showResults && (
        <>
          <Instructions />
          <div className="ui attached segment">
            <div className="ui stackable grid">
              <div className="two column row">
                <div className="column">
                  <Explanation color="blue" body="" />
                </div>
                <div className="column">
                  <Explanation color="green" body="" />
                </div>
              </div>
            </div>
            <div style={{ padding: '2em 0' }}>
              <ResultsChart results={results()} />
            </div>
            <div className="ui stackable grid">
              <div className="two column row">
                <div className="column">
                  <Explanation color="red" body="" />
                </div>
                <div className="column">
                  <Explanation color="yellow" body="" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Quiz
