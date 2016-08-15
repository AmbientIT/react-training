import React from	'react';
import Hello from	'./hello';

export default class	Form extends React.Component {
  constructor(props)	{
    super(props);
    this.state = { name: '' };
    this.handleChange	=	this.handleChange.bind(this);
  }
  handleChange(event)	{
    this.setState({	name:	event.currentTarget.value	});
  }
  render()	{
    return	(
      <div>
        <input type="text" onChange={this.handleChange} />
        <Hello name={this.state.name} />
      </div>
    );
  }
}
