import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import InputText from "./InputText.js";

describe('InputText Component', () => {
    it('renders an input for username', () => {
      render(
        <InputText type="text" id="input-text-username" lable="Nombre de usuario:" />
      );

      expect(screen.getByRole('label')).toHaveTextContent('Nombre de usuario:');
      expect(screen.getByRole('input')).toHaveAttribute('type', 'text');
    });
  
    it('renders an input for password', () => {
        render(
          <InputText type="password" id="input-text-password" lable="Contrasena:" /> 
        );
  
        expect(screen.getByRole('label')).toHaveTextContent('Contrasena:');
        expect(screen.getByRole('input')).toHaveAttribute('type', 'password');
      });
  });