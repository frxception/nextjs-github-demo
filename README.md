# Nextjs Github Demo App

#### Deployed codes [See live app](https://zilliqa-react-demo-app-1wkxm050h-frxception.vercel.app/)



## Getting Started

Install dependencies
```sh
yarn
```

##
## Running the application

### Development
```sh
npm run dev 
```


Open application in browser http://localhost:3000



##
### Production build and deploy

```sh
npm run build

and

npm run start
```


##


### Docker deployment


##### Running nextjs app with docker and open http://localhost:3000 in your browser.
```sh

docker build . -t nextjs-github-demo-app.v1

# and 

docker run -it nextjs-github-demo-app.v1

# or 

docker run -p 3000:3000 nextjs-github-demo-app


# to stop the image running
docker stop <container_id>
 
```

##### Run docker compose and open http://localhost:3000 in your browser.

```sh
docker-compose up
```


##

# Project

### Stack:
- Github API
- NextJS
- Responsive CSS Modules
- React
- Typescript
- Node
- Docker
