/* eslint-disable @typescript-eslint/no-namespace */

export type Job = PlJan.Job;

export namespace PlJan {
    export const JobSchema = "{\"namespace\":\"pl.jan\",\"type\":\"record\",\"name\":\"Job\",\"fields\":[{\"type\":\"int\",\"name\":\"duration\"},{\"type\":\"string\",\"name\":\"jobid\"},{\"type\":[\"null\",{\"type\":\"long\",\"logicalType\":\"time-millis\"}],\"name\":\"submitDate\",\"default\":null}]}";
    export const JobName = "pl.jan.Job";
    export interface Job {
        duration: number;
        jobid: string;
        /**
         * Default: null
         */
        submitDate: null | number;
    }
}
