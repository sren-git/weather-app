import { useRef, type SetStateAction } from "react"
import type { Data } from "../App"

type Props = {
  setData: React.Dispatch<React.SetStateAction<Data>>
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const Form = ({setData, setLoading}:Props) => {
  const cityRef = useRef<HTMLInputElement>(null)
  const getWeather = (e:React.FormEvent<HTMLFormElement>) => {
    const city = cityRef.current?.value
    if (!city) return
    e.preventDefault()
    setLoading(true)
    fetch(`https://api.weatherapi.com/v1/current.json?key=4675ee0acf7e4a2eacd130626250507&q=${city}&aqi=no`)
    .then(res => res.json())
    .then(data => {
      setData({
        country:data.location.country,
        cityName:data.location.name,
        temperature:data.current.temp_c,
        conditionText:data.current.condition.text,
        icon:data.current.condition.icon
      })
      setLoading(false)
    })
  }

  return (
    <form onSubmit={getWeather}>
      <input type="text" name="city" placeholder="都市名" ref={cityRef} />
      <button type="submit">Get Weather</button>
    </form>
  )
}

export default Form