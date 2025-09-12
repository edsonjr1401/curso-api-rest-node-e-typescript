import { StatusCodes } from 'http-status-codes';

import { testServer } from '../jest.setup';


describe('Cidade - GetAll', () => {

  it('Buscar todos os registros', async () => {

    const res1 = await testServer
      .post('/cidade')
      .send({ nome: 'Porto alegre' });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resBuscada = await testServer
      .get('/cidade')
      .send();

    expect(Number(resBuscada.header['x-total-count'])).toBeGreaterThan(0);
    expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
    expect(resBuscada.body.length).toBeGreaterThan(0);
  });
});