const user = {
    id: Number,
    name: String
}

const message = {
    chatId: String,
    sender: String,
    to: String,
    time: Date,
    text: String
}

const chat = {
    image: String,
    users: [String]
}

messagesModel.aggregation({
    $lookup: {
        from: 'users',
        localField: 'sender',
        foreignField: 'id',
        as: 'senderObject'
    }
})