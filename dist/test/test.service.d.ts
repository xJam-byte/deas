import { Test } from "./test.model";
export declare class TestService {
    private testModel;
    constructor(testModel: typeof Test);
    createTest(testName: string): Promise<Test>;
    findAll(): Promise<Test[]>;
    findOne(testId: number): Promise<Test>;
}
