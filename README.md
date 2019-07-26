# Learning-nodeJS

## Freight Farms coding assignment

I was asked to demonstrate a basic "hello world" program using Node.js 

The app contains:

- Two ways of running the app either as a cluster of cpu (to improve server scalability) or a single threaded program. (npm init) and (npm install express --save)
- A very basic unit test is carried out on the webpage to ensure the body is displaying the "hello world" tested using chai library. (npm install mocha chai --save-dev)
- Used a HTTP benchmark utility called siege to test and analyse the scalability of the application (npm install siege --save). You can also use loadtest (npm install -g loadtest)
- Conducted elint linting tests on static code to ensure programming conventions and good practices were met and automatically fixed any imperfections. First (npm install --save eslint-config-defaults) (npm install eslint --save-dev) (npm run eslint) then to automatically fix (npm run lint-fix)
