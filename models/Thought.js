const { Schema, model } = require('mongoose');
const { reactionSchema } = require('./Reaction');


const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String, 
            required: true, 
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => {
                return date.toLocaleDateString();
            },
        },
        username: {
            type: String, 
            required: true,
        },
        reactions: [reactionSchema]
    },
);

thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length;
    })

const Thought = model('thought', thoughtSchema);

module.exports = Thought;