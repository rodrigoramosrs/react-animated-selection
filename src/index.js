import React, { Component } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import styled, { css } from "styled-components";
import './styles.css';

const MainContainer = styled.div`
  
`;

class ReactAnimatedSelection extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
  }
  render(){
    return (
      <div>
        Component goes here
        
      </div>
    );
  }
  
};

ReactAnimatedSelection.propTypes = {
  children: PropTypes.any,
  fullScreen: PropTypes.bool,
  allowScrollbar: PropTypes.bool
};

export default ReactAnimatedSelection;
