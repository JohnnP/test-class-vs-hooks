import { Component, ReactNode } from 'react';
import Display from './Display';

const set = new Set();

type IProps = {
}

type IState = {
  names: Array<string>
}

class ControllerBis extends Component<IProps, IState> {
  
  constructor(props: IProps) {
    super(props);
    this.state = {
      names: []
    };
    this.addNames = this.addNames.bind(this);
  }

  addNames(): void {
    const {names} = this.state;
    const newNames = [...names];
    newNames.push('anotherName');
    this.setState({names: newNames});
  }

  clearNames = (): void =>  {
    this.setState({names: []});  
  }

  render(): ReactNode {
    set.add(this.clearNames);
    console.log(set);
    const {names} = this.state;
    return (
      <div>
        <button onClick={this.addNames}>Button</button>
        <Display names={names} />
        <button onClick={this.clearNames}>Clear</button>
      </div>
    );
  }
}

export default ControllerBis;