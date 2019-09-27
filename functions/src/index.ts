import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);

export const addDate = functions.region('asia-east2').firestore.document('item/{itemId}').onCreate((snap, context) => {
    const id = context.params.itemId;
    const date = admin.firestore.Timestamp.now();

    return admin.firestore().collection('item')
    .doc(id).update({
        date_added: date,
    });
});

export const powerNap = functions.region('asia-east2').https.onRequest((request, response) => {
    //let itemCount = 0;
    /*admin.firestore().collection('item').get().then(snapshot => {
        itemCount = snapshot.size;
    });*/

    const message = {
        message: 'bobo si dean',
        powerNap: '6 hours',
        //gaanoNaKadamiItemSaDatabaseNatin: itemCount
    }

    response.send(message);
})