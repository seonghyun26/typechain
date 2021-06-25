const name = 'eddy',
    age = 24,
    gender = 'male';

// ? : means parameter is optional
    const sayHI = (name, age, gender?) => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`)
}

/*
    sayHI(name, age);
    On Javascript, hello eddy, you are 24, you are a undefined.
*/

sayHI(name, age, gender);

export {};