import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import { InputLabel, Input, FormHelperText, Container } from "@material-ui/core";
interface UserReviewsProps {

}

const UserReviews: React.FC<UserReviewsProps> = ({ }) => {
  return (
    <Container maxWidth="lg" style={{ background: 'blue' }} >

      <FormControl >
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
      </FormControl>
    </Container>
  );
}

export default UserReviews;