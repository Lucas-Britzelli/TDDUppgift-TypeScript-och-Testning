import { getUsersAsync } from '../Functions/getUsersAsync'

describe('getUsers', () => {

    it('returns a promise that resolves to an array of objects', async () => {
        const users = await getUsersAsync()
        expect(users).toEqual([
            { "name": "Erik", "group": 1},
            { "name": "Lisa", "group": 2},
            { "name": "Hampus", "group": 2},
            { "name": "Linda", "group": 3},
            { "name": "Eva", "group": 1},
            { "name": "Anna", "group": 3},
        ])
    })
})
