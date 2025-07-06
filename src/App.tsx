import Title from "./components/Title"
import Form from "./components/Form"
import Results from "./components/Results"
import { useState } from "react"
import Loading from "./components/Loading"

export type Data = {
  country:string,
  cityName:string,
  temperature:string,
  conditionText:string,
  icon:string,
}

const App = () => {
  const [data, setData] = useState<Data>({
    country:"",
    cityName:"",
    temperature:"",
    conditionText:"",
    icon:"",
  })
  const [loading, setLoading] = useState<boolean>(false)

  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form setData={setData} setLoading={setLoading}/>
        {loading ? <Loading /> : <Results data={data}/>}
      </div>
    </div>
  )
}

export default App
