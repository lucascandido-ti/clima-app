import React from 'react';
import Header from './header'
import Input from './from'
import Resp from './response'


const API_KEY = "5f4567f539b0412d7856feee5df6de16"

class Application extends React.Component{
  constructor(props){
    super(props)
    this.getWeather = this.getWeather.bind(this)
    this.state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }
  }
  
  getWeather = async(e) => {
    e.preventDefault();
    const city = e.target.elements.city.value.trim();
    const country = e.target.elements.country.value.trim();

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json()
    console.log(data)
    this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
    })
  }

  render(){
    return(
      <div>
        <Header />
        <Input
          getWeather={this.getWeather}
        />
        <Resp 
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    )
  }
}

export default Application;