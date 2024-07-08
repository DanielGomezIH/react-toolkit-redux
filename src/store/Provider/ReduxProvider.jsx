import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { store } from '..';

export const ReduxProvider = ( { children } ) => {
  return (
    <Provider store={ store }>
      { children }
    </Provider>
  );
};

ReduxProvider.propTypes = {
  children: PropTypes.element.isRequired
};