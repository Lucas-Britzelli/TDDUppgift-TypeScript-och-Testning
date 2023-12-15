export function createGenetiveName(name: string): string {
    if (name.endsWith('s')) return name + "'"; return name + "s"
}
