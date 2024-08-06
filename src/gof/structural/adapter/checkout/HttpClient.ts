import axios from "axios";
import fetch from "node-fetch";

export default interface HttpClient {
  get<Return = any>(url: string): Promise<Return>;
  post<Body = any, Return = any>(url: string, body: Body): Promise<Return>;
}

export class AxiosAdapter implements HttpClient {
  async get<Return = any>(url: string): Promise<Return> {
    const response = await axios.get<Return>(url);
    return response.data;
  }

  async post<Body = any, Return = any>(
    url: string,
    body: Body
  ): Promise<Return> {
    const response = await axios.post<Return>(url, body);
    return response.data;
  }
}

export class FetchAdapter implements HttpClient {
  async get<Return = any>(url: string): Promise<Return> {
    const response = await fetch(url);
    return response.json() as Return;
  }

  async post<Body = any, Return = any>(
    url: string,
    body: Body
  ): Promise<Return> {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return response.json() as Return;
  }
}
