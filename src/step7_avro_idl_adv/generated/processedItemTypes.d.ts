/* eslint-disable @typescript-eslint/no-namespace */

export type Item = ComExample.Item;

export namespace ComExample {
    export const TextSchema = "{\"type\":\"record\",\"name\":\"Text\",\"fields\":[{\"type\":\"string\",\"name\":\"id\"},{\"type\":\"string\",\"name\":\"text\"}]}";
    export const TextName = "com.example.Text";
    export interface Text {
        id: string;
        text: string;
    }
    export const ImageSchema = "{\"type\":\"record\",\"name\":\"Image\",\"fields\":[{\"type\":\"string\",\"name\":\"id\"},{\"type\":\"string\",\"name\":\"url\"}]}";
    export const ImageName = "com.example.Image";
    export interface Image {
        id: string;
        url: string;
    }
    export const AudioSchema = "{\"type\":\"record\",\"name\":\"Audio\",\"fields\":[{\"type\":\"string\",\"name\":\"id\"},{\"type\":\"string\",\"name\":\"url\"},{\"type\":\"string\",\"name\":\"transcript\"}]}";
    export const AudioName = "com.example.Audio";
    export interface Audio {
        id: string;
        url: string;
        transcript: string;
    }
    export const ChoiceInteractionSchema = "{\"type\":\"record\",\"name\":\"ChoiceInteraction\",\"fields\":[{\"type\":\"string\",\"name\":\"id\"},{\"type\":[\"null\",\"int\"],\"name\":\"maxScore\",\"default\":null},{\"type\":[{\"type\":\"record\",\"name\":\"Text\",\"fields\":[{\"type\":\"string\",\"name\":\"id\"},{\"type\":\"string\",\"name\":\"text\"}]},{\"type\":\"record\",\"name\":\"Image\",\"fields\":[{\"type\":\"string\",\"name\":\"id\"},{\"type\":\"string\",\"name\":\"url\"}]},{\"type\":\"record\",\"name\":\"Audio\",\"fields\":[{\"type\":\"string\",\"name\":\"id\"},{\"type\":\"string\",\"name\":\"url\"},{\"type\":\"string\",\"name\":\"transcript\"}]}],\"name\":\"key\"},{\"type\":{\"type\":\"array\",\"items\":[\"Text\",\"Image\",\"Audio\"]},\"name\":\"distractors\",\"default\":[]}]}";
    export const ChoiceInteractionName = "com.example.ChoiceInteraction";
    export interface ChoiceInteraction {
        id: string;
        /**
         * Default: null
         */
        maxScore: null | number;
        key: {
            "com.example.Text": ComExample.Text;
            "com.example.Image"?: never;
            "com.example.Audio"?: never;
        } | {
            "com.example.Text"?: never;
            "com.example.Image": ComExample.Image;
            "com.example.Audio"?: never;
        } | {
            "com.example.Text"?: never;
            "com.example.Image"?: never;
            "com.example.Audio": ComExample.Audio;
        };
        /**
         * Default: []
         */
        distractors: (ComExample.Text | ComExample.Image | ComExample.Audio)[];
    }
    export const TextEntryInteractionSchema = "{\"type\":\"record\",\"name\":\"TextEntryInteraction\",\"fields\":[{\"type\":\"string\",\"name\":\"id\"},{\"type\":[\"null\",\"int\"],\"name\":\"maxScore\",\"default\":null},{\"type\":{\"type\":\"array\",\"items\":\"Text\"},\"name\":\"keys\",\"default\":[]}]}";
    export const TextEntryInteractionName = "com.example.TextEntryInteraction";
    export interface TextEntryInteraction {
        id: string;
        /**
         * Default: null
         */
        maxScore: null | number;
        /**
         * Default: []
         */
        keys: ComExample.Text[];
    }
    export const ItemSchema = "{\"namespace\":\"com.example\",\"type\":\"record\",\"name\":\"Item\",\"fields\":[{\"type\":\"string\",\"name\":\"itemId\"},{\"type\":\"string\",\"name\":\"itemName\"},{\"type\":[\"null\",\"int\"],\"name\":\"maxScore\",\"default\":null},{\"type\":\"string\",\"name\":\"updatedAt\"},{\"type\":[\"null\",\"string\"],\"name\":\"data\",\"default\":null},{\"type\":{\"type\":\"array\",\"items\":[{\"type\":\"record\",\"name\":\"ChoiceInteraction\",\"fields\":[{\"type\":\"string\",\"name\":\"id\"},{\"type\":[\"null\",\"int\"],\"name\":\"maxScore\",\"default\":null},{\"type\":[{\"type\":\"record\",\"name\":\"Text\",\"fields\":[{\"type\":\"string\",\"name\":\"id\"},{\"type\":\"string\",\"name\":\"text\"}]},{\"type\":\"record\",\"name\":\"Image\",\"fields\":[{\"type\":\"string\",\"name\":\"id\"},{\"type\":\"string\",\"name\":\"url\"}]},{\"type\":\"record\",\"name\":\"Audio\",\"fields\":[{\"type\":\"string\",\"name\":\"id\"},{\"type\":\"string\",\"name\":\"url\"},{\"type\":\"string\",\"name\":\"transcript\"}]}],\"name\":\"key\"},{\"type\":{\"type\":\"array\",\"items\":[\"Text\",\"Image\",\"Audio\"]},\"name\":\"distractors\",\"default\":[]}]},{\"type\":\"record\",\"name\":\"TextEntryInteraction\",\"fields\":[{\"type\":\"string\",\"name\":\"id\"},{\"type\":[\"null\",\"int\"],\"name\":\"maxScore\",\"default\":null},{\"type\":{\"type\":\"array\",\"items\":\"Text\"},\"name\":\"keys\",\"default\":[]}]}]},\"name\":\"interactions\",\"default\":[]},{\"type\":\"string\",\"name\":\"change_id\"},{\"type\":\"string\",\"name\":\"change_name\"},{\"type\":{\"type\":\"long\",\"logicalType\":\"timestamp-millis\"},\"name\":\"timestamp\"}]}";
    export const ItemName = "com.example.Item";
    export interface Item {
        itemId: string;
        itemName: string;
        /**
         * Default: null
         */
        maxScore: null | number;
        updatedAt: string;
        /**
         * Default: null
         */
        data: null | string;
        /**
         * Default: []
         */
        interactions: ({
            "com.example.ChoiceInteraction": ComExample.ChoiceInteraction;
            "com.example.TextEntryInteraction"?: never;
        } | {
            "com.example.ChoiceInteraction"?: never;
            "com.example.TextEntryInteraction": ComExample.TextEntryInteraction;
        })[];
        change_id: string;
        change_name: string;
        timestamp: number;
    }
}
