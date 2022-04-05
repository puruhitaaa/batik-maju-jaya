import { FC } from 'react';

const FormContainer: FC = ({ children }) => {
  return (
    <div className="grid gap-y-10 gap-x-10 grid-cols-2 md:grid-cols-4">
      {children}
    </div>
  );
};

export default FormContainer;
