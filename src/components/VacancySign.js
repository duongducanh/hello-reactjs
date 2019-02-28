import React, { Component } from 'react';

class VacancySign extends Component{
  render(){
    var textApp = (this.props.hasvacancy === true) ? 'Vanacy' : 'No Vanacy';

    return (
      <div>
        <h1>{textApp}</h1>
      </div>
    )
  }
}

export default VacancySign;