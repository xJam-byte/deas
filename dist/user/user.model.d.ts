import { Model } from "sequelize-typescript";
export declare class User extends Model<User> {
    user_id: number;
    firstName: string;
    lastName: string;
    Patronymic: string;
    email: string;
    phoneNumber: string;
    password: string;
    children: number;
}
