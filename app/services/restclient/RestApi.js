import axios from "axios";

import store from "../../store/configureStore";
import {logout} from "../../redux/user/operations";


export default class RestApi {
    instance = null;
    instanceV0 = null;
    instanceV1 = null;
    cricketInstance=null;

    constructor() {
        // this.intiateInterceptor=this.intiateInterceptor.bind(this)
        this.instanceV0 = axios.create({
            baseURL: 'https://bookme.pk/REST/API/rest_api.php?',
            timeout: 50000,
            headers: {
                'Authorization': "",
                'App-Version': "",
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        this.instance = axios.create({
            baseURL: 'https://bookme.pk/api/v2',
            timeout: 50000,
            headers: {
                'Authorization': "",
                'App-Version':"",
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });


        this.instanceV1 = axios.create({
            baseURL: `https://bookme.pk/api/v1`,
            timeout: 50000,
            headers: {
                'Authorization': "",
                'App-Version': "",
            }
        });

        this.cricketInstance = axios.create({
            baseURL: `https://cricket.bookme.pk`,
            timeout: 50000,
            headers: {
                'Authorization': "",
            }
        });
    }

    static intiateInterceptor(instance) {
        instance.interceptors.response.use(response => {
            return response;
        }, error => {
            if (error?.response?.status === 401) {
                store.dispatch(logout())
            }
            return error;
        });
    }

    static getInstanceV2() {
        if (this.instance == null) {
            this.instance = axios.create({
                baseURL: 'https://bookme.pk/api/v2',
                timeout: 50000,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': "",
                    'App-Version': "",
                }
            });
        }
        return this.instance;
    }

    static getInstanceV0() {

        if (this.instanceV1 == null) {
            this.instanceV1 = axios.create({
                baseURL: 'https://bookme.pk/REST/API/rest_api.php?',
                timeout: 50000,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': "",
                    'App-Version': "",
                }
            });
            // this.intiateInterceptor(this.instanceV1);
        } else {
            // this.intiateInterceptor(this.instanceV1);
        }
        return this.instanceV1;
    }

    static getInstanceV1() {

        if (this.instanceV0 == null) {
            this.instanceV0 = axios.create({
                baseURL: 'https://bookme.pk/api/v1',
                timeout: 50000,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': "",
                    'App-Version': "",
                }
            });
            // this.intiateInterceptor(this.instanceV0);
        } else {
            // this.intiateInterceptor(this.instanceV0);
        }
        return this.instanceV0;
    }
    static getCricketInstance() {
        if (this.cricketInstance == null) {
            this.cricketInstance = axios.create({
                baseURL: 'https://cricket.bookme.pk',
                timeout: 50000,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': "",
                    'App-Version': "",
                }
            });
        } else {
        }
        return this.cricketInstance;
    }

    static formatData(url, params) {
        let form = new FormData();
        for (let key in params) {
            form.append(key, params[key]);
        }
        return this.getInstanceV0().post("", form, {params: {[url]: url}})
            .then(response => response.data);
    }

    static getCall(url) {
        return this.getInstanceV2().get(url).then(response => {
            // alert(JSON.stringify(response))
        })
    }


};
