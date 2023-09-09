import { Button, ButtonGroup, Typography } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../app/store/ConfigureStore";
import { decrement, increment } from "./CounterSlice";

export default function ContactPage() {
  const { data, title } = useAppSelector(state => state.counter);
  const dispatch = useAppDispatch();
  return (
    <>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="h5">The data is: {data}</Typography>
      <ButtonGroup>
        <Button onClick={() => dispatch(increment(1))} variant='contained' color='primary'>INCREMENT</Button>
        <Button onClick={() => dispatch(decrement(1))} variant='contained' color='error'>DECREMENT</Button>
        <Button onClick={() => dispatch(increment(5))} variant='contained' color='secondary'>increment by 5</Button>

      </ButtonGroup>
    </>
  );
}
