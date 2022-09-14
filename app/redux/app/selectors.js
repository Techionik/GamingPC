import {createSelector} from 'reselect';

export const rootCommon = state => state.app;
import * as types from './types';

export const languageSelector = createSelector(
    rootCommon, data => data.languagee || types.DEFAULT_LANGUAGE,
);


export const themeSelector = createSelector(
    rootCommon, data => data.theme || 'light',
);

const busCityItemSelector = state => state.logisticCities;
export const cityListSelector = createSelector(busCityItemSelector, listData => {

    let busCitiesList = [];
    for (let i = 0; i < listData.length; i++) {
        let destination = [];

        for (let dest of listData[i].supported_destination_cities) {
            destination.push({
                id: dest.id,
                name: dest.name,
                nameu: dest.name_ur,
                short_name: dest.short_name,
                door_to_door: dest.door_to_door,
                lat: dest.lat,
                lng: dest.long,
                partner_support: dest.partner_support,
            });
        }
        busCitiesList.push({
            id: listData[i].id,
            name: listData[i].name,
            door_to_door: listData[i].door_to_door,
            nameu: listData[i].name_ur,
            short_name: listData[i].short_name,
            partner_support: listData[i].partner_support,
            lat: listData[i].lat,
            lng: listData[i].long,
            destination: destination,
        });

    }
    return busCitiesList;
});
