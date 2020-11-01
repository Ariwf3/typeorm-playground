import "reflect-metadata";
import { createConnection, getRepository } from "typeorm";
import { Tweet } from "./entity/Tweet";
import { User } from "./entity/User";

createConnection().then(async connection => {

    // USERS

    // console.log("Inserting a new user into the database...");
    // const user = new User();
    // user.firstName = "Timber";
    // user.lastName = "Saw";
    // user.age = 25;

    // REPOSITORY PATTERN
    // const userRepo = getRepository(User);
    // const user1 = userRepo.create({ firstName: "Ari", lastName: "Bass",  age: 34})
    // await userRepo.save(user1).catch( err => console.log("Error: ", err))

    // const user2 = userRepo.create({ firstName: "Greg", lastName: "Roberts",  age: 50})
    // await userRepo.save(user2).catch( err => console.log("Error: ", err))

    // await connection.manager.save([user, user1, user2]).catch( error => console.log('Error: ', error));
    // console.log("Saved a new user with id: " + user.id); 

    // console.log("Loading users from the database...");
    // const users = await connection.manager.find(User);
    // console.log("Loaded users: ", users);

    // console.log("Here you can setup and run express/koa/any other framework.");


    // TWEETS
    
    // const tweetRepo = getRepository(Tweet);
    // const tweet = new Tweet();

    // tweet.title = "I'm still learning hard !";
    // tweet.content = "Type orm and eslint after the tests et bla bla bla";
    // tweet.user = Promise.resolve(user1); // lazy loading 

    // const tweet1 = new Tweet();

    // tweet1.title = "Typeorm is awesome !";
    // tweet1.content = "I just speak and speak and chat and talk";
    // tweet1.user = Promise.resolve(user2);

    // const tweet2 = new Tweet();

    // tweet2.title = "Fight club";
    // tweet2.content = "The first rule is you don't talk about fight club";
    // tweet2.user = Promise.resolve(user);

    // await tweetRepo.save([tweet, tweet1, tweet2]).catch( err => console.log("Error: ", err));

    // FIND ALL
     const findAll = async () => {

    const userRepo = getRepository(User);

   const user = await userRepo.find().catch( err => console.log("Error: ", err))  //Sans options renvoie un tableau de tout, Avec options renvoi tableau spécifique :  userRepo.find({ where: { id: 1} })

    if(user)
    console.log({'LISTE USERS': user})

    // Avec query builder pas de eager userRepo.createQueryBuilder().andWhere()
    }

    // FIND ONE
    const find = async () => {
        const userRepo = getRepository(User)

        const user = await userRepo.findOne({ where: {id: 2} })

        console.log('Greg is that you ? : ', user, await user.tweets)
    }

    await findAll()
    await find()

}).catch(error => console.log(error));



