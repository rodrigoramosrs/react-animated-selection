import React, { Component } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import styled, { css } from "styled-components";
import "./styles.css";

// const Root = styled.div`
//   height: 344px;
//   position: relative;
//   display: flex;
//   margin: auto;
//   cursor: pointer;

//   margin: auto;
//   width: 100%;
//   max-width: 450px;

// `;

// const MainContainer = styled.div`
//   display: flex;
//   position: absolute;
//   height: 85px;
//   transform: translateX(-50%);
//   transition: all 0.15s 0.15s;
//   z-index: 1000;

//   ${props =>
//     props.open &&
//     css`
//       transition: all 0.25s;
//       width: 100%;
//       height: 100%;
//       left: 50%;
//       top: 50%;
//       -webkit-transform: translateX(-50%) translateY(-50%);
//       transform: translateX(-50%) translateY(-50%);
//       z-index: 10000;
//     `}
// `;
// const MainContent = styled.div`
//   background: #36f;
//   margin: auto;
//   width: 90%;
//   height: 80%;
//   border-radius: 2px;
//   -webkit-user-select: none;
//   -moz-user-select: none;
//   -ms-user-select: none;
//   user-select: none;
//   position: relative;
//   transition: all 0.15s 0.15s, background 0.15s;

//   &:hover {
//     box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.75);
//     background: #668cff;
//   }

//   ${props =>
//     props.open &&
//     css`
//       transition: all 0.25s;
//       background: #3b3;
//       height: 80%;
//       width: 80%;
//       display: flex;
//       flex-direction: column;
//       padding: 20px;
//       box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
//       &:hover {
//         cursor: initial;
//       }
//     `}

//   /* ${props =>
//     !props.open &&
//     css`
//       cursor: pointer;
//     `} */
// `;

// const Title = styled.span`
//   transition: all 0.15s 0.15s;
//   width: 100%;
//   text-align: center;
//   line-height: 70px;
//   white-space: nowrap;
//   text-transform: uppercase;

//   ${props =>
//     props.open &&
//     css`
//       transition: all 0.15s 0.25s;
//       font-size: 24px;
//       line-height: 50px;
//     `}
// `;

// const Content = styled.div`
//   transition: all 0.15s, max-height 0s;
//   opacity: 0;
//   pointer-events: none;
//   overflow: hidden;
//   max-height: 0;

//   ${props =>
//     props.open &&
//     css`
//       flex: 1;
//       transition: all 0.25s 0.4s, max-height 0s 0.4s, flex 0s 0.4s;
//       opacity: 1;
//       margin-top: 10px;
//       pointer-events: initial;
//       width: 100%;
//       max-height: 1000000px;
//       overflow: hidden;
//     `}
// `;
class ReactAnimatedSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open,
      key: Math.random()
    };
  }
  render() {
    return (
      <div className="cs-app">
        <div className="cs-tiles">
          <input type="checkbox" id={"animated-" + this.state.key} />
          <div className="cs-tile-container">
            <div className="cs-tile">
              <label className="cs-open" htmlFor={"animated-" + this.state.key} />
              <label className="cs-close" htmlFor={"animated-" + this.state.key}>
                +
              </label>
              <div className="cs-text">{this.props.title}</div>
              <div className="cs-content">{this.props.children}</div>
            </div>
          </div>
        </div>
      </div>

      // <Root>
      //   <MainContainer open={this.state.open}>
      //     <MainContent
      //       onClick={() => this.setState({ open: !this.state.open })}
      //       open={this.state.open}
      //     >
      //       <label className="cs-open" />
      //       <label className="cs-close">+</label>
      //       <Title open={this.state.open}>
      //         {this.state.open
      //           ? this.props.title + " - open"
      //           : this.props.title + " - closed"}{" "}
      //       </Title>
      //       <Content open={this.state.open}>{this.props.content}</Content>
      //     </MainContent>
      //   </MainContainer>
      // </Root>
    );
  }
}

ReactAnimatedSelection.propTypes = {
  children: PropTypes.any,
 
};

export default ReactAnimatedSelection;
