import { GET_ZAPROS } from '../constants/actions';

// eslint-disable-next-line default-param-last
const carReduser = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ZAPROS:
      return payload;
    default:
      return state;
  }
};

export default carReduser;
