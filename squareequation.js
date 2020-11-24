// 'ax**2+b*x+c=0'
const sqrEq = (a ,b ,c) => {
    const D = b**2 - 4*a*c;
    if (D >= 0) {
        const x1 = (-b + D**(1/2))/2*a
        const x2 = (-b - D**(1/2))/2*a
        console.log(x1, x2);
    } else {
        console.log('Не решений')
    }
}
// insight
