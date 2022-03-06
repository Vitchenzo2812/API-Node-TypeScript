import { getConnection } from 'typeorm';
import { createUserController } from './createUserController';
import { Request } from 'express';
import { makeMockResponse } from '../utils/mocks/mockResponse';
import createConnection from '../database';

describe('createUserController', () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();

    })

    afterAll(async () => {
        const connection = getConnection();
        await connection.query('DELETE FROM Users')
        await connection.close();
    })

    const CreateUserController = new createUserController();

    const response = makeMockResponse()

    it('Deve retornar status 201 quando o usuário for criado', async () => {
        const request = {
            body: {
                name: 'Any User',
                age: 'Any Age',
                email: 'email@email.com',
            } 
        } as Request;

        await CreateUserController.handle(request, response)

        expect(response.state.status).toBe(201)
    })

    it('Deve retornar status 400 quando o pedido não for informado corretamente', async () => {
        const request = {
            body: {
                name: '',
                age: 'Any age',
                email: 'email@email.com',
            } 
        } as Request;

        await CreateUserController.handle(request, response);

        expect(response.state.status).toBe(400);
    })

    it('Deve retornar status 201 quando o email e a idade não forem informados', async () => {
        const request = {
            body: {
                name: 'Any User',
                age: '',
                email: '',
            } 
        } as Request;

        await CreateUserController.handle(request, response);

        expect(response.state.status).toBe(201);
    })

})