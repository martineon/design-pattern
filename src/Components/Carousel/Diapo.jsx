import React, {Component} from 'react';
import styled from 'styled-components';

const Diaporama = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  height: 100vh;
  background-color: ${ props => props.bgColor };
  color: #fff;
`;
const DiapoImg = styled.img`
  width: ${props => props.landscape? '100vw' : 'auto'};
  height: ${props => props.portrait? '100vh' : 'auto'};
  position: relative;
`;

const ImgTitleBox = styled.div`
  width: 100vw;
  height: 10vh;
  background-color: rgba(0, 0, 0, 0.55);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1000;
`

class Diapo extends Component {
  render(){
    return (
      <div>
        <Diaporama bgColor={this.props.bgColor}>
          <DiapoImg
            src={this.props.img}
            landscape={this.props.landscape}
            portrait={this.props.portrait}
            alt="img"
          />
          <ImgTitleBox>
            {this.props.children}
          </ImgTitleBox>
        </Diaporama>
      </div>
    );
  }
}

export default Diapo;
