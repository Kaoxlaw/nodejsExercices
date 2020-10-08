# NodeJs x Express x Mongodb

Here is a CRUD exemple on nodeJs with express and mongoDb.

## Installation for Ubuntu18.04

### Install NodeJs

Nodejs LTS (v.12)

```
curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

for another version [click here](https://github.com/nodesource/distributions/blob/master/README.md)

### Install Yarn

Yarn stable (v.1.22.5)

```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```

then

```
sudo apt update && sudo apt install yarn
```

### MongoDb

Create a free account on [mongodb.com](https://www.mongodb.com/) and use a free account,

### Run the project

Open the project and go on main folder, then

```
Yarn serve
```

You can test the request on [postman](https://www.postman.com/)

Have Fun!
