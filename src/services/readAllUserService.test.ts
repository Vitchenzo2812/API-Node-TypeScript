import { getConnection } from 'typeorm';
import createConnection from '../database'; 
import { readAllUserService } from './readAllUserService';
import { fakeData } from '../utils/fakeData/fakeData';

describe('readAllUserService', () => {
    beforeAll( async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    })

    afterAll( async () => {
        const connection = getConnection();
        await connection.query('DELETE FROM User');
        await connection.close();
    })  

    const FakeData = new fakeData();

    it('Deve retornar todos os usuários cadastrados', async () => {
  
        await FakeData.execute();

        const expectedResponse = [
            {
                name: 'Any User',
                email: 'email@email.com'
            },
            {
                name: 'Any User2',
                email: ''
            },
        ]

        const ReadAllUserService = new readAllUserService();

        const result = await ReadAllUserService.execute();

        //console.log(result)
        expect(result).toMatchObject(expectedResponse);
    })
})