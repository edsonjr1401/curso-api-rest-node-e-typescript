import { StatusCodes } from 'http-status-codes';

import { testServer } from '../jest.setup';


describe('Cidade - UpdateById', () => {

  it('Atualiza registro', async () => {

    const res1 = await testServer
      .post('/cidade')
      .send({ nome: 'Caxias do sul' });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resAtualizada = await testServer
      .put(`/cidade/${res1.body}`)
      .send({ nome: 'Caxias' });

    expect(resAtualizada.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });
  it('Tenta atualizar registro que não existe', async () => {

    const res1 = await testServer
      .put('/cidade/99999')
      .send({ nome: 'Caxias' });

    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty('errors.default');
  });
});