const quadraticСoefficient = parseFloat(prompt('Enter quadratic coefficient A > 0'));
const linearСoefficient = parseFloat(prompt('Enter linear coefficient B > 0'));
const freeConstant = parseFloat(prompt('Enter free consnant C > 0'));
const solution = solveQuadraticEquation(quadraticСoefficient, linearСoefficient, freeConstant);
alert(solution);

function solveQuadraticEquation(quadraticСoefficient, linearСoefficient, freeConstant) {
    const descriminant = calcDiscriminant(quadraticСoefficient,linearСoefficient,freeConstant);
    if(descriminant > 0) {
        const root1 = (-linearСoefficient + Math.sqrt(descriminant))/(2*quadraticСoefficient);
        const root2 = (-linearСoefficient - Math.sqrt(descriminant))/(2*quadraticСoefficient);
        return 'Root1 = ' + root1 + '  Root2 = ' + root2;
    } else if(descriminant === 0) {
        const root = -linearСoefficient/(2*quadraticСoefficient);
        return 'Root = ' + root;
    }  return 'No solutions';
}

function calcDiscriminant(quadraticСoefficient, linearСoefficient, freeConstant) {
    const descriminant = Math.pow(linearСoefficient, 2) - 4*quadraticСoefficient*freeConstant;
    return descriminant;
}

