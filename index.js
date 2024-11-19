import UserService from "./services/user.service.js"

async function startApp() {
    await UserService.start();

    try {
        //simulate user creation

        const newUser = await UserService.call("user.createUser", {
            username: "cristhian",
            email: "cristhiantombe@gmail.com"
        });

        console.log("new user", newUser)

        const users = await UserService.call('user.getUsers')
        console.log("all users", users)

    } catch (error) {
        console.log(error)
    } finally {
        await UserService.stop();
    }
}

startApp();