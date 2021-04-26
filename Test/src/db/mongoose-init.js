const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydb', { useNewUrlParser: true, useUnifiedTopology: true });
const User = require('./models/user.model');

async function initUsers() {
    if (await User.countDocuments() !== 4) {
        const user1 = new User({ name: 'User 1', _id: new mongoose.Types.ObjectId()  });
        user1.save();
        const user2 = new User({ name: 'User 2', _id: new mongoose.Types.ObjectId()  });
        user2.save();
        const user3 = new User({ name: 'User 3', _id: new mongoose.Types.ObjectId()  });
        user3.save();
        const user4 = new User({ name: 'User 4', _id: new mongoose.Types.ObjectId()  });
        user4.save();
    }
}

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('mongoDB connection succsess');
    initUsers();
});