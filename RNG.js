const randomGen = num => {
    return Math.floor(Math.random()*(num-1));
}

const subjects = ["A wizard", "The cat", "An alien", "Your best friend", "A ghost", "A talking tree", "A detective", "A robot", "An ancient warrior", "A time traveler"];
const verbs = ["discovered", "lost", "built", "found", "stole", "dreamed about", "solved", "destroyed", "enchanted", "teleported to"];
const objects = ["a mysterious artifact", "a portal to another dimension", "a secret code", "a glowing crystal", "a hidden treasure", "an ancient book", "a magical potion", "a golden key", "a cursed amulet", "a powerful spell"];
const places = ["in a haunted castle", "at the bottom of the ocean", "on a distant planet", "inside a virtual reality game", "in a hidden bunker", "on top of a mountain", "in an abandoned spaceship", "under a magical tree", "in a parallel universe", "inside a dream"];
const consequences = ["and accidentally changed the future.", "but unleashed an ancient curse.", "which led to a hilarious misunderstanding.", "and became a hero of legend.", "but got lost in another timeline.", "and unlocked a new superpower.", "but now they are being chased by something mysterious.", "which turned out to be a big mistake.", "and started a wild adventure.", "but now they must solve a riddle to escape."];

const batch = [subjects, verbs, objects, places, consequences];

const getRandomWord = arr => {
    console.log(arr);
    return arr[randomGen(arr.length)];
}

const generateWord = nestedArr => {
    console.log(nestedArr);
    let messageArray = [];
    for(let i = 0; i < nestedArr.length; i++){
        messageArray.push(getRandomWord(nestedArr[i]));
    }
    return messageArray;
}

console.log(generateWord(batch));