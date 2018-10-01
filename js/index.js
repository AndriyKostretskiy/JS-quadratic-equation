const quadraticСoefficient = parseFloat(prompt('Enter quadratic coefficient A > 0'));
const linearСoefficient = parseFloat(prompt('Enter linear coefficient B > 0'));
const freeConsnant = parseFloat(prompt('Enter free consnant C > 0'));
const solution = solveQuadraticEquation(quadraticСoefficient, linearСoefficient, freeConsnant);
alert(solution);

function solveQuadraticEquation(quadraticСoefficient, linearСoefficient, freeConsnant) {
    const descriminant = calcDiscriminant(quadraticСoefficient,linearСoefficient,freeConsnant);
    if(descriminant > 0) {
        const root1 = (-linearСoefficient + Math.sqrt(descriminant))/2*quadraticСoefficient;
        const root2 = (-linearСoefficient - Math.sqrt(descriminant))/2*quadraticСoefficient;
        return 'Root1 = ' + root1 + '  Root2 = ' + root2;
    } else if(descriminant === 0) {
        const root = -linearСoefficient/(2*quadraticСoefficient);
        return 'Root = ' + root;
    } else {
        return 'No solutions';
    }
}

function calcDiscriminant(quadraticСoefficient, linearСoefficient, freeConsnant) {
    const descriminant = Math.pow(linearСoefficient, 2) - 4*quadraticСoefficient*freeConsnant;
    return descriminant;
}

