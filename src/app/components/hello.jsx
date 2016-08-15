import React, { Component } from 'react';
import classNames from 'classnames';

export default class Hello extends Component {
  static propTypes = {
    age: React.PropTypes.number,
    name: React.PropTypes.string,
  }

  static defaultProp = {
    age: '14',
    name: 'jonsnow',
  };

  constructor(props)	{
    super(props);
    this.state	=	{	count:	0	};
    console.log('constructor');
  }

  componentWillMount()	{
    console.log('willMount');
    let	mode;
    if	(this.props.age	>	70)	{
      mode	=	'old';
    }	else	if	(this.props.age	<	18)	{
      mode	=	'young';
    }	else	{
      mode	=	'middle';
    }
    this.setState({	mode });
  }

  componentDidMount()	{
    console.log('did	mount.');
  }

  componentWillReceiveProps(props, state) {
    console.log('willreceive', props, state);
  }

  shouldComponentUpdate(props, state) {
    console.log('will update', props, state);
    return true;
  }
  componentWillUpdate()	{
    console.log('will update');
  }

  componentDidUpdate() {
    console.log('did update');
  }

  componentWillUnmount() {
    console.log('will unmount');
  }

  render() {
    console.log('render');
    return (
      <div className={classNames('person',	this.state.mode)}>Hello {this.props.name}</div>
    );
  }
}
