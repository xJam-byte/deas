import { Model } from "sequelize-typescript";
import { Child } from "src/child/child.model";
import { User } from "src/user/user.model";
export declare class PassedTest extends Model<PassedTest> {
    test_id: number;
    parentId: number;
    user: User;
    childId: number;
    child: Child;
    testPoints: number;
    notes: string;
}
