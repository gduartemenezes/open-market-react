import styled from 'styled-components';

export const Container = styled.div`
  margin: 150px auto 0;
  background: #55a44e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 900px;
  border-radius: 8px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3);

  form {
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;

    input {
      border: 0;
      border-radius: 4px;
      height: 44px;
      width: 350px;
      padding: 0 15px;
      font-size: 100%;
      color: #333;
      margin: 0 0 20px;
    }

    button {
      height: 60px;
      width: 250px;
      font-size: 100%;
      font-weight: bold;
      margin-top: 20px;
      background: transparent;
      border: 2px solid #fff;
      color: #fff;
      border-radius: 8px;
      transition: all 0.3s;

      &:hover {
        background: #fff;
        color: #55a44e;
      }
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;

  img {
    margin: 40px 20px;
    width: 350px;
  }

  h3 {
    font-size: 130%;
    color: #fff;
    margin-bottom: 20px;
  }
  span {
    font-size: 150%;
    color: #fff;
  }

  a {
    align-content: center;
    border: 1px solid transparent;
    margin: 35px 0 35px 150px;
    color: #fff;
    font-size: 120%;
    transition: border 0.3s;

    &:hover {
      border-bottom: 1px solid #fff;
    }
  }
`;
