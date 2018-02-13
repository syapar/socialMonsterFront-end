import { getIdToken } from '../api/firebaseApi';
import qs from 'querystring';


export const post = (url,data) => {
    return new Promise((resolve)=>{
        getIdToken().then((response)=>{
            data.idToken = response;
            fetch(url, {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(data),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }).then(res => {
                return res.json();
            }).catch(error => {
                throw error;
            }).then(response => {
                resolve(response);
            });
        });
    });
};

export const get = (url,data) => {
    return new Promise((resolve)=>{
        url = url + '?' + qs.stringify(data);
        fetch(url).then(res => {
            return res.json();
        }).catch(error => {
            throw error;
        }).then(response => {
            console.log('getttt',response);
            resolve(response);
        });
    });
};