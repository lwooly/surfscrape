import { sendWebpushNotification } from "../../services/webpush/index.js";


export const sendNotifications = async (subscriptions) => {

    //Send notification
await Promise.all(
  
    subscriptions.map(async ({ data: subscription }) => {

      const payload = JSON.stringify( {title: 'SurfSentry',
    body: 'Check the forecast...',
    image:'../images/logos/surfSentryLogo.svg'})

      try {
        await sendWebpushNotification(subscription, payload);

      } catch (err) { // manage error from unsubcribed here
        console.log(err.statusCode);
        // console.log(err)
        //unsubscribe if 410 status recieved (Gone - expired or unsubscribed)
        if (err.statusCode === 410) {
          //TODO - add id to db query and use it to remove db instances for subscriptions that have gone.
          console.log("remove");
        }
      }
    })
  );
  "webpush notifications sent to subscribers"

}