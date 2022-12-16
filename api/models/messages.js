
const path = require('node:path');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/message.json');

// list of message
function list(userId) {
    const message = parse(jsonDbPath);
    const id =parseInt(userId,10)
    const messages = message.filter((m) => m.user_id === id);
    return messages;
}

// add message with user_id
function saveUserMessage(data) {

    const message = parse(jsonDbPath);
    const newMessage = {
        id: getNextId(),
        content: data.content,
        type: data.type,
        user_id: data.id,
    }
    const string1 = "suggestion"
    const string2 = "question"
    const string3 = "suppresion"
    const compareValue1 = string1 === data.type
    const compareValue2 = string2 === data.type
    const compareValue3 = string3 === data.type
    if (!compareValue1 && !compareValue2 && !compareValue3) return undefined;
    message.push(newMessage);
    serialize(jsonDbPath, message)
    return newMessage;

}

// add message without user_id
function saveVisitorMessage(data) {

    const message = parse(jsonDbPath);
    const newMessage = {
        id: getNextId(),
        content: data.content,
        type: data.type,
    }
    const string1 = "suggestion"
    const string2 = "question"
    const string3 = "suppresion"
    const compareValue1 = string1 === data.type
    const compareValue2 = string2 === data.type
    const compareValue3 = string3 === data.type
    if (!compareValue1 && !compareValue2 && !compareValue3) return undefined;
    message.push(newMessage);
    serialize(jsonDbPath, message)
    return newMessage;

}

function getNextId() {
    const message = parse(jsonDbPath);
    const lastItemIndex = message?.length !== 0 ? message.length - 1 : undefined;
    if (lastItemIndex === undefined) return 1;
    const lastId = message[lastItemIndex]?.id;
    const nextId = lastId + 1;
    return nextId;
}


function deleteOnemessage(id, user) {
    const idAsNumber = parseInt(id, 10);
    const message = parse(jsonDbPath);
    const indexOfMessageFound = message.findIndex((m) => m.id === idAsNumber);
    if (indexOfMessageFound < 0 || message[indexOfMessageFound].user_id !== user) return undefined;
    const deletedMessage = message.splice(indexOfMessageFound, 1);
    serialize(jsonDbPath, message);
    return deletedMessage[0];
}

function updateOneMessage(id, user, data) {
    const idAsNumber = parseInt(id, 10);
    const message = parse(jsonDbPath);
    const indexOfMessageFound = message.findIndex((m) => m.id === idAsNumber);
    if (indexOfMessageFound < 0 || message[indexOfMessageFound].user_id !== user) return undefined;
    const string1 = "message"
    const string2 = "question"
    const string3 = "suppresion"
    const compareValue1 = string1 === data.type
    const compareValue2 = string2 === data.type
    const compareValue3 = string3 === data.type
    if (!compareValue1 && !compareValue2 && !compareValue3) return undefined;
    const proprieteToUptade = { ...data }
    const updatedMessage = { ...message[indexOfMessageFound], ...proprieteToUptade }
    message[indexOfMessageFound] = updatedMessage;
    serialize(jsonDbPath, message);
    return updatedMessage;
}

module.exports = { list, saveUserMessage, saveVisitorMessage, deleteOnemessage, updateOneMessage }