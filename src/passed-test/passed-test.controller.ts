import { Body, Controller, Post } from "@nestjs/common";
import { PassedTestService } from "./passed-test.service";
import PassTestDto from "./Dto/pass-test.dto";

@Controller("passed-test")
export class PassedTestController {
  constructor(private testService: PassedTestService) {}

  @Post("/submitTest")
  endTest(@Body() passedTest: PassTestDto) {
    return this.testService.submitTest(passedTest);
  }
}
