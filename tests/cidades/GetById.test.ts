import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Cidade - GetById", () => {

  it("Busca registro por id", async () => {
    // 1️⃣ Primeiro cria um registro no banco, para depois testarmos o GET.
    const res1 = await testServer
      .post("/cidade")
      .send({ nome: "Caxias do Sul" });

    // 2️⃣ Verifica se a criação foi bem sucedida (201 Created).
    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    // 3️⃣ Faz a requisição GET usando o id retornado da criação.
    const res2 = await testServer.get(`/cidades/${res1.body.id}`).send();

    // 4️⃣ Espera que o GET retorne 200 (OK).
    expect(res2.statusCode).toEqual(StatusCodes.OK);

    // 5️⃣ Verifica se o corpo da resposta tem o mesmo nome que foi salvo.
    expect(res2.body).toHaveProperty("nome", "Caxias do Sul");
  });

  it("Tenta buscar um registro que não existe", async () => {
    // 6️⃣ Faz uma requisição com um id que não existe no banco.
    const res = await testServer.get("/cidades/99999").send();

    // 7️⃣ Espera que retorne 404 (Not Found).
    expect(res.statusCode).toEqual(StatusCodes.NOT_FOUND);
  });

});
