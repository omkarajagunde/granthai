

<iframe width="560" height="315" src="https://www.youtube.com/embed/P31ipww2_xc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


### How to integrate?
```js
const GranthAi = require("granthai")
const app = express()
app.use(GranthAi({ 
    docTitle: "..." // optional
    key: "..."      // optional
    baseUrl: "..."  // optional
}))
```

### How to access the generated API Documentation?
When the NodeJs server starts up, GranthAi will add a new public route to your server url at `/api-docs`, you can simply visit this `/api-docs` route to access your generated API Documentation


### Is it free to use? 

Absolutely, this tool is completely free to use.

- For the initial documentation of up to 10 APIs, there's no need to sign up or generate a key.

- Once you've documented more than 10 APIs, you can still enjoy free lifetime usage for an unlimited number of APIs. 
- However, to proceed, please visit [Signup & generate token](https://granthai.com/signup) to complete a simple form and generate a unique token. 
- This token should then be inserted into the GranthAi init object. 
- Please rest assured that we don't collect or retain any of your API data or metrics on our servers. 
- This information is solely utilized for auditing purposes, service enhancement, and gaining insight into user requirements. 
- If you choose to subscribe to our upcoming features like API metrics & monitoring, live hosting, automated testing, error tracking, and more, we might consider storing such data then.


