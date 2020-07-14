import styled from 'styled-components';

export const Container = styled.div`
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 900px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      border: 0;
      border-radius: 4px;
      height: 44px;
      width: 350px;
      padding: 0 15px;
      color: #333;
      margin: 0 0 10px;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 100px;
  }
`;
