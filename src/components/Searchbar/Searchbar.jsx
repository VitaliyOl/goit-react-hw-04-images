import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import { Searchbars, Form, Button, Input } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = evt => {
    setQuery(evt.target.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (query.trim() === '') {
      toast('Please Enter some thing :)) ');
      return;
    }

    onSubmit({ query });
    setQuery('');
  };

  return (
    <Searchbars>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <BsSearch />
        </Button>

        <Input
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={query}
        />
      </Form>
    </Searchbars>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// export default class Searchbar extends Component {
//   state = {
//     query: '',
//   };

//   handleChange = evt => {
//     this.setState({ query: evt.target.value.toLowerCase() });
//   };

//   handleSubmit = evt => {
//     evt.preventDefault();

//     if (this.state.query.trim() === '') {
//       toast('Please Enter some thing :)) ');
//       return;
//     }

//     this.props.onSubmit({ ...this.state });
//     this.setState({ query: '' });
//   };

//   render() {
//     const { query } = this.state;
//     return (
//       <Searchbars>
//         <Form onSubmit={this.handleSubmit}>
//           <Button type="submit">
//             <BsSearch />
//           </Button>

//           <Input
//             type="text"
//             autocomplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             onChange={this.handleChange}
//             value={query}
//           />
//         </Form>
//       </Searchbars>
//     );
//   }
// }
