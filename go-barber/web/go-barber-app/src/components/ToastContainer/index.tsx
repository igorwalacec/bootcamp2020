import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast hasDescription>
        <FiAlertCircle />
        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possível fazer login na aplicaçãp</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
      <Toast type="sucess" hasDescription={false}>
        <FiAlertCircle />
        <div>
          <strong>Aconteceu um erro</strong>
          {/* <p>Não foi possível fazer login na aplicaçãp</p> */}
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
      <Toast type="error" hasDescription>
        <FiAlertCircle />
        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possível fazer login na aplicaçãp</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
    </Container>
  );
};

export default ToastContainer;
