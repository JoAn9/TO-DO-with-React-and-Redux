import * as toastr from 'toastr';

export class ErrorHandler {
  static handle(response) {
    if (response.status === 401) {
      toastr.error("You are not authorized you hacker!")
    } else if (response.status === 404) {
      toastr.warning("Content not found");
    } else {
      toastr.info("Unknown error");
    }
  }
}