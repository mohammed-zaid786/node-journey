export function validateInput(value) {
  if (!value || value.trim() === "") {
    return false;
  }

  return true;
}  //it can validate the input is valid or not