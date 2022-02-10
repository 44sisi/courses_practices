import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './StateExerciseApp.css';

class InstructorItem extends Component {
  static propTypes = {
    name: PropTypes.string,
    hobbies: PropTypes.arrayOf(PropTypes.string),
  };
  render() {
    return (
      <li>
        <h3>{this.props.name}</h3>
        <h4>Hobbies: {this.props.hobbies.join(', ')}</h4>
      </li>
    );
  }
}

class StateExerciseApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react'],
        },
        {
          name: 'Matt',
          hobbies: ['math', 'd3'],
        },
        {
          name: 'Colt',
          hobbies: ['css', 'hiking'],
        },
        {
          name: 'Elie',
          hobbies: ['music', 'es2015'],
        },
      ],
    };

    setTimeout(() => {
      // for this.setState, this needs to be preserved, so need to use () => instead of function {}
      const randomeInstructorIndex = Math.floor(
        Math.random() * this.state.instructors.length
      );
      const randomHobbyIndex = Math.floor(
        Math.random() * this.state.instructors[randomeInstructorIndex].length
      );

      //   // cannot modity the state directly, so have to make a copy of everything that we want to change
      //   const instructors = this.state.instructors.slice();
      //   instructors[randomeInstructorIndex] = Object.assign(   // set the instructor object to be a copy
      //     {},
      //     instructors[randomeInstructorIndex]
      //   );
      //   instructors[randomeInstructorIndex].hobbies =          // set the hobbies array of the instructor to be a copy
      //     instructors[randomeInstructorIndex].hobbies.slice();
      //   instructors[randomeInstructorIndex].hobbies.splice(randomHobbyIndex, 1);  // now can directly change the hobbies

      // alternatively use spread operator
      const instructors = this.state.instructors.map((instructor, i) => {
        if (i === randomeInstructorIndex) {
          const hobbies = [...instructor.hobbies];
          hobbies.splice(randomHobbyIndex, 1);
          return { ...instructor, hobbies };
        }
        return instructor;
      });
      this.setState({ instructors });
    }, 5000);
  }
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <InstructorItem
        key={index}
        name={instructor.name}
        hobbies={instructor.hobbies}
      />
    ));
    return (
      <div className='App'>
        <ul>{instructors}</ul>
      </div>
    );
  }
}

export default StateExerciseApp;
