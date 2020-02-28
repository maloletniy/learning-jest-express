const httpMocks = require("node-mocks-http")
const TodoController = require("../../controllers/todo.controller")
const TodoModel = require("../../model/todo.model")
const newTodo = require("../mock-data/new-todo.json")

TodoModel.create = jest.fn();

describe("TodoController.createTodo", () => {
    it("should have a createTodo function", () => {
        expect(typeof TodoController.createTodo).toBe("function")
    })
    it("should call TodoModel create", () => {
        //given
        let req, res, next;
        req = httpMocks.createRequest();
        res = httpMocks.createResponse();
        next = null;
        req.body = newTodo;

        //when
        TodoController.createTodo(req, res, next);

        //then
        expect(TodoModel.create).toBeCalledWith(newTodo);
    })
})