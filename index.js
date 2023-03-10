// Code your solutions in this file

function writeCards(arrayName, eventName) {
    const msg = [];
    for (let i = 0; i < arrayName.length; i++) {
        msg.push(`Thank you, ${arrayName[i]}, for the wonderful ${eventName} gift!`);
    };

    return msg;
};

function countDown() {
    let countdown = 10;
    while (countdown >= 0) {
        console.log(countdown--);
    };
};






