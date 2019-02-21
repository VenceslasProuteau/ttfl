let store;
export const FireStore = {
  set(firestore) {
    store = firestore;
  },
  get() {
    return store;
  },
  setDoc(collectionId, docId, data) {
    return store.collection(collectionId).doc(docId).set(data);
  },
  add(collectionId, data) {
    return store.collection(collectionId).add(data);
  }
}