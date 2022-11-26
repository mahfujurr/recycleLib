import React from 'react';

const Blog = () => {
    return (
        <div className='  px-5 md:px-10 lg:px-24 text-center pb-12'>
            <h1 className='text-5xl   font-bold pt-5 mb-12'>
                Blog
            </h1>
            <h1 className='my-6 text-3xl font-bold '>
                What are the different ways to manage a state in a React application?
            </h1>
            <p className='font-semibold'>
                In React apps, there are at least seven ways to handle the state. Let us briefly explore a few of them in this part.
                URL
                We can use URL to store some data e.g.

                The id of the current item, being viewed
                Filter parameters
                Pagination offset and limit
                Sorting data
                Keeping such data in the URL allows users to share deep links with others.

                It is recommended to avoid storing such information in the app’s state to avoid the URL in our app getting out of sync. The URL should be used as the system of record, Read from it as needed for information related to sorting, pagination, etc. Update the URL as required when the settings change
                Web Storage
                The second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. Examples include cookies, local storage, and IndexedDB. These are native browser technologies.

                Data persisted in the browser is tied to a single browser. So, if the user loads the site in a different browser, the data will not be available.

                We avoid storing sensitive data in the browser since the user may access the app on a shared machine. Some examples of where web storage might be most useful include storing a user’s shopping cart, saving partially completed form data or storing JWT token in HttpOnly Cookie.
                Lifted State
                The Fourth option is to define the state in the parent component. Often, the same state is used across multiple components. In those cases, it is useful to lift the state to a common parent. The lifting state is a two‑step process. First, we declare the state in a common parent component, and then we pass the state down to child components via props. This pattern should be considered any time a few related components need to use the same state. The lifting state avoids duplicating states in multiple components. It helps to assure that our components all consistently reflect the same state.
                Derived State
                The fifth option is to compute the new state based on the available state and we do not need to declare a state at all. If there are existing values that can be composed to give us the information we need, then we can calculate that information on each render instead of storing it. Some examples include calling .length on an array to determine the number of records instead of storing a separate numItems variable in the state or deriving an errorsExist boolean by checking if the errors array is empty.
                Local State
                The third option is to use store state locally. It is useful when one component needs the state. Examples include a toggle button, a form, etc.

            </p>
            <div class="inline-flex justify-center items-center w-full">
                <hr className="my-8 w-64 h-1 bg-teal-900 rounded border-0 dark:bg-gray-700" />

            </div>
            <h1 className='my-6 text-3xl font-bold'>
                How does prototypical inheritance work?
            </h1>
            <p className='font-semibold'>
                Prototypal inheritance
                In programming, we often want to take something and extend it.

                For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We’d like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.

                Prototypal inheritance is a language feature that helps in that.

                [[Prototype]]
                In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), that is either null or references another object. That object is called “a prototype”:

            </p>
            <div class="inline-flex justify-center items-center w-full">
                <hr className="my-8 w-64 h-1 bg-teal-900 rounded border-0 dark:bg-gray-700" />

            </div>
            <h1 className='my-6 text-3xl font-bold'>
                What is a unit test? Why should we write unit tests?
            </h1>
            <p className='font-semibold'>
                1. What is a unit test?<br />
                A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. In his book "Working Effectively with Legacy Code", author Michael Feathers states that such tests are not unit tests when they rely on external systems: “If it talks to the database, it talks across the network, it touches the file system, it requires system configuration, or it can't be run at the same time as any other test."

                Modern versions of unit testing can be found in frameworks like JUnit, or testing tools like TestComplete. Look a little further and you will find SUnit, the mother of all unit testing frameworks created by Kent Beck, and a reference in chapter 5 of The Art of Software Testing . Before that, it's mostly a mystery. I asked Jerry Weinberg about his experiences with unit testing -- "We did unit testing in 1956. As far as I knew, it was always done, as long as there were computers".

                Regardless of when and where unit testing began, one thing is for sure. Unit testing is here to stay. Let's look at some more practical aspects of unit testing.
                <br />
                2. Why should we write unit tests? : <br />
                To justify any effort in business, there must be a positive impact on the bottom line. Here are a few benefits to writing unit tests:

                Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.
                Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.
                It simplifies the debugging process.
                Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy.
                Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results.
                Unit testing improves code coverage. A debatable topic is to have 100% code coverage across your application.
                In the testing pyramid, unit tests are faster than integration and end-to-end. They are more assertive and return quick feedback.
            </p>
            <div class="inline-flex justify-center items-center w-full">
                <hr className="my-8 w-64 h-1 bg-teal-900 rounded border-0 dark:bg-gray-700" />

            </div>

            <h1 className='my-6 text-3xl font-bold'>
                React vs. Angular vs. Vue?
            </h1>
            <p className='font-semibold'>
                There are three frameworks for building web applications that every frontend developer has heard about: React, Vue.js, and Angular.

                React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.

                They can be used almost interchangeably to build front-end applications, but they’re not 100 percent the same, so it makes sense to compare them and understand their differences.

                Each framework is component-based and allows the rapid creation of UI features.

                However, they all have a different structure and architecture — so first, we’ll look into their architectural differences to understand the philosophy behind them.
                React
                React doesn’t enforce a specific project structure, and as you can see from the official “Hello World” example below, you can start using React with just a few lines of code.

                ReactDOM.render(
                <h1>Hello, world!</h1>,
                document.getElementById('root')
                );
                React can be used as a UI library to render elements, without enforcing a specific project structure, and that’s why it’s not strictly a framework.

                React Elements are the smallest building blocks of React apps. They are more powerful than DOM elements because the React DOM makes sure to update them efficiently whenever something changes.

                Components are larger building blocks that define independent and reusable pieces to be used throughout the application. They accept inputs called props and produce elements that are then displayed to the user.

                React is based on JavaScript, but it’s mostly combined with JSX (JavaScript XML), a syntax extension that allows you to create elements that contain HTML and JavaScript at the same time.

                Anything you create with JSX could also be created with the React JavaScript API, but most developers prefer JSX because it’s more intuitive.

                Vue
                The Vue.js core library focuses on the View layer only. It’s called a progressive framework because you can extend its functionality with official and third-party packages, such as Vue Router or Vuex, to turn it into an actual framework.

                Although Vue is not strictly associated with the MVVM (Model-View-ViewModel) pattern, its design was partly inspired by it. With Vue, you’ll be working mostly on the ViewModel layer, to make sure that the application data is processed in a way that allows the framework to render an up-to-date View.

                Vue’s templating syntax lets you create View components, and it combines familiar HTML with special directives and features. This templating syntax is preferred, even though raw JavaScript and JSX are also supported.

                Components in Vue are small, self-contained, and can be reused throughout the application. Single File Components (SFCs) with the .vue extension contain HTML, CSS, and JavaScript so that all relevant code resides in one file.

                SFCs are the recommended way to organize code in Vue.js projects, especially larger ones. Tools such as Webpack or Browserify are required to transpile SFCs into working JavaScript code.

                Angular
                In this article, I’m discussing Angular 2, and not the first version of the framework which is now known as AngularJS.

                AngularJS, the original framework, is an MVC (Model-View-Controller)) framework. But in Angular 2, there’s no strict association with MV*-patterns as it is also component-based.

                Projects in Angular are structured into Modules, Components, and Services. Each Angular application has at least one root component and one root module.

                Each component in Angular contains a Template, a Class that defines the application logic, and MetaData (Decorators). The metadata for a component tells Angular where to find the building blocks that it needs to create and present its view.

                Angular templates are written in HTML but can also include Angular template syntax with special directives to output reactive data and render multiple elements, among other things.

                Services in Angular are used by Components to delegate business-logic tasks such as fetching data or validating input. They are a distinct part of Angular applications. While Angular doesn’t enforce their use, it’s highly suggested to structure apps as a set of distinct services that can be reused.

                Angular is built in TypeScript, so its use is recommended to get the most seamless experience, but plain JavaScript is also supported.
            </p>

        </div>
    );
};

export default Blog;