export function getGroupsAsync(): Promise<{id: number, groupName: string}[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { "id": 1, "groupName": "Hajarna" },
                { "id": 2, "groupName": "Valarna" },
                { "id": 3, "groupName": "Zebrorna" },
            ])
        }, 1000)
    })
}
