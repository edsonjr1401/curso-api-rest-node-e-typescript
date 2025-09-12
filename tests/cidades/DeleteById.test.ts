import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Cidades - DeleteById", () => {

  it('Apagar registro', async () => {
   });

   it('Tenta apagar registro que não existe', async () => {

    const res1 = await testServer
    .delete('/cidades/99999')
    .send();
   

   expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
   expect(res1.body).toHaveProperty('errors.default');
                     
   });
});