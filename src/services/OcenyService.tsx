import axios from "axios";
import AppConfiguration from "./../configuration/AppConfiguration";

const HOST = AppConfiguration.HOST_API();

//Plik z serwisami do api (get, post, put, delete)

export default class OcenyService {

    //Pobranie wszyskich ocen
    static getOceny = () =>{
        return axios.request({
            method:'get',
            url: HOST+'grades'
        })
    };

    //Dodanie oceny
    static addOcene = (dane: any) =>{
        return axios.request({
            method:'post',
            data: dane,
            url: HOST+'grades'
        })
    };

    //Edycja oceny
    static editOcene = (dane: any) =>{
        return axios.request({
            method:'put',
            data: dane,
            url: HOST+`grades/${dane.id}`
        })
    };

    //Usunięcie oceny
    static deleteOcena = (id: any) =>{
        return axios.request({
            method:'delete',
            url: HOST+`grades/${id}`
        })
    };
}
