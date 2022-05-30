import React from 'react';

const Blog = () => {
    return (
        <div className='mt-16 px-12'>
            <div class="card card-side bg-base-100 shadow-xl mb-10">

                <div class="card-body">
                    <h2 class="card-title">How will you improve the performance of a React Application?</h2>
                    <p>Optimizing application performance is key for developers who are mindful of keeping a user’s experience positive to keep them on an app and engaged.

                        According to research by Akamai, a second delay in load time can cause a 7 percent reduction in conversions, making it imperative for developers to create apps with optimized performance.

                        In React applications, we are guaranteed a very fast UI by default. However, as an application grows, developers may encounter some performance issues.

                        In this guide, we will discuss five important ways to optimize the performance of a React application, including pre-optimization techniques. These include:

                        Keeping component state local where necessary
                        Memoizing React components to prevent unnecessary re-renders
                        Code-splitting in React using dynamic import()
                        Windowing or list virtualization in React
                        Lazy loading images in React</p>

                </div>
            </div>

            <div class="card card-side bg-base-100 shadow-xl mb-10">

                <div class="card-body">
                    <h2 class="card-title">What are the different ways to manage a state in a React application?</h2>
                    <p>Types of Application State in React and How They Help in State Management
                        The Problem. Redux, particularly, gives the developer a single place to put all their state that seems great at first. ...
                        The Solution. ...
                        1 . ...
                        Data State. ...
                        Control State. ...
                        Session State. ...
                        Location State. ...
                        Conclusion.</p>

                </div>
            </div>

            <div class="card card-side bg-base-100 shadow-xl mb-10">

                <div class="card-body">
                    <h2 class="card-title">How does prototypical inheritance work?</h2>
                    <p>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. </p>

                </div>
            </div>
            <div class="card card-side bg-base-100 shadow-xl mb-10">

                <div class="card-body">
                    <h2 class="card-title">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                    <p>To find the product of elements of an array.
                        create an empty variable. ( product)
                        Initialize it with 1.
                        In a loop traverse through each element (or get each element from user) multiply each element to product.
                        Print the product.</p>

                </div>
            </div>
            <div class="card card-side bg-base-100 shadow-xl mb-10">

                <div class="card-body">
                    <h2 class="card-title">What is a unit test? Why should write unit tests?</h2>
                    <p>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.</p>

                </div>
            </div>
        </div>
    );
};

export default Blog;