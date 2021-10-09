### Steps

> install
- npx create-next-app .
- npm run dev

> layout
- Navigation.js
- Navigation.module.css
- Navigation.js

> ui
- Card.js

> meetups
- MeetupList.js
- MeetupDetail.js
- NewMeetupForm.js

    ```
    <div>
        ...
        <style jsx>{`
            .detail{
                text-align: center;
            }

            .detail img{
                width: 100%;
            }
        `}</style>
    </div>
    ```
> mongodb
- mongodb.js

> api 
- meetups.js
- new-meetup.js

> page/index
- index.js

> page/_app
- _app.js for layout

> page/meetupId
- meetupId.js 
    getStaticProps(context) to get id from params
    getStaticPaths() for auto generated paths






### References

- https://www.youtube.com/watch?v=MFuwkrseXVE
- https://github.com/vercel/next.js/blob/canary/examples/with-styled-jsx/pages/index.js
- https://www.section.io/engineering-education/build-nextjs-with-mongodb-and-deploy-on-vercel/
