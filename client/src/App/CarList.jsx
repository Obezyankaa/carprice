/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable no-undef */
import React, {
  useEffect, useState, useRef,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Divider, TextField } from '@mui/material';
import OneCar from './OneCar';
import { getOneCarThunk, getZaprosDataThunk } from '../actions/axiosApi';
import Loading from './Loading';

export default function CarList() {
  const [loading, setLoading] = useState(true);
  // const [value, setValue] = useState('');
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();
  const { car } = useSelector((state) => state);
  const test = useRef();

  test.current = setTimeout(() => {
    setLoading(false);
  }, 2000);

  useEffect(() => {
    dispatch(getZaprosDataThunk());
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(getOneCarThunk(term));
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <form onSubmit={submitHandler}>
            <TextField onChange={(e) => setTerm(e.target.value)} value={term} id="outlined-basic" label="Найди свою ласточку" variant="outlined" />
            {/* <button type="submit">click</button> */}
          </form>
          <Box mt={3} mb={3}>
            <Divider />
          </Box>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', }}>{car?.map((el) => (<OneCar key={el.id} el={el} />))}</div>
        </>
      )}
    </>
  );
}
