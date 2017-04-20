import React, {Component} from 'react';
import styled from 'styled-components';
import Diapo from './Diapo.jsx';
import Notif from '../Notif/Notif.jsx';


const NavLeft = styled.div`
  width: 40px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.55);
  position: fixed;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  left: 0;
  top: calc(50vh - 15px)
  z-index: 1000;
`;
const NavRight = styled.div`
  width: 40px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.55);
  position: fixed;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  right: 0;
  top: calc(50vh - 15px);
  z-index: 1000;
`;

const CarouselWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
const DiapoWrapper = styled.div`
  height: 100vh;
  display: flex;
  position: relative;
  flex-direction: row;
  left: ${props => props.left}vw;
  transition: left 1s ease;
`;
class Carousel extends Component {

  constructor(){
    super();
    this.state = {
      left: 0,
      width: null
    }
  }

  nextDiapo = () => {
    this.setState({left: this.state.left - 100}, ()=>{

      }
    );
  }

  prevDiapo = () => {
    this.setState({left: this.state.left + 100}, () => {
      if (this.state.left > 0) {
        this.setState({left: 0})
      }
    });
  }

  render(){
    console.log(this.state.width);
    return (
      <CarouselWrapper>
        <DiapoWrapper left={this.state.left}>
          <Diapo
            bgColor="black"
            img="http://unsplash.com/photos/5WUUt2NdJWI/download?force=true"
            portrait
          >
            Will u marry me??
          </Diapo>
          <Diapo
            bgColor="black"
            img="http://unsplash.com/photos/U5yxLsCGXYQ/download?force=true"
            landscape
          >
            <Notif/>
          </Diapo>
          <Diapo
            bgColor="black"
            img="http://unsplash.com/photos/sPfZ8rUhvkY/download?force=true"
            landscape
          >
            Sunset
          </Diapo>
        </DiapoWrapper>
        <NavLeft onClick={this.prevDiapo}> &larr; </NavLeft>
        <NavRight onClick={this.nextDiapo}> &rarr; </NavRight>
      </CarouselWrapper>
    );

  }
}

export default Carousel;
