import axios from "axios";
export default class RestApi {
    instance = null;
    constructor() {
        // this.intiateInterceptor=this.intiateInterceptor.bind(this)
    }

    static getInstanceV2() {
        if (this.instance == null) {
            this.instance = axios.create({
                baseURL: 'https://arkifpqbll.execute-api.us-east-1.amazonaws.com/Attendence_App',
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
