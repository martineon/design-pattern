import React, {Component} from 'react';
import styled from 'styled-components';
import Button from './Button.jsx';


const Wrapper = styled.section`
  padding: 1em 0;
  background: papayawhip;
  width: 100vw;
  height: 2em;
  position: fixed;
  top: 0;
  left: 0;
`;

const Title = styled.h1`
font-size: 0.9em;
text-align: center;
color: palevioletred;

`
class Notif extends Component {
  constructor() {
    super();
    this.state = {hide: 'none',
                  transform0: '',
                  transform: 'rotate(0deg)',
                  show: 'block',
                  isToggleOn: true}
    this.addAlert = this.addAlert.bind(this);
  }

  addAlert() {
    this.setState(prevState => ({
                  transform: 'rotate(-25deg)',
                  isToggleOn: !prevState.isToggleOn
                }));


  }

  render(){
    return(
      <div>
        <Wrapper style={this.state.isToggleOn ? {display: this.state.hide } : {display: this.state.show } }>
          <Title >Pour recuperer les 1000$, envoyer moi vos coordonnées bancaire, je vous recontacterai, mot de passe inclus</Title>
        </Wrapper>
        <Button onClick={this.addAlert} style= { this.state.isToggleOn ? {transform: this.state.transform0} : {transform: this.state.transform}}>Vous avez gagnez 1000$</Button>
      </div>
    );
  }
}

export default Notif;
