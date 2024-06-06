/* eslint-disable @typescript-eslint/no-namespace */

export type User = ComExample.User;

export namespace ComExample {
    export const NameSchema = "{\"type\":\"record\",\"name\":\"Name\",\"fields\":[{\"type\":\"string\",\"name\":\"first\"},{\"type\":[\"null\",\"string\"],\"name\":\"middle\",\"default\":null},{\"type\":\"string\",\"name\":\"last\"}]}";
    export const NameName = "com.example.Name";
    export interface Name {
        first: string;
        /**
         * Default: null
         */
        middle: null | string;
        last: string;
    }
    export const CoordinatesSchema = "{\"type\":\"record\",\"name\":\"Coordinates\",\"fields\":[{\"type\":\"double\",\"name\":\"latitude\"},{\"type\":\"double\",\"name\":\"longitude\"}]}";
    export const CoordinatesName = "com.example.Coordinates";
    export interface Coordinates {
        latitude: number;
        longitude: number;
    }
    export const LocationSchema = "{\"type\":\"record\",\"name\":\"Location\",\"fields\":[{\"type\":\"string\",\"name\":\"street\"},{\"type\":\"string\",\"name\":\"city\"},{\"type\":\"string\",\"name\":\"state\"},{\"type\":\"string\",\"name\":\"country\"},{\"type\":\"string\",\"name\":\"zip\"},{\"type\":{\"type\":\"record\",\"name\":\"Coordinates\",\"fields\":[{\"type\":\"double\",\"name\":\"latitude\"},{\"type\":\"double\",\"name\":\"longitude\"}]},\"name\":\"coordinates\"}]}";
    export const LocationName = "com.example.Location";
    export interface Location {
        street: string;
        city: string;
        state: string;
        country: string;
        zip: string;
        coordinates: ComExample.Coordinates;
    }
    export const JobSchema = "{\"type\":\"record\",\"name\":\"Job\",\"fields\":[{\"type\":\"string\",\"name\":\"title\"},{\"type\":\"string\",\"name\":\"descriptor\"},{\"type\":\"string\",\"name\":\"area\"},{\"type\":\"string\",\"name\":\"type\"},{\"type\":\"string\",\"name\":\"company\"}]}";
    export const JobName = "com.example.Job";
    export interface Job {
        title: string;
        descriptor: string;
        area: string;
        type: string;
        company: string;
    }
    export const CreditCardSchema = "{\"type\":\"record\",\"name\":\"CreditCard\",\"fields\":[{\"type\":\"string\",\"name\":\"number\"},{\"type\":\"string\",\"name\":\"cvv\"},{\"type\":\"string\",\"name\":\"issuer\"}]}";
    export const CreditCardName = "com.example.CreditCard";
    export interface CreditCard {
        number: string;
        cvv: string;
        issuer: string;
    }
    export const UserSchema = "{\"namespace\":\"com.example\",\"type\":\"record\",\"name\":\"User\",\"fields\":[{\"type\":{\"type\":\"record\",\"name\":\"Name\",\"fields\":[{\"type\":\"string\",\"name\":\"first\"},{\"type\":[\"null\",\"string\"],\"name\":\"middle\",\"default\":null},{\"type\":\"string\",\"name\":\"last\"}]},\"name\":\"name\"},{\"type\":\"string\",\"name\":\"username\"},{\"type\":\"string\",\"name\":\"password\"},{\"type\":{\"type\":\"array\",\"items\":\"string\"},\"name\":\"emails\"},{\"type\":\"string\",\"name\":\"phoneNumber\"},{\"type\":{\"type\":\"record\",\"name\":\"Location\",\"fields\":[{\"type\":\"string\",\"name\":\"street\"},{\"type\":\"string\",\"name\":\"city\"},{\"type\":\"string\",\"name\":\"state\"},{\"type\":\"string\",\"name\":\"country\"},{\"type\":\"string\",\"name\":\"zip\"},{\"type\":{\"type\":\"record\",\"name\":\"Coordinates\",\"fields\":[{\"type\":\"double\",\"name\":\"latitude\"},{\"type\":\"double\",\"name\":\"longitude\"}]},\"name\":\"coordinates\"}]},\"name\":\"location\"},{\"type\":\"string\",\"name\":\"website\"},{\"type\":\"string\",\"name\":\"domain\"},{\"type\":{\"type\":\"record\",\"name\":\"Job\",\"fields\":[{\"type\":\"string\",\"name\":\"title\"},{\"type\":\"string\",\"name\":\"descriptor\"},{\"type\":\"string\",\"name\":\"area\"},{\"type\":\"string\",\"name\":\"type\"},{\"type\":\"string\",\"name\":\"company\"}]},\"name\":\"job\"},{\"type\":{\"type\":\"record\",\"name\":\"CreditCard\",\"fields\":[{\"type\":\"string\",\"name\":\"number\"},{\"type\":\"string\",\"name\":\"cvv\"},{\"type\":\"string\",\"name\":\"issuer\"}]},\"name\":\"creditCard\"},{\"type\":\"string\",\"name\":\"uuid\"},{\"type\":\"string\",\"name\":\"objectId\"}]}";
    export const UserName = "com.example.User";
    export interface User {
        name: ComExample.Name;
        username: string;
        password: string;
        emails: string[];
        phoneNumber: string;
        location: ComExample.Location;
        website: string;
        domain: string;
        job: ComExample.Job;
        creditCard: ComExample.CreditCard;
        uuid: string;
        objectId: string;
    }
}
