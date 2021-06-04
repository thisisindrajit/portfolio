import React , { Component } from "react";
import Skillitem from "./Skillitem";

export default class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage:[0,0,0,0,0,0,0,0,0,0]
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
        
            this.setState({percentage: [70,75,80,70,60,65,60,60,45,50]})
          }, //callback
      options
    );
    //Observ the `loadingRef`
    this.observer.observe(this.skillsRef);
  }

  render() {
    return (
      <div id="skills" ref={skillsRef => (this.skillsRef = skillsRef)}> 
      {/* ref can be initialized like ref={skillsRef => (this.skillsRef = skillsRef)} also or using this.skillsRef = React.createRef() 
        and then using it like <div id="skills" ref={this.skillsRef}. See the documentation for more information.*/}
        <div className="tag skill-tag">Top Skills</div>

        🌟 My Favourites

        <Skillitem skill="JavaScript🌟" percentage={this.state.percentage[0]} />
        <Skillitem skill="ReactJS🌟" percentage={this.state.percentage[1]} />
        <Skillitem skill="CSS🌟" percentage={this.state.percentage[2]} />
        <Skillitem skill="HTML🌟" percentage={this.state.percentage[3]} />
        <Skillitem skill=".NET core🌟" percentage={this.state.percentage[4]} /> 
        <Skillitem skill="Java🌟" percentage={this.state.percentage[5]} /> 
        <Skillitem skill="Python" percentage={this.state.percentage[6]} />
        
        
        <div className="tag skill-tag">Other Skills</div>
        <Skillitem skill="C++" percentage={this.state.percentage[7]} />
        <Skillitem skill="PHP" percentage={this.state.percentage[8]} />
        <Skillitem skill="Deep Learning" percentage={this.state.percentage[9]} />
      </div>
    );
  }
}
