import actualCreate from 'zustand';

const storeResetFns = new Set();

const create = createState => {
  const store = actualCreate(createState);
  const initialState = store.getState();
  storeResetFns.add(() => store.setState(initialState, true));
  return store;
};

export default create;
