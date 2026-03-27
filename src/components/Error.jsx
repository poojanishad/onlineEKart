import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  margin-top: 50px;
  color: red;
  font-weight: 500;
`;

const Error = ({ message }) => {
  return <Wrapper>{message || "Something went wrong"}</Wrapper>;
};

export default Error;