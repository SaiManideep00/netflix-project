export const ValideData = (name, email, password) => {
  if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  )
    return "Email ID is not valid";
  if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(
      password
    )
  )
    return "Password is not valid";
  if (!/^[a-zA-Z]+ [a-zA-Z]+$/.test(name)) return "Name is not valid";
  else return null;
};
