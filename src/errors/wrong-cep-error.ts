import { ApplicationError } from '@/protocols';

export function wrongCepError(): ApplicationError {
  return {
    name: 'WrongCEPError',
    message: 'This CEP is invalid!',
  };
}