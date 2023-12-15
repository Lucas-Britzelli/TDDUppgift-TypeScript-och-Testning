import { getGroupsAsync } from '../Functions/getGroupsAsync';

describe('getGroupsAsync', () => {

    it('returns a promise that resolves to an array of objects', async () => {
        const groups = await getGroupsAsync()
        expect(groups).toEqual([
            { "id": 1, "groupName": "Hajarna"},
            { "id": 2, "groupName": "Valarna"},
            { "id": 3, "groupName": "Zebrorna"},
        ])
    })
})
