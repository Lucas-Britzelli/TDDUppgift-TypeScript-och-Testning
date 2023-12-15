type User = {
    name: string
    group: number
}

export function getUsersAsync(): Promise<User[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { "name": "Erik", "group": 1 },
                { "name": "Lisa", "group": 2 },
                { "name": "Hampus", "group": 2 },
                { "name": "Linda", "group": 3 },
                { "name": "Eva", "group": 1 },
                { "name": "Anna", "group": 3 },
            ])
        }, 1000)
    })
}
