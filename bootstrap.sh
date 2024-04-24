#!/bin/zsh
#Required:
# - zsh
# - node 21: asdf local nodejs 21.6.1
# - CLI: jq, sponge

#NOTE: node 21,tsx has
# - 'watch'
# --env-file
# test runner

npm init -y
npm install -D @tsconfig/recommended @types/convict tsx typescript
touch tsconfig.json
cat << EOF > tsconfig.json
{
	"extends": "@tsconfig/recommended/tsconfig.json",
	"compilerOptions": {
	  "rootDir": "src",
		"outDir": "./dist",
		"target": "ES2022"
	}
}
EOF

npm install -S kafkajs
mkdir src
touch .env

#add to package json, requires jq, sponge
jq '.scripts.dev="tsx watch --env-file=.env src/index.ts"' package.json | sponge package.json
jq '.scripts.build="tsc"' package.json | sponge package.json
touch src/index.ts


#npm i fastify-plugin @fastify/mongodb
#create and start docker-compose?
#docker run --name some-mongo -p 27017:27017 -d mongo
#docker start $(docker ps -aqf "name=mongo")
