import React from 'react';
import Styled from 'styled-components';
import Flex from '../components/Flex';
import Text from '../components/Typography';
import Button from '../components/Button';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Card from '../components/Card';

const InputStyled = Styled.div`
> input, > textarea {
  font-size: 16px;
  font-weight: 500;
  padding: 8px 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  width: 100%;
  color: #12121D;
  outline: none;
}
>input::placeholder, >textarea::placeholder{
    color: rgba(18, 18, 29, 0.3);
  }
>input:focus, >textarea > :focus{
  border: 1px solid #434343;
}
}`;

const AddEvents: React.FC = () => {
  const { register, handleSubmit, errors, setValue } = useForm();

  const onSubmit = () => {
    toast.success('Event Successfully Created!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
      <Card padding="23px" maxWidth="379px" margin="0px auto">
        <Text
          fontSize="h5"
          fontWeight="bold"
          stringColor="#12121D"
          margin="0px 0px 2px 0px"
        >
          Create An Event!
        </Text>
        <Text
          fontSize="normal"
          fontWeight="medium"
          stringColor="rgba(18, 18, 29, 0.6)"
        >
          {' '}
          Please enter the details to create an event
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ margin: '21px 0px' }}>
            <div style={{ margin: '0px 0px 21px 0px' }}>
              <Text
                fontSize="small"
                fontWeight="bold"
                stringColor="rgba(18, 18, 29, 0.6)"
                margin="0px 0px 9px 0px"
              >
                Event Name
              </Text>
              <InputStyled>
                <input
                  name="eventName"
                  placeholder="Event Name"
                  ref={register({ required: true })}
                />
              </InputStyled>
              {errors.eventName ? (
                <Text
                  fontSize="small"
                  fontWeight="medium"
                  margin="8px 0px 0px 0px"
                  stringColor={(props) => props.theme.color.heidelbergRed100}
                >
                  This is required
                </Text>
              ) : null}
            </div>

            <div style={{ margin: '0px 0px 21px 0px' }}>
              <Text
                fontSize="small"
                fontWeight="bold"
                stringColor="rgba(18, 18, 29, 0.6)"
                margin="0px 0px 9px 0px"
              >
                Venue
              </Text>
              <InputStyled>
                <input
                  name="venue"
                  placeholder="Venue"
                  ref={register({ required: true })}
                />
              </InputStyled>
              {errors.venue ? (
                <Text
                  fontSize="small"
                  fontWeight="medium"
                  margin="8px 0px 0px 0px"
                  stringColor={(props) => props.theme.color.heidelbergRed100}
                >
                  This is required
                </Text>
              ) : null}
            </div>
            <div style={{ margin: '0px 0px 21px 0px' }}>
              <Text
                fontSize="small"
                fontWeight="bold"
                stringColor="rgba(18, 18, 29, 0.6)"
                margin="0px 0px 9px 0px"
              >
                Price
              </Text>
              <InputStyled>
                <input
                  name="price"
                  placeholder="Price"
                  ref={register({ required: true })}
                />
              </InputStyled>
              {errors.price ? (
                <Text
                  fontSize="small"
                  fontWeight="medium"
                  margin="8px 0px 0px 0px"
                  stringColor={(props) => props.theme.color.heidelbergRed100}
                >
                  This is required
                </Text>
              ) : null}
            </div>
            <div style={{ margin: '0px 0px 21px 0px' }}>
              <Text
                fontSize="small"
                fontWeight="bold"
                stringColor="rgba(18, 18, 29, 0.6)"
                margin="0px 0px 9px 0px"
              >
                Discount
              </Text>

              <InputStyled>
                <input
                  name="discount"
                  placeholder="Discount"
                  ref={register({ required: true })}
                />
              </InputStyled>
              {errors.discount ? (
                <Text
                  fontSize="small"
                  fontWeight="medium"
                  margin="8px 0px 0px 0px"
                  stringColor={(props) => props.theme.color.heidelbergRed100}
                >
                  This is required
                </Text>
              ) : null}
            </div>
            <div>
              <Text
                fontSize="small"
                fontWeight="bold"
                stringColor="rgba(18, 18, 29, 0.6)"
                margin="0px 0px 9px 0px"
              >
                Description
              </Text>
              <InputStyled>
                <textarea
                  name="description"
                  placeholder="description"
                  ref={register({ required: true })}
                />
              </InputStyled>
              {errors.description ? (
                <Text
                  fontSize="small"
                  fontWeight="medium"
                  margin="8px 0px 0px 0px"
                  stringColor={(props) => props.theme.color.heidelbergRed100}
                >
                  This is required
                </Text>
              ) : null}
            </div>
          </div>
          <Flex>
            <Button
              kind="secondary"
              size="small"
              onClick={() => {
                setValue('discount', '');
                setValue('description', '');
                setValue('price', '');
                setValue('eventName', '');
                setValue('venue', '');
              }}
              type="button"
            >
              Clear
            </Button>
            <Button kind="primary" size="small" type="submit">
              Submit
            </Button>
          </Flex>
        </form>
      </Card>
    </div>
  );
};

export default AddEvents;
