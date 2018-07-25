# Discussion forum in React!

I'm building a discussion forum with React as the front end. It's still WIP (hello world to be exact).
Hoping to spend some time on this. 
I'm considering GraphQL, MongoDB, Next.js and Docker

## Run in dev mode

    cd client
    yarn install
    yarn run start (for dev)
    visit http://localhost:3000 on your browser

## Run from docker(prod mode only now)

    cd docker
    docker build -t react-docker -f prod.dockerfile ./
    docker run -d -p 3000:5000 react-docker
    visit http://localhost:3000 on your browser

Will add dev mode for docker soon..


