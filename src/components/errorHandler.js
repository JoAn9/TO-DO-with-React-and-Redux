import * as toastr from 'toastr';
import "../../node_modules/toastr/build/toastr.min.css";

export class ErrorHandler {
  static handle(error) {
    if (error.response.status === 401) {
      toastr.error("You are not authorized you hacker!")
    } else if (error.response.status === 404) {
      toastr.warning("Content not found");
    } else {
      toastr.info("Unknown error");
    }
  }
}