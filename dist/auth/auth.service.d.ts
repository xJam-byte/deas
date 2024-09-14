import { JwtService } from "@nestjs/jwt";
import { CreateCustomerDto } from "src/user/Dto/create.customer.dto";
import { LoginCustomerDto } from "src/user/Dto/login.customer.dto";
import { User } from "src/user/user.model";
import { UserService } from "src/user/user.service";
export declare class AuthService {
    private customerService;
    private jwtService;
    constructor(customerService: UserService, jwtService: JwtService);
    login(customerDto: LoginCustomerDto): Promise<(User | Promise<{
        token: string;
    }>)[]>;
    registration(customerDto: CreateCustomerDto): Promise<(User | Promise<{
        token: string;
    }>)[]>;
    private generateToken;
    private validateCustomer;
}
