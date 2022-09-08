/* eslint-disable @typescript-eslint/no-unused-expressions */
import axios from "axios";
import { baseURLServer } from "../constants/url"

class HttpClient {
  apiUrl: any;

  headers: {};
  instance: any;

  // session: any;
  timeout: number;

  constructor() {
    this.apiUrl;
    this.headers = {};
    this.instance;
    this.timeout = 120000;

    this.createApiUrl()
      .createHeaders()
      .createInstance()
      .requestInterceptor()
      .responseInterceptor();
  }

  createApiUrl() {
    this.apiUrl = baseURLServer;
    return this;
  }

  createHeaders() {
    this.headers = {};
    return this;
  }

  addHeaders(headers: object) {
    this.headers = {
      ...this.headers,
      ...headers,
    };
    return this;
  }

  createInstance() {
    this.instance = axios.create({
      baseURL: this.apiUrl,
      timeout: this.timeout,
      headers: this.headers,
    });
    return this;
  }

  requestInterceptor() {
    // const session = this.session;
    this.instance.interceptors.request.use(
      function (config: {
        data: { data: any; } | undefined | any;
        baseURL: any;
        url: any;
      }) {
        if (config.data !== undefined) {
        }
        return config;
      },
      function (error: any) {
        return Promise.reject(error);
      }
    );
    return this;
  }

  responseInterceptor() {
    // const session = this.session;

    this.instance.interceptors.response.use(
      function (response: any) {
        return response;
      },
      function (error: any) {
        return Promise.reject(error);
      }
    );

    return this;
  }

  get(url: string) {
    return this.instance.get(url);
  }

  post(url: string, data: any) {
    return this.instance.post(url, data);
  }
}

export const get = (url: string) => {
  return new HttpClient().get(url);
};
