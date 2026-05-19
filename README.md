# API Gateway

## What is API Gateway?

API Gateway is a centralized door for requesting resources from different sources. It helps in hiding the exact resources and handles client requests smoothly. Every request and response comes through it. So the chances of unauthorized attacks and data breaches are highly reduced.

And it helps in scaling up particular services whenever needed without any conflicts.

It is mainly used to:

- Secure the system
- Scale the system
- Prevent unauthorized attacks
- Prevent data breaches

---

# Implementation

For implementing the API Gateway service with npm, we first need to install the `http-proxy-middleware`, then import the `createProxyMiddleware` from `http-proxy-middleware`.

Once it is done, we need to create different servers for the different services.

Now we are dealing with the core functionality, forwarding the incoming requests from the gateway to the appropriate resource location.

For that, use the middleware function:

```js
app.use(
    "route of the resource",
    createProxyMiddleware({
        target: "resource location",
        changeOrigin: true // it says that the request is an internal and valid request to the resource
    })
)
````

Then boom, it works as it is.

---

# Additional Features Implemented

* Created a global auth middleware to handle only authenticated requests and deny unauthorized requests.
* Added a global rate limiter for limiting the requests of users within a particular time period.

---

# Things I Learnt

* API Gateway architecture
* Request forwarding using proxy middleware
* Authentication handling using global middleware
* Rate limiting implementation
* Managing multiple services through a centralized gateway

