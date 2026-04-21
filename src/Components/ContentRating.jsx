
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();

    this.state = {
      likes: 0, // states are like react variables, but they can be updated and will trigger a re-render of the component when they change
      dislikes: 0,
      totalRatings: 0,
      handleLikes: () => {
        this.setState((prevState) => ({ // need inner parenthesis to return an object from the arrow function, or else updating state will not work
          likes: prevState.likes + 1,
          totalRatings: prevState.totalRatings + 1,
        }));
      },
      handleDislikes: () => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1,
          totalRatings: prevState.totalRatings + 1,
        }));  
      }
    };
  }
  render() {
    return (
      <div className="content-rating">
        <h1>The Infinite Loop</h1>
        <p>
          A young software engineer named Alex is assigned to maintain an old
          legacy system at a tech company. The system, built decades ago, has
          countless lines of code that no one truly understands anymore. While
          debugging a seemingly minor issue, Alex accidentally stumbles upon a
          mysterious function named <span className="highlight">void reset()</span>. 
          Upon investigating further, Alex discovers that calling this function 
          sends the entire program into an endless loop, and each time the loop restarts, 
          it resets the entire system's state — from the operating environment to
          the very codebase itself.
        </p>
        <p>
          As Alex tries to fix the loop, strange things begin to happen: code
          starts to change on its own, some variables seem to have memories of
          past executions, and even system logs contain references to Alex’s own
          life, suggesting that the program somehow knows them intimately. Alex
          is faced with a choice — continue debugging to fix the loop or embrace
          the possibility that this loop isn’t just a bug, but a feature that
          connects the past, present, and future of the company’s codebase in
          ways no one can comprehend.
        </p>
        <p>
          The story plays with concepts of recursion, system resets, and the
          idea of time and memory in computing, all wrapped up in a suspenseful,
          mind-bending narrative about what it means to control a program — and
          what happens when the program seems to control you.
        </p>
        <div className="rating-buttons">
          <button className="like-button" onClick={this.state.handleLikes}>
            Like ({this.state.likes})
          </button>
          <button className="dislike-button" onClick={this.state.handleDislikes}>
            Dislike ({this.state.dislikes})
          </button>
        </div>
        <p id='total-ratings'>Total Ratings: {this.state.totalRatings}</p>
      </div>
    );
  }
}

export default ContentRating;
