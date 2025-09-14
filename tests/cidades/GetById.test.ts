import { StatusCodes } from "http-status-codes";

import { testServer } from '../jest.setup'
import { getById } from "../../src/server/controllers/cidades/GetById";


describe ('Cidade - GetById', () => {

  it('Busca registro por id', async () => {
  });
  it('Tentar buscar regiatros que não exiate', async => () {
    const res1 = await testServer
    .get('/cidade/99999')
    .send();

    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
   expect(res1.body).toHaveProperty('errors.default');

});

});