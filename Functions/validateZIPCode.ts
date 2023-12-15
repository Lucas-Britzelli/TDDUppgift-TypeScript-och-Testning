export function validateZIPCode(zipCode: string): boolean {

    if (zipCode.length !== 5) {
        return false;
    }
    else if (isNaN(Number(zipCode))) {
        return false;
    }
    else {
        return true;
    }

}
