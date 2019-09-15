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