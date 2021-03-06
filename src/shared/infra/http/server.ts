import express, { Request, Response, NextFunction } from 'express';

import 'express-async-errors';
import AppError from '../../errors/AppError';
import routes from './routes';
import cors from 'cors'
import uploadConfig from '../../../config/upload'

const app = express();

app.use(cors())

app.use(express.json());

app.use('/files', express.static(uploadConfig.directory))

app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }
  return response.status(500).json({
    status: 'error',
    message: 'Ocorreu um erro interno no servidor',
  });
});

app.listen(3334, () => {
  console.log(`🚀 Server started on port 3333`);
})