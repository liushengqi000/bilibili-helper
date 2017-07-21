import { Injectable } from '@angular/core';
import { BHLoggerModule } from '../logger';

@Injectable()
export class BHStorejsService {
    constructor(logger: BHLoggerModule) { }
    private storage = window.localStorage;
    isJSON(obj: any) {
        return typeof obj === "object" && Object.prototype.toString.call(obj).toLowerCase() === "[object object]" && !obj.length;
    }
    stringify(val: any) {
        return val === undefined || typeof val === "function" ? val + "" : JSON.stringify(val);
    }
    deserialize(value: any) {
        if (typeof value !== "string") {
            return undefined;
        }
        try {
            return JSON.parse(value);
        } catch (e) {
            return value || undefined;
        }
    }
    set(key: any, val: any): any {
        if (key && !this.isJSON(key)) {
            this.storage.setItem(key, this.stringify(val));
        } else if (key && this.isJSON(key) && !val) {
            for (let a in key) this.set(a, key[a]);
        }
        return this;
    }
    get(key?: any): any {
        if (!key) {
            var ret = {};
            this.forEach(function (key: string, val: any) {
                ret[key] = val;
            });
            return ret;
        }
        if (key.charAt(0) === "?") {
            return this.has(key.substr(1));
        }
        return this.deserialize(this.storage.getItem(key));
    }
    remove(key: string): string {
        var val = this.get(key);
        this.storage.removeItem(key);
        return val;
    }
    has(key: any): boolean {
        return {}.hasOwnProperty.call(this.get(), key);
    }
    clear() {
        this.storage.clear();
        return this;
    }
    forEach(callback: any) {
        for (var i = 0; i < this.storage.length; i++) {
            var key = this.storage.key(i);
            if (callback(key, this.get(key)) === false) break;
        }
        return this;
    }
    keys() {
        let a: any[] = [];
        this.forEach(function (k: string) {
            a.push(k);
        });
        return a;
    }
    size() {
        return this.keys().length;
    }
    search(str: string) {
        var arr = this.keys(), dt = {};
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].indexOf(str) > -1) dt[arr[i]] = this.get(arr[i]);
        }
        return dt;
    }
}