import { StatusCodes } from "http-status-codes";

import { testServer } from '../jest.setup'
import { getById } from "../../src/server/controllers/cidades/GetById";


describe ('Cidade - GetById', () => {

  it('Busca registro por id', async () => {
     const res1 = await testServer
      .post('/cidade')
      .send({ nome: 'Caxias do sul' });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resBuscada = await testServer
      .get(`/cidade/${res1.body}`)
      .send();

    expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
    expect(resBuscada.body).toHaveProperty('nome');
  });


  it('Tentar buscar regiatros que não exiate', async() =>  {
  const res1 = await testServer
    .get('/cidade/99999')
    .send();

    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
   expect(res1.body).toHaveProperty('errors.default');

});

});