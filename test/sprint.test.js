const request = require ("supertest");
const app = require ("../index");


describe("Task Get test", () => {
  test("deberia traer todas las tareas", async () => {
    const response = await request(app).get("/api/tasks");

    expect(response.status).toBe(200);
    expect(response.body.task.length).toEqual(5);
  });
});

describe("test status ", () => {
  test("el estado debe ser entre 200 y 300", async () => {
    const response = await request(app).get("/api/tasks");
    expect(response.status).toBeGreaterThanOrEqual(200);
    expect(response.status).toBeLessThan(300);
    });
});

describe("status test true", () => {
  test("el estado debe ser completado true", async () => {
    const response = await request(app).get("/api/newRoutes/1");
    expect(response.body.idTask[0].completado).toBeTruthy();
    });
});

describe("status test false", () => {
  test("el estado debe ser completado false", async () => {
    const response = await request(app).get("/api/newRoutes/3");
    expect(response.body.idTask[0].completado).toBeFalsy();
    });
});

describe("status test undefined", () => {
  test("el estado debe ser undefined", async () => {
    const response = await request(app).get("/api/newRoutes/3");
    expect(response.body.idTask[0].proximaTarea).toBeUndefined();
    });
});

describe("Title test", () => {
  test("verificar el texto de titulo", async () => {
    const response = await request(app).get("/api/newRoutes/3");
    expect(response.body.idTask[0].titulo).toContain("Presentar");
    });
});

describe("Array Test ", () => {
  test("debe verificar cuantos objetos tiene el array", async () => {
    const response = await request(app).get("/api/tasks");
    expect(response.body.task).toHaveLength(5);
    });
});


