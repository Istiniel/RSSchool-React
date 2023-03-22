import React from 'react';
import st from './searchBar.module.scss';

class SearchBar extends React.Component<Record<string, never>, { value: string }> {
  constructor({}) {
    super({});
    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onUnload = this.onUnload.bind(this);
  }

  onUnload() {
    localStorage.setItem('searchKey', this.state.value);
  }

  componentDidMount() {
    const initialValue = localStorage.getItem('searchKey');
    this.setState({ value: initialValue || this.state.value });
    window.addEventListener('beforeunload', this.onUnload);
  }

  componentWillUnmount() {
    localStorage.setItem('searchKey', this.state.value);
    window.removeEventListener('beforeunload', this.onUnload);
  }

  handleSubmit(event: React.SyntheticEvent) {
    console.log('submitted value: ' + this.state.value);
    event.preventDefault();
  }

  handleChange(event: React.SyntheticEvent) {
    const target = event.target as HTMLInputElement;
    this.setState({ value: target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          className={st.searchBar}
          onChange={this.handleChange}
          placeholder="Search..."
        />
      </form>
    );
  }
}

export default SearchBar;
