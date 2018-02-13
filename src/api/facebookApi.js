/*global FB*/
import { post } from '../utils/httpRequests';

export const init = () => {
    return new Promise((resolve)=>{
        window.fbAsyncInit = function() {
            FB.init({
                appId      : 793931910817368,
                cookie     : true,  // enable cookies to allow the server to access
                // the session
                xfbml      : true,  // parse social plugins on this page
                version    : 'v2.12' // use version 2.1
            });
            resolve();
        };

        // Load the SDK asynchronously
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    });
};


export const login = () => {
    return new Promise((resolve, reject)=>{
        FB.login((response)=>{
            if (response.authResponse) {
                // console.log(response);
                return post('/api/v1/facebook/auth',{
                    ...response.authResponse,
                }).then((response)=>{
                    if(response.errorCode===200){
                        resolve();
                    }
                }).catch((e)=>{
                    reject(e);
                });
            } else {
                reject("User cancelled login or did not fully authorize.");
            }
        },{
            scope:'public_profile,email,user_posts,publish_actions',
            // auth_type: 'reauthenticate',
        });
    });
};

export const fetchPosts = (socialAccount) => {
    return new Promise((resolve)=>{
        FB.api(`/${socialAccount.id}/feed?fields=picture,message&access_token=${socialAccount.access_token}`, (response) => {
            if (!response || response.error) {
                throw new Error(response.error.message);
            } else {
                resolve(response);
            }
        });
    });
};