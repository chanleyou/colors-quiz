import React, { useEffect } from 'react'
import { Chart } from 'chart.js'

type Props = {
  results: { [key: string]: number }
}

export const ResultsChart = ({ results }: Props) => {
  const canvasElement: React.RefObject<HTMLCanvasElement> = React.createRef()

  useEffect(() => {
    if (canvasElement == null || canvasElement.current == null) return
    const ctx = canvasElement.current.getContext('2d')
    const chart = new Chart(ctx, {
      type: 'polarArea',
      data: {
        labels: [
          ...Object.keys(results).map(string => string.charAt(0).toUpperCase() + string.slice(1)),
        ],
        datasets: [
          {
            data: [...Object.values(results)],
            backgroundColor: [
              'rgba(33, 150, 243, 0.6)',
              'rgba(139, 195, 74, 0.6)',
              'rgba(255, 235, 59, 0.6)',
              'rgba(244, 67, 54, 0.6)',
            ],
            borderColor: [
              'rgba(33, 150, 243, 1.0)',
              'rgba(139, 195, 74, 1.0)',
              'rgba(255, 235, 59, 1.0)',
              'rgba(244, 67, 54, 1.0)',
            ],
            borderWidth: 2,
            borderAlign: 'inner',
          },
        ],
      },
      options: {
        startAngle: 3.1415926535,
        legend: {
          display: false,
        },
        scale: {
          // display: false
          ticks: {
            stepSize: 5,
          },
        },
      },
    })

    return function cleanup() {
      chart.destroy()
    }
  }, [])

  return <canvas ref={canvasElement} />
}

export default ResultsChart
