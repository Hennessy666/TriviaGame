function resolveAfter4Seconds(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 4000);
    });
}

async function ayncCall(){
    console.log('calling');
    var result = await resolveAfter4Seconds();
    console.log(result);
    // expected output: 'resolved'
}

asyncCall();