const db = require('../config/connection');
const { Thought, User } = require ('../models')
const users = [
    {
        username: 'meankid',
        email: 'meankid1@mail.com'
    },
    {
        username: 'coolkid',
        email: 'coolkid@mail.com'
    },
    {
        username: 'mr2',
        email: 'mr2@mail.com'
    }
]

const thoughts = [
    {
        thoughtText: "I am weird",
        username: 'chickenlasanga'
    },
    {
        thoughtText: "Would Socrates play with plato?",
        username: 'frenchcommie'
    },
    {
        thoughtText: "chickenlasanga is weird",
        username: 'sirbaudeliare'
    },
]

db.once('open', async () => {
    await User.insertMany(users)
    await Thought.insertMany(thoughts)
    process.exit(0)
  });