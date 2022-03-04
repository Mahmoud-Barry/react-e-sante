
export let connected = false;
export let currentUser = {};

export const setConnected = ()=>{
    connected = true;
}
export const setCurrentUser = (user)=>{
    currentUser = user;
}