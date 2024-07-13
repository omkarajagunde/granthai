https://github.com/omkarajagunde/granthai/assets/50138744/35d42210-307e-4cb8-a320-106b661b1593
### How to integrate?
```js
const GranthAi = require("granthai")
const app = express()
app.use(GranthAi({ 
    docTitle: "...", // optional
    key: "...",     // optional
    baseUrl: "..."  // required
}))
```
Note: If you use nodemon on your server, put `openapi.json` (this file is created at the level of server entry point file) to nodemon ignore else documentation will not show up


### How to access the generated API Documentation?
When the NodeJs server starts up, GranthAi will add a new public route to your server url at `/api-docs`, you can simply visit this `/api-docs` route to access your generated API Documentation


### Is it free to use? 

Absolutely, this tool is completely free to use.
[Signup here to get updates](https://granthai.vercel.app/)

- Rest assured that we don't collect or retain any of your API data or metrics on our servers. 
- This information is solely utilized for auditing purposes, service enhancement, and gaining insight into user requirements. 
- If you choose to subscribe to our upcoming features like API metrics & monitoring, live hosting, automated testing, error tracking, and more, we might consider storing such data then.

## Support and feedback
- manage.granthai@gmail.com

### Authors
- Omkar Ajagunde (http://omkarajagunde.web.app/), 
- Sanket Chaudhari (https://github.com/sanketssc)


