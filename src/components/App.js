import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

fetchPets = () => {
    if (this.state.filters.type === 'all') {
      fetch("/api/pets").then(res => res.json()).then(json => {
        console.log(json)
        
        this.setState({
          pets: json
        })
      })
    } else {
      fetch("/api/pets?type=" + this.state.filters.type).then(res => res.json).then(json =>this.setState({
        pets: json
      }))
    }
  }
  
  
  
   onChangeType = value => {
    this.setState({
      type: value
    })
  }
  
  
  
  
  onAdoptPet = (id) => {
    this.state.pets.find(pet => {
      
      if (pet.id === id) {
        
        pet.isAdopted = true
        
      }
    })
  }
  
  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters />
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
