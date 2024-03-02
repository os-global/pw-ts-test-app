import { BaseController } from "./base.controller";
import { expect } from "@playwright/test";

interface GetTestCaseByIDOkResponseBody {
  id: number;
  name: string;
  description: string;
  author: string;
  status: string;
  executor: string;
}

interface CreateNewTestRequest {
  name: string;
  description: string;
}

interface CreateNewTestResponseBody {
  test_id: number;
}

interface DeleteTestCaseByID200OkResponseBody {
  status: string;
}

export class TestController extends BaseController {
  async get(id = 205): Promise<GetTestCaseByIDOkResponseBody> {
    // const response = await this.api.get(`/test/${id}`);
    const response = await this.api.get(`/api/tests/${id}`);
    console.log(await response.json());
    expect(response.status()).toBe(200);
    return response.json() satisfies Promise<GetTestCaseByIDOkResponseBody>;
  }

  async delete(id = 1): Promise<DeleteTestCaseByID200OkResponseBody> {
    // const response = await this.api.get(`/test/${id}`);
    const response = await this.api.delete(`/api/tests/${id}`, {
      headers: { "X-CSRFToken": `${this.token}` },
    });
    expect(response.status()).toBe(200);
    console.log(await response.json());
    return response.json() satisfies Promise<DeleteTestCaseByID200OkResponseBody>;
  }

  async create(test: CreateNewTestRequest): Promise<CreateNewTestResponseBody> {
    console.log(test);
    console.log({ "X-CSRFToken": `${this.token}` });
    const response = await this.api.post("/api/tests/new", {
      headers: { "X-CSRFToken": `${this.token}` },
      data: test,
    });
    console.log(await response.json());
    expect(response.status()).toBe(201);
    return response.json() satisfies Promise<CreateNewTestResponseBody>;
  }
}
