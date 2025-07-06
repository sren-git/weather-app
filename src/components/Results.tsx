import type { Data } from "../App"

type Props = {
  data: Data
}

const Results = ({data}:Props) => {
  return (
    <>
      {data.country && 
      <>
        <div className="results-country">{data.country}</div>
        <div className="results-city">{data.cityName}</div>
        <div className="results-temp">{data.temperature} <span>°C</span></div>
        <div className="results-condition">
          <img src={data.icon} alt="icon" />
          <span>{data.conditionText}</span>
        </div>
      </>}
    </>
  )
}

export default Results