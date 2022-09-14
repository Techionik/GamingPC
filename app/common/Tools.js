import {Images} from './index';
import moment from 'moment';
// import {showLocation} from 'react-native-map-link';
// import ImagePicker from 'react-native-image-picker';
// import ImageResizer from "react-native-image-resizer";
// import {check,request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {toast} from "../Omni";

export default class Tools {
    static getName = (user) => {
        if (user) {
            if (user.name) return user.name;
            return "Guest";
        }
        return "Guest";
    };
    static  priceFormat(fare){
        return fare.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    static getAvatar = (user) => {
        // alert(JSON.stringify(user?.picture))

        if (user?.picture) {
            return {
                uri: user?.picture,
            };
        } else if (user && user.user) {
            if (user.user && user.user.thumb !== "") {
                return {
                    uri: user.user.thumb,
                };
            }
            return Images.defaultAvatar;
        }

        return Images.defaultAvatar;
    }

    static secondsToHms (d) {
        d = Number(d)
        const h = Math.floor(d / 3600)
        const m = Math.floor(d % 3600 / 60)
        const s = Math.floor(d % 3600 % 60)

        const hDisplay = h > 0 ? h + (h === 1 ? ' h ' : 'h ') : '0h'
        const mDisplay = m > 0 ? m + (m === 1 ? ' m ' : 'm ') : '0m'
        const sDisplay = s > 0 ? s + (s === 1 ? ' s ' : 's ') : '0s'
        return hDisplay + ' ' + mDisplay + ' ' + sDisplay
    }

    static remaingDailTime(userInfo,datee){
        const values = userInfo.user
        if (values.daily_point_date) {
            try {
                const remaingtime = (moment(values.daily_point_date, 'YYYY-MM-DD HH:mm:ss').unix() + 86400) - datee
                if (remaingtime > 0) {
                    return remaingtime
                } else {
                    return undefined
                }
            } catch (e) {
                return undefined
            }
        } else {
            return undefined
        }
    }

    static getCityNameFromAddress(responseJson,logisticCities) {
        let scityname = '';
        for (let mainObject of responseJson.results) {
            for (let object of mainObject.address_components) {
                if (logisticCities.filter(item => item.name.toLowerCase() === object?.short_name.toLowerCase()).length > 0) {
                    scityname = object.short_name;
                }
            }
        }
        if (scityname === '') {
            let leghth = responseJson.results[0].address_components.length;
            scityname = responseJson.results[0].address_components[leghth>3?leghth - 3:0].short_name;
        }
        return scityname;
    }

    static secondsToHms(d) {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);

        var hDisplay = h > 0 ? h + (h == 1 ? " h " : "h ") : "0h";
        var mDisplay = m > 0 ? m + (m == 1 ? " m " : "m ") : "0m";
        var sDisplay = s > 0 ? s + (s == 1 ? " s " : "s ") : "0s";
        return hDisplay + " " + mDisplay + " " + sDisplay;
    }

    static minutesConvertor(minutes){
        let hours = Math.floor(minutes / 60);
        let mins = minutes % 60;
        return hours+"hr "+mins+"min"
    }
    static sortAscending = (notification) => {
        return notification.sort(this.compareValues("date", "desc"));
    }


    static compareValues(key, order = 'asc') {
        return function (a, b) {
            if (!a.hasOwnProperty(key) ||
                !b.hasOwnProperty(key)) {
                return 0;
            }

            const varA = (typeof a[key] === 'string') ?
                a[key].toUpperCase() : a[key];
            const varB = (typeof b[key] === 'string') ?
                b[key].toUpperCase() : b[key];

            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            } else if (varA < varB) {
                comparison = -1;
            }
            return (
                (order == 'desc') ?
                    (comparison * -1) : comparison
            );
        };
    }

    static capitalize(s) {
        return s && s[0].toUpperCase() + s.slice(1).toLowerCase();
    }

    static getValidAlphabetsOnly(s){
        return /^[a-zA-Z\s]+$/.test(s);
    }

    static everFirstLetter(splitStr) {
        for (var i = 0; i < splitStr.length; i++) {
            // You do not need to check if i is larger than splitStr length, as your for does that for you
            // Assign it back to the array
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)+'  ';
        }
        return splitStr
    }

    static nextSixDays(){
        let dateList=[];
        let tomorrow = moment().format("YYYY-MM-DD");
        for (let i = 0; i <= 6; i++) {
            dateList[i] = tomorrow
            tomorrow = moment(tomorrow).add(1, 'day').format('YYYY-MM-DD');
        }
        return dateList;
    }


    // static getFileStoragePermission=()=>{
    //    return  request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE)
    //         .then((result) => {
    //             switch (result) {
    //                 case RESULTS.UNAVAILABLE:
    //                     toast('This feature is not available (on this device / in this context)');
    //                     return  true
    //                 case RESULTS.DENIED:
    //                     toast('The permission has not been requested / is denied but requestable');
    //                     return  true
    //                 case RESULTS.LIMITED:
    //                     toast('The permission is limited: some actions are possible');
    //                     break;
    //                 case RESULTS.GRANTED:
    //                     // toast('The permission is granted');
    //                     return  true
    //                 case RESULTS.BLOCKED:
    //                     toast('The permission is denied and not requestable anymore');
    //                     return  true
    //             }
    //         })
    //         .catch((error) => {
    //
    //         });
    // }

    static isHTML=(data)=>{
        return /<\/?[a-z][\s\S]*>/i.test(data)
    }

}
