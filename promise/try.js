const syncFunction = (input) => {
    const parsed = JSON.parse(input);

    return parsed;
}

// (async () => syncFunction("corrupted-json"))()
//     .catch()
//     .then(console.log)


Promise.try(() => syncFunction("corrupted-json"))
    .catch()
    .then(console.log)

