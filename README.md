<h1>API Gateway</h1>
<p>API Gateway is a centralized door for requesting resources from different sources. It helps in hiding the exact resources and handles client requests smoothly. Every request and response comes through it. So the chances of unauthorized attacks and data breaches are highly reduced. And it helps in scaling up particular services whenever needed without any conflicts.
<br>
It is mainly used to secure the system, scale the system, and prevent unauthorized attacks and data breaches.</p>
<br><br>
<p>
For implementing the API Gateway service with npm, we first need to install the http-proxy-middleware, then import the createProxyMiddleware from http-proxy-middleware.
<br>
Once it is done, we need to create different servers for the different services. Now we are dealing with the core functionality, forwarding the incoming requests from the gateway to the appropriate resource location.
<br>
For that, use the middleware function:
<br>
app.use("route of the resource", createProxyMiddleware({
    target: resource location,
    changeOrigin: true // it says that the request is an internal and valid request to the resource
}))
<br>
Then boom, it works as it is.
<br>
And I created a global auth middleware to handle only authenticated requests and deny unauthorized requests.
<br>
And I added a global rate limiter for limiting the requests of users within a particular time period.
<br>
These are the things I learnt from the session.

</p>