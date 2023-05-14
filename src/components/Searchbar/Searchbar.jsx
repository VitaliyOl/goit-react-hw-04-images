import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import { Searchbars, Form, Button, Input } from './Searchbar.styled';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = evt => {
    this.setState({ query: evt.target.value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    this.props.onSubmit({ ...this.state });
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <Searchbars>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <BsSearch />
          </Button>

          <Input
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={query}
          />
        </Form>
      </Searchbars>
    );
  }
}
