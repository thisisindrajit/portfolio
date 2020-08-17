import React , { Component } from "react";
import Skillitem from "./Skillitem";

export default class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage:[0,0,0,0,0]
    };
  }

  componentDidMount() {
    // Options
    var options = {
      root: null, // Page as root
      rootMargin: "0px",
      threshold: 0.3,
    };
    // Create an observer
    this.observer = new IntersectionObserver(
        (entries) => {
            // If intersectionRatio is 0, the target is out of view
            // and we do not need to do anything.
            if (entries[0].intersectionRatio <= 0) return;
        
            this.setState({percentage: [80,60,70,50,40]})
          }, //callback
      options
    );
    //Observ the `loadingRef`
    this.observer.observe(this.skillsRef);
  }

  render() {
    return (
      <div id="skills" ref={skillsRef => (this.skillsRef = skillsRef)}>
        <div className="tag skill-tag">My Top 5 Skills</div>
        <Skillitem skill="CSS" percentage={this.state.percentage[0]} />
        <Skillitem skill="HTML" percentage={this.state.percentage[1]} />
        <Skillitem skill="JavaScript" percentage={this.state.percentage[2]} />
        <Skillitem skill="React" percentage={this.state.percentage[3]} />
        <Skillitem skill="PHP" percentage={this.state.percentage[4]} />
      </div>
    );
  }
}
