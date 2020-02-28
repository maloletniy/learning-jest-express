const httpMocks = require("node-mocks-http")
const TodoController = require("../../controllers/todo.controller")
const TodoModel = require("../../model/todo.model")
const newTodo = require("../mock-data/new-todo.json")

TodoModel.create = jest.fn();

let req, res, next;

beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = null;
})

describe("TodoController.createTodo", () => {

    beforeEach


    it("should have a createTodo function", () => {
        expect(typeof TodoController.createTodo).toBe("function")
    })
    it("should call TodoModel create", () => {
        //given
        req.body = newTodo;

        //when
        TodoController.createTodo(req, res, next);

        //then
        expect(TodoModel.create).toBeCalledWith(newTodo);
    })
    it("should return 201 response", () => {
        //given
        req.body = newTodo;

        //when
        TodoController.createTodo(req, res, next);

        //then
        expect(res.statusCode).toBe(201);
        expect(res._isEndCalled()).toBeTruthy();
    })
    it("should retun body as response", () => {
        //given
        req.body = newTodo;
        TodoModel.create.mockReturnValue(newTodo);

        //when
        TodoController.createTodo(req, res, next);

        //then
        expect(res._getJSONData()).toStrictEqual(newTodo);
    })
})