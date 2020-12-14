import React from 'react';

import {
    Button,
    Title,
    LikeButton
  } from "./style";

export default class BotaoLike extends React.Component {

    state = {
        like: 0,
        dislike: 0,
        likeActive: false,
        dislikeActive: false
    }

    setDislike() {
      this.setState({
        dislikeActive: !this.state.dislikeActive,
        dislike: this.state.dislikeActive
          ? this.state.dislike - 1
          : this.state.dislike + 1
      });
      }
      
    setLike() {
      this.setState({
        likeActive: !this.state.likeActive,
        like: this.state.likeActive ? this.state.like - 1 : this.state.like + 1
      });
    }

    handleLike() {
      if (this.state.dislikeActive) {
        this.setLike();
        this.setDislike();
      }
      this.setLike();
    }
      
    handleDislike() {
      if (this.state.likeActive) {
        this.setDislike();
        this.setLike();
      }
      this.setDislike();
    }

    render() {
        return (
          <>
            <LikeButton
                onClick={() => this.handleLike()}
                className={({ ["active"]: this.state.likeActive })}
            >LIKE
                {this.state.like}
            </LikeButton>
            <LikeButton
                className={({ ["active"]: this.state.dislikeActive })}
                onClick={() => this.handleDislike()}
            >DISLIKE
                {this.state.dislike}
            </LikeButton>
          </>  
        );
    }
}